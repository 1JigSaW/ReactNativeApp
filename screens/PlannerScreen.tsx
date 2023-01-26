import { View, Text, Button, StyleSheet } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import WorkoutForm from "../comonents/styled/WorkoutForm";

export default function PlannerScreen({navigation}: any) {


    return (
        <View style={styles.container}>
           <WorkoutForm />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    }
})