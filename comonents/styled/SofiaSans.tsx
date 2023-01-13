import React from "react";
import { Text } from "react-native";

type MyCustomType = {
    children: React.ReactNode,
    name: string,
}

export function SofiaSans(props: Text["props"]) {

    const myType: MyCustomType["name"] = '1';

    return (
        <Text 
            {...props}
            style={[props.style, {fontFamily: "sofiasans"}]}
        />
    )
}