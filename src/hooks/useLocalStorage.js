import {useState,useEffect } from "react"

function useLocalStorage(key,defaultValue){
    const [value,setValue]=useState(()=>{
       const jsonValue=localStorage.getItem(key)
       if(jsonValue!=null) return JSON.parse(jsonValue)
       
       if(typeof deafultValue==="function"){
           return defaultValue()
       }
       else{
           return defaultValue
       }
    })

    useEffect(()=>{
        console.log('useEffect',value);
        localStorage.setItem(key,JSON.stringify(value))
    });

    return [value,setValue]
}

export default useLocalStorage;