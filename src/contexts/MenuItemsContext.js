import React,{ useContext, useState } from "react"
import {v4 as uuidV4} from "uuid"
import useLocalStorage from "../hooks/useLocalStorage";

const MenuItemsContext=React.createContext()

export function useMenuItems(){
    return useContext(MenuItemsContext);
}

export const MenuItemsProvider=({children})=>{
    
    //const [menuItems,setMenuItems]=useState([]);
    const [menuItems,setMenuItems]=useLocalStorage("menuItems",[]);

    function getCategoryMenuItems(categoryId){
        return menuItems.filter(n=>n.categoryId===categoryId);
    }

    function getCategoryMenuItemById(id){
        return menuItems.filter(n=>n.id===id);
    }

    function addMenuItem({categoryId,name,description}){
        setMenuItems(prevMenuItems=>{
            return [...prevMenuItems,{id:uuidV4(),categoryId,name,description}]
        })
    }

    function addCategory({category}){
        if (menuItems.filter(n=>n.category===category).length===0){
            setMenuItems(prevMenuItems=>{
                return [...prevMenuItems,{category:category}]
            });
        }
    }
    
    function deleteMenuItem(id){
        setMenuItems(prevMenuItems=>{
            return prevMenuItems.filter(n=>n.id!==id)
        })        
    }

    return (
        <MenuItemsContext.Provider value={{
            menuItems,
            getCategoryMenuItems,
            addMenuItem,
            addCategory,
            deleteMenuItem
        }}>
            {children}
        </MenuItemsContext.Provider>
    )
}