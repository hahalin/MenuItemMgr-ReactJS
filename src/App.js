import React, { useState } from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import ControlMenu from './ControlMenu';

import { useMenuItems } from "./contexts/MenuItemsContext"
import useLocalStorage from './hooks/useLocalStorage';
//import Dashboard from './Dashboard';
import ItemList from './ItemList';
import { ThemeContext } from './contexts/ThemeContext';

export default function App() {

  const { menuItems, addMenuItem } = useMenuItems()

  //const [darkTheme, setDarkTheme] = useState(true);

  const [darkTheme,setDarkTheme]=useLocalStorage("darkTheme",true);


  function handleClick() {
    addMenuItem({
      id: '',
      categoryId: 'unCategorid',
      name: 'name1'
    })
  }

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <div className="wrapper">
          <Header toggleTheme={toggleTheme}></Header>
          <ControlMenu></ControlMenu>
          <Menu></Menu>
          <ItemList></ItemList>
          <Footer></Footer>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

