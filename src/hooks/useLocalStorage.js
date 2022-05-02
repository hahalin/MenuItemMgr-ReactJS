import {useState,useEffect } from "react"

function useLocalStorage(key,defaultValue){
    const [json,setJson]=useState();
    const [value,setValue]=useState(()=>{
       const jsonValue=localStorage.getItem(key);
       if(jsonValue!=null && jsonValue !='') {
           let obj=JSON.parse(jsonValue);
           return obj;
       }
       
       if(typeof defaultValue==="function"){
           return defaultValue()
       }
       else{
           return defaultValue
       }
    })


    useEffect(()=>{
        console.log('useEffect',value);
        localStorage.setItem(key,JSON.stringify(value));
    },[key,value]);

    // useEffect(()=>{
    //     console.log('useEffect2',value);
    //     const items=JSON.parse(localStorage.getItem('items'));
    //     if(items){
    //         console.log('setValue');
    //         setValue(items);
    //     }
    // },[]);

    return [value,setValue]
}

export default useLocalStorage;