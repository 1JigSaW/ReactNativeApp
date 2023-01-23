
import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import React, { useEffect, useState } from "react";
import { Modal } from "../comonents/styled/Modal";
import { PressableText } from "../comonents/styled/PressableText";
import { formatSec } from "../utils/time";
import { FontAwesome } from "@expo/vector-icons";
import WorkoutItem from "../comonents/WorkoutItem";
import { SequenceItem } from "../types/data";
import { useCountDown } from "../hooks/useCountDown";

type DetailParams = {
    route: {
      params: {
        slug: string
      }
    }
  }
  
  type Navigation = NativeStackHeaderProps & DetailParams
  
  export default function WorkoutDetailScreen({route}: Navigation) {

    const [sequence, setSequence] = useState<SequenceItem[]>([]);
    const [trackerIdx, setTrackerIdx] = useState(-1);

    const workout = useWorkoutBySlug(route.params.slug);

    const countDown = useCountDown(
      trackerIdx,
      trackerIdx >= 0 ? sequence[trackerIdx].duration : -1
    )

    const addItemToSequence = (idx: number) => {
      debugger
      setSequence([...sequence, workout!.sequence[idx]]);
      setTrackerIdx(idx)
    }

    return (
        <View style={styles.container}>
            <WorkoutItem
              item={workout}
              childStyles={{marginTop: 10}}
            >
          <Modal
            activator={({handleOpen}) =>
              <PressableText
                onPress={handleOpen}
                text="Check Sequence"
              />
            }
          >
            <View>
              { workout?.sequence.map((si, idx) =>
                <View
                  key={si.slug}
                  style={styles.sequenceItem}
                >
                  <Text>
                    {si.name} | {si.type} | {formatSec(si.duration)}
                  </Text>
                  { idx !== workout.sequence.length - 1 &&
                    <FontAwesome
                      name="arrow-down"
                      size={20}
                    />
                  }
                </View>
              )}
            </View>
          </Modal>
        </WorkoutItem>
        <View>
          { sequence.length === 0 &&
          <FontAwesome 
            name="play-circle-o"
            size={100}
            onPress={() => addItemToSequence(0)}
          />
          }
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    header: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: "bold",
    },
    sequenceItem: {
      alignItems: "center"
    }
})
