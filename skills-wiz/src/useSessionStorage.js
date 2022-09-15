import React, { useEffect, useState } from "react";

const getSessionStorage= (key, defaultValue)=>{
    const stored = sessionStorage.getItem(key);
    if (!stored) {
        return defaultValue;
    }
    return JSON.parse(stored);

}

const useSessionStorage = (key, defaultValue)=>{
    const [value, setValue] = useState(
        getSessionStorage(key, defaultValue)
    )

    useEffect(()=>{
        sessionStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export default useSessionStorage;