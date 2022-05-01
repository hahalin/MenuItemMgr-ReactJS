import React, { useState } from 'react'
import { ThemeContext } from './contexts/ThemeContext';
import InputItem from './ItemList/InputItem';
import InputCategory from './ItemList/InputCategory';
import { useMenuItems } from "./contexts/MenuItemsContext"


export default function ItemList(props) {

    const [showWinAdd, setShowWinAdd] = useState(false);
    const [activeCategoryId, setActiveCategoryId] = useState('');
    const [showWinCategoryAdd, setShowWinCategoryAdd] = useState(false);
    const { menuItems, getCategories, removeMenuItem,removeCategory } = useMenuItems();

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

    // let data = [
    //     { category: '性別', items: [{ id: 'M', text: '男' }, { id: 'F', text: '女' }] },
    //     { category: '縣市', items: [{ id: 'taipei', text: '台北' }, { id: 'taichung', text: '台中' }] }
    // ];

    const data = menuItems;
    const categories = getCategories();

    return (
        <ThemeContext.Consumer>
            {darkTheme => {
                return <div>

                    <InputItem show={showWinAdd} handleClose={handleClose} categoryId={activeCategoryId}></InputItem>
                    <InputCategory show={showWinCategoryAdd} handleClose={handleCloseCategory}></InputCategory>

                    <div className={["content-wrapper", darkTheme ? "dark-mode" : ""].join(" ")}>
                        <div className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        <h1 className="m-0">Item List</h1>
                                    </div>{/* /.col */}
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            <li className="breadcrumb-item"><a>Home</a></li>
                                            <li className="breadcrumb-item active">Dashboard v1</li>
                                        </ol>
                                    </div>{/* /.col */}
                                </div>{/* /.row */}
                            </div>{/* /.container-fluid */}
                        </div>
                        {/* /.content-header */}
                        {/* Main content */}
                        <section className="content">
                            <div className="container-fluid">
                                {/* Main row */}
                                <div className="row">
                                    <div className="col-12">
                                        <button className='btn btn-primary' onClick={handleAddCategory}>Add Category</button>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-8">
                                        <div className="card card-info card-tabs">
                                            <div className="card-header">
                                                <ul className="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                                                    {
                                                        data.map((n, i) => {
                                                            return (
                                                                <li className="nav-item" key={i} >
                                                                    <a className={["nav-link", i === 0 ? "active" : ""].join(" ")}
                                                                        id={"custom-tabs-" + (i + 1) + "-tab"}
                                                                        data-toggle="pill"
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
                                            </div>
                                            <div className="card-body">
                                                <div className="tab-content" id="custom-tabs-one-tabContent">

                                                    {
                                                        data.map((n, i) => {
                                                            return (
                                                                <div className={["tab-pane fade show", i === 0 ? "active" : ""].join(" ")}
                                                                    id={"custom-tabs-" + (i + 1)} role="tabpanel"
                                                                    aria-labelledby={"custom-tabs-" + (i + 1) + "-tab"}
                                                                    key={"div" + n.id}
                                                                >
                                                                    <button className='btn btn-primary' key={"btn" + n.id} onClick={() => handleAdd(n.id)}>Add Item</button>
                                                                    {/* <button className="btn btn-default" onClick={() => handleRemoveCategory(n.id)}>
                                                                        <i className="fas fa-times"></i> Remove Category
                                                                    </button> */}
                                                                    <table className="table" key={"table" + n.id}>
                                                                        <thead>
                                                                            <tr>
                                                                                <th width="150"></th>
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
                                                                                                <button className="btn btn-default" onClick={() => handleRemoveItem(m.id)}>
                                                                                                    <i className="fas fa-times"></i>
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
                                </div>
                                {/* /.row (main row) */}
                            </div>{/* /.container-fluid */}
                        </section>
                        {/* /.content */}
                    </div>
                </div>
            }}
        </ThemeContext.Consumer>
    )
}
