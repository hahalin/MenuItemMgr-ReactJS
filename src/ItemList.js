import React, { useState } from 'react'
import { ThemeContext } from './contexts/ThemeContext';
import InputItem from './ItemList/InputItem';

export default function ItemList(props) {

    const [showWinAdd, setShowWinAdd] = useState(false);

    function handleAdd() {
        setShowWinAdd(true);
    }

    function handleClose() {
        setShowWinAdd(false);
    }

    let data = [
        { category: '性別', items: [{ id: 'M', text: '男' }, { id: 'F', text: '女' }] },
        { category: '縣市', items: [{ id: 'taipei', text: '台北' }, { id: 'taichung', text: '台中' }] }
    ];

    return (
        <ThemeContext.Consumer>
            {darkTheme => {
                return <div>
                    <InputItem show={showWinAdd} handleClose={handleClose}></InputItem>
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
                                        <button className='btn btn-primary' onClick={handleAdd}>Add Item</button>
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
                                                                <li className="nav-item" key={i}>
                                                                    <a className={["nav-link", i == 0 ? "active" : ""].join(" ")}
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
                                                                <div className={["tab-pane fade show", i == 0 ? "active" : ""].join(" ")}
                                                                    id={"custom-tabs-" + (i + 1)} role="tabpanel"
                                                                    aria-labelledby={"custom-tabs-" + (i + 1) + "-tab"}>
                                                                    <table className="table">
                                                                        <thead>
                                                                            <tr>
                                                                                <th width="200" >id</th>
                                                                                <th>text</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {
                                                                                n.items.map((m, j) => {
                                                                                    return (
                                                                                        <tr>
                                                                                            <td>{m.id}</td>
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
