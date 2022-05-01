import React,{ useContext, useState } from "react"
import {v4 as uuidV4} from "uuid"
import useLocalStorage from "../hooks/useLocalStorage";

const MenuItemsContext=React.createContext()

export function useMenuItems(){
    return useContext(MenuItemsContext);
}

export const MenuItemsProvider=({children})=>{
    
    const [menuItems,setMenuItems]=useLocalStorage("menuItems",[]);

    function getCategories(){
        return menuItems.map(n=>{return {id:n.id,category:n.category};});
    }

    function getCategoryMenuItems(categoryId){
        return menuItems.filter(n=>n.id===categoryId);
    }

    function addMenuItem({categoryId,code,text}){
        console.log(categoryId);
        console.log(code);
        console.log(text);
        setMenuItems(previtems=>previtems.map(m => 
            m.id==categoryId?
            {
               ...m,items:[...m.items,{id:uuidV4(),code:code,text:text}]
            }:
            m
        ));
        
    }

    function addCategory({category}){
        if (menuItems.filter(n=>n.category===category).length===0){
            setMenuItems(prevMenuItems=>{
                return [...prevMenuItems,{id:uuidV4(),category:category,items:[]}];
            });
        }
    }
    
    function removeMenuItem(id){
        setMenuItems(prev=>
            prev.map(c=>
                c.items.filter(m=>m.id==id).length>0?
                {
                    ...c,items:c.items.filter(m=>m.id!=id)
                }:c
            )
        );
    }

    function removeCategory(id){
        setMenuItems(prev=>prev.filter(m=>m.id!=id));
    }

    return (
        <MenuItemsContext.Provider value={{
            menuItems,
            getCategories,
            addMenuItem,
            addCategory,
            removeMenuItem,
            removeCategory
        }}>
            {children}
        </MenuItemsContext.Provider>
    )
}