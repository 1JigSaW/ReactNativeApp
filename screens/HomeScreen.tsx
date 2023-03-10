import { useEffect, useState } from "react";
import { SofiaSans } from "../comonents/styled/SofiaSans";
import { View, Text, Button, StyleSheet, FlatList, Pressable } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import WorkoutItem from "../comonents/WorkoutItem";
import Navigation from "../navigation";
import { useWorkouts } from "../hooks/useWorkouts";
import { ThemeText } from "./Text";

export default function HomeScreen({navigation}: any) {

    const workouts = useWorkouts();

    return (
        <View style={styles.container}>
            <ThemeText style={styles.header}>New Workouts</ThemeText>
            <FlatList
                data={workouts}
                renderItem={({item}) => {
                    return (
                    <Pressable
                    onPress={() =>
                        navigation.navigate("WorkoutDetail", {slug: item.slug})
                    }
                    >
                    <WorkoutItem
                        item={item}
                    />
                    </Pressable>
                );}}
                keyExtractor={item => item.slug}
            />
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
    }
})