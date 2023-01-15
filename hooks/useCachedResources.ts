import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { getData, storeDate, containsKey } from "../storage";
import data from "../data.json";
import { clearWorkouts, getWorkouts, initWorkouts } from "../storage/workout";

export default function useCachedResourced() {
    const [isLoadindComplete, setIsLoadingComplete] = useState(false);

    useEffect(() =>{
        async function loadResourcesAndDataAsync() {
            try {
                await initWorkouts();
                await Font.loadAsync({
                    "sofiasans": require("../assets/fonts/SofiaSans-Regular.ttf"),
                    "sofiasans-bold": require("../assets/fonts/SofiaSans-Bold.ttf")
                })
            } catch (e) {
                console.warn(e)
            } finally {
                const workout = await getWorkouts(); 
                console.log(workout)
                setIsLoadingComplete(true);
            }
        }

        loadResourcesAndDataAsync()
    }, [isLoadindComplete])
    console.log("Returning:", isLoadindComplete)
    return isLoadindComplete;
}