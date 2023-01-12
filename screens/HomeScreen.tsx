import { useEffect } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import data from "../data.json"
import { Workout } from "../types/data";
import WorkoutItem from "../comonents/WorkoutItem";

export default function HomeScreen({navigation}: any) {

    // const workout = Workout => {
    //     slug: "sdas",
    //     name: "asdas",
    //     duration: 123,
    //     difficulty: "hard",
    //     sequence: []
    // }

    // const renderItem = ({item}: {item: Workout}) => (
    //     <View>
    //         <Text>{item.name}</Text>
    //         <Text>{item.difficulty}</Text>
    //     </View>
    // )

    return (
        <View style={styles.container}>
            <Text style={styles.header}>New Workout</Text>
            <FlatList
                data={data as Workout[]}
                renderItem={WorkoutItem}
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
        fontFamily: "sofiasans-bold"
    }
})