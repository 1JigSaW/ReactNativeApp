import { useEffect, useRef, useState } from "react";




export function useCountDown(
    idx: number,
    initialCount: number
) {
    const intervalRef = useRef<number>();
    const [countDown, setCountDown] = useState(initialCount);

    useEffect(() => {
        debugger
        if (idx == -1) { return; }
        
  
        intervalRef.current = window.setInterval(() => {
          setCountDown((count) => {
            debugger
            console.log(count);
            return count -1
          })
        }, 50)
  
        return cleaup;
  
    }, [idx]);

    useEffect(() => {
        setCountDown(initialCount);
    }, [initialCount]);

    useEffect(() => {
        if (countDown === 0) {
            debugger
            cleaup();
        }
    }, [countDown]);

    const cleaup = () => {
        debugger
        if (intervalRef.current) {
            window.clearInterval(intervalRef.current)
            intervalRef.current = undefined;
        }
    }
    

    return countDown;
}