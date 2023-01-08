import { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function PlannerScreen({navigation}: any) {

    useEffect(() => {
        console.log("Rending Test Screen");

        return () => console.log("Unmounting Test Screen")
    }, [])

    return (
        <View>
            <Text>I am test screen</Text>
            <Button 
                title="Go to Home" 
                onPress={() => navigation.push("Root")}
            />
        </View>
    )
}