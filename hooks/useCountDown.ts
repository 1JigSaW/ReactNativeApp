import { useEffect, useRef, useState } from "react";




export function useCountDown(
    idx: number,
    initialCount: number
) {
    const intervalRef = useRef<number>();
    const [countDown, setCountDown] = useState(initialCount);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (idx == -1) { return; }
        
        if (isRunning && !intervalRef.current) {
            intervalRef.current = window.setInterval(() => {
              setCountDown((count) => {
                return count - 1;
              })
            }, 10)
          }
          return cleaup;
        }, [idx, isRunning])

    // useEffect(() => {
    //     setCountDown(initialCount);
    // }, [initialCount]);

    useEffect(() => {
        if (countDown === 0) {
            cleaup();
        }
    }, [countDown]);

    const cleaup = () => {
        if (intervalRef.current) {
            setIsRunning(false);
            window.clearInterval(intervalRef.current)
            intervalRef.current = undefined;
        }
    }
    

    return {
        countDown,
        isRunning,
        stop: cleaup,
        start: (count?: number) => {
            setCountDown(count ?? initialCount);
            setIsRunning(true);
        }
    };
}