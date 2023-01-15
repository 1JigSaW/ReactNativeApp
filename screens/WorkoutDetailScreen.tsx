import { SofiaSans } from "../comonents/styled/SofiaSans";
import { View, Text, Button, StyleSheet,} from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { getWorkoutsBySlug } from "../storage/workout";

type DetailParams = {
    route: {
      params: {
        slug: string
      }
    }
  }
  
  type Navigation = NativeStackHeaderProps & DetailParams
  
  export default function WorkoutDetailScreen({route}: Navigation) {

    useEffect(() => {
        async function getData() {
            const workout = await getWorkoutsBySlug(route.params.slug);
            console.log(workout)
        }

        getData();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Slug - {route.params.slug}</Text>
            <SofiaSans
            style={{fontSize: 30}}
            >
                New Workout
            </SofiaSans>
            
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

