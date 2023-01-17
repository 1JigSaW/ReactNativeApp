import { useState } from "react";
import { View, Text, Button, StyleSheet, Pressable, Modal as DefaultModal } from "react-native";
import { PressableText } from "./PressableText";
 
export function Modal() {
    const [isModalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <DefaultModal
                visible={isModalVisible}
                transparent={false}
                animationType="slide"
            >
                <View style={styles.centerView}>
                    <Text>Hello There!</Text>
                    <PressableText
                        onPress={() => setModalVisible(false)}
                        text="Close"
                    />
                </View>
            </DefaultModal>
            <PressableText
                onPress={() => setModalVisible(true)}  
                text="Check Sequence"
            />
        </View>
    )
}


const styles = StyleSheet.create({
    centerView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})