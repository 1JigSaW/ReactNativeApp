import { useEffect } from "react";
import { SofiaSans } from "../comonents/styled/SofiaSans";
import { View, Text, Button, StyleSheet, FlatList, Pressable } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import data from "../data.json"
import { Workout } from "../types/data";
import WorkoutItem from "../comonents/WorkoutItem";
import Navigation from "../navigation";

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
            <SofiaSans
            style={{fontSize: 30}}
            >
                New Workout
            </SofiaSans>
            <FlatList
                data={data as Workout[]}
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