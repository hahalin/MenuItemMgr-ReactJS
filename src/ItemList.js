import React, { useState } from 'react'
import { ThemeContext } from './contexts/ThemeContext';
import InputItem from './ItemList/InputItem';
import InputCategory from './ItemList/InputCategory';
import { useMenuItems } from "./contexts/MenuItemsContext"


export default function ItemList(props) {

    const [showWinAdd, setShowWinAdd] = useState(false);
    const [activeCategoryId, setActiveCategoryId] = useState('');
    const [showWinCategoryAdd, setShowWinCategoryAdd] = useState(false);
    const { menuItems, getCategories, removeMenuItem, removeCategory } = useMenuItems();

    function handleAdd(id) {
        setActiveCategoryId(id);
        setShowWinAdd(true);
    }

    function handleClose() {
        setShowWinAdd(false);
    }

    function handleAddCategory() {
        setShowWinCategoryAdd(true);
    }

    function handleCloseCategory() {
        setShowWinCategoryAdd(false);
    }

    function handleRemoveItem(id) {
        removeMenuItem(id);
    }

    function handleRemoveCategory(id) {
        removeCategory(id);
    }


    const data = menuItems;
    const categories = getCategories();

    return (
        <>
            <br />
            <div className="container">

                <InputItem show={showWinAdd} handleClose={handleClose} categoryId={activeCategoryId}></InputItem>
                <InputCategory show={showWinCategoryAdd} handleClose={handleCloseCategory}></InputCategory>

                <div className="card">
                    <div className="card-body">
                        <button className='btn btn-primary' onClick={handleAddCategory}>Add Category</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <ul className="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                            {
                                data.map((n, i) => {
                                    return (
                                        <li className="nav-item" key={"navitem" + i} >
                                            <a className={["nav-link", i === 0 ? "active" : ""].join(" ")}
                                                id={"custom-tabs-" + (i + 1) + "-tab"}
                                                data-toggle="tab"
                                                href={"#custom-tabs-" + (i + 1)}
                                                role="tab"
                                                aria-controls={"custom-tabs-" + (i + 1)} aria-selected="true">
                                                {n.category}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="tab-content" id="custom-tabs-one-tabContent">
                            {
                                data.map((n, i) => {
                                    return (
                                        <div className={["tab-pane fade show", i === 0 ? "active" : ""].join(" ")}
                                            id={"custom-tabs-" + (i + 1)} role="tabpanel"
                                            aria-labelledby={"custom-tabs-" + (i + 1) + "-tab"}
                                            key={"tab-pane" + n.id}
                                        >
                                            
                                            <table className="table table-bordered" key={"table" + n.id}>
                                                <thead>
                                                    <tr>
                                                        <th width="50">
                                                            <button className='btn btn-outline-primary' key={"btn" + n.id} onClick={() => handleAdd(n.id)}>+</button>
                                                        </th>
                                                        <th width="200" >Code</th>
                                                        <th>Text</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        n.items.map((m, j) => {
                                                            return (
                                                                <tr key={j} >
                                                                    <td>
                                                                        <button className="btn btn-danger" onClick={() => handleRemoveItem(m.id)}>
                                                                            X
                                                                        </button>
                                                                    </td>
                                                                    <td>{m.code}</td>
                                                                    <td>{m.text}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
