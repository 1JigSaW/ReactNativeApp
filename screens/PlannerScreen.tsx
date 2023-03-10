import React, { useState } from "react";
import slugify from "slugify";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import ExerciseForm, { ExerciseFormDate } from "../comonents/ExerciseForm";
import ExerciseItem from "../comonents/ExerciseItem";
import { SequenceItem, SequenceType, Workout } from "../types/data";
import { PressableText } from "../comonents/styled/PressableText";
import { Modal } from "../comonents/styled/Modal";
import WorkoutForm, { WorkoutFormDate } from "../comonents/styled/WorkoutForm";
import { storeWorkout } from "../storage/workout";


export default function PlannerScreen({navigation}: NativeStackHeaderProps) {
  const [seqItems, setSeqItems] = useState<SequenceItem[]>([]);

  const handleExerciseSubmit = (form: ExerciseFormDate) => {
    const sequenceItem: SequenceItem = {
      slug: slugify(form.name + " " + Date.now(), {lower: true}),
      name: form.name,
      type: form.type as SequenceType,
      duration: Number(form.duration)
    };

    if (form.reps) {
      sequenceItem.reps = Number(form.reps)
    }

    setSeqItems([...seqItems, sequenceItem]);
  }

  const computeDiff = (exercisesCount: number, workoutDuration: number) => {
    const intensity = workoutDuration / exercisesCount;

    if (intensity <= 60) {
      return "hard";
    } else if (intensity <= 100) {
      return "normal";
    } else {
      return "easy";
    }

  }

  const handleWorkoutSubmit = async (form: WorkoutFormDate) => {
    if (seqItems.length > 0) {

      const duration = seqItems.reduce((acc, item) => {
        return acc + item.duration;
      }, 0)

      const workout: Workout = {
        name: form.name,
        slug: slugify(form.name + " " + Date.now(), {lower: true}),
        difficulty: computeDiff(seqItems.length, duration),
        sequence: [...seqItems],
        duration,
      }

      await storeWorkout(workout);
    }

  }

  return (
    <View style={styles.container}>
      <FlatList
        data={seqItems}
        renderItem={({item, index}) =>
          <ExerciseItem item={item}>
            <PressableText
                    text="Remove"
                    onPressIn={() => {
                        const items = [...seqItems];
                        items.splice(index, 1);
                        setSeqItems(items);
                    } } style={undefined}            />
          </ExerciseItem>
        }
        keyExtractor={item => item.slug}
      />
      <ExerciseForm
        onSubmit={handleExerciseSubmit}
      />
      <View>
        <Modal
          activator={({handleOpen}) =>
            <PressableText
              style={{marginTop: 15}}
              text="Create Workout"
              onPress={handleOpen}
            />
          }
          >
          { ({handleClose}) =>
            <View>
              <WorkoutForm
                onSubmit={async (data) => {
                  await handleWorkoutSubmit(data);
                  handleClose();
                  navigation.navigate("Home");
                }}
              />
            </View>
          }
        </Modal>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
})