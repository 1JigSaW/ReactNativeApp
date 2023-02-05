import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import ExerciseForm, { ExerciseFormDate } from "../comonents/ExerciseForm";
import { SequenceItem, SequenceType } from "../types/data";
import slugify from "slugify";
import { useState } from "react";
import ExerciseItem from "../comonents/ExerciseItem";
import { PressableText } from "../comonents/styled/PressableText";

export default function PlannerScreen({navigation}: any) {
    const [seqItems, setSeqItems] = useState<SequenceItem[]>([]);

    const handleFormSubmit = (form: ExerciseFormDate) => {
        const sequenceItem: SequenceItem = {
            slug: slugify(form.name + " " +  Date.now(), {lower: true}),
            name: form.name,
            type: form.type as SequenceType,
            duration: Number(form.duration)
        };

        if (form.reps) {
            sequenceItem.reps = Number(form.reps)
        }

        setSeqItems([...seqItems, sequenceItem])
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
                                setSeqItems(items)
                            }}                        
                        />
                    </ExerciseItem>
                }
                keyExtractor={item => item.slug}
            />
           <ExerciseForm 
                onSubmit={handleFormSubmit}
           />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    }
})