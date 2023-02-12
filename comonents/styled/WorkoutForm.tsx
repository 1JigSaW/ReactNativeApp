import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { PressableText } from "./PressableText";


export type WorkoutFormDate = {
    name: string
}

type WorkoutProps = {
    onSubmit: (form: WorkoutFormDate) => void
}

export default function WorkoutForm({
    onSubmit
}: WorkoutProps) {

    const { control, handleSubmit } = useForm();

    return (
        <View style={styles.container}>
            <Controller 
                control={control}
                rules={{
                    required: true
                }}
                name="name"
                render={({ field: {onChange, value}  }) =>
                    <TextInput 
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                        placeholderTextColor={"rgba(0,0,0,0.4)"}
                        placeholder="Workout name"
                    />
                }
            />
            <PressableText 
                style={{marginTop: 15}}
                text="Confirm"
                onPress={handleSubmit((data) => {
                    onSubmit(data as WorkoutFormDate);  
                })}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10
    },
    input: {
        width: 200,
        height: 30,
        margin: 2,
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        borderColor: "rgba(0,0,0,0.4)",
    }
})