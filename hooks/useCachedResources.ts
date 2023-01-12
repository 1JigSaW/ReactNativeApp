import { useEffect, useState } from "react";
import * as Font from "expo-font";


export default function useCachedResourced() {
    const [isLoadindComplete, setIsLoadingComplete] = useState(false);

    useEffect(() =>{
        async function loadResourcesAndDataAsync() {
            try {
                await Font.loadAsync({
                    "sofiasans": require("../assets/fonts/SofiaSans-Regular.ttf"),
                    "sofiasans-bold": require("../assets/fonts/SofiaSans-Bold.ttf")
                })
            } catch (e) {
                console.warn(e)
            } finally {
                setIsLoadingComplete(true);
            }
        }

        loadResourcesAndDataAsync()
    }, [isLoadindComplete])
    console.log("Returning:", isLoadindComplete)
    return isLoadindComplete;
}