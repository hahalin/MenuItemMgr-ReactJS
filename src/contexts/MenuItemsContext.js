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

    function addMenuItem({category,name,description}){
        if (menuItems.filter(n=>n.category===category).length===0){
            setMenuItems(prevMenuItems=>{
                return [...prevMenuItems,{category:category,items:[{name:name,description:description}]}]
            });
        }
       
        //categoryItem.items.push(
        //    {id:uuidV4(),name:name,description:description}
        //);
        //setMenuItems(menuItems);
    }

    function addCategory({category}){
        if (menuItems.filter(n=>n.category===category).length===0){
            setMenuItems(prevMenuItems=>{
                console.log(prevMenuItems);
                return [...prevMenuItems,{category:category,items:[]}];
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