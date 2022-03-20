import React from 'react'

export default function ThemeSwitcher(props) {
    const {theme,toggleTheme}=props;

    return (
        <li className="nav-item d-none d-sm-inline-block dropdown">
            
            <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">Theme</a>
            <ul aria-labelledby="dropdownSubMenu1" className="dropdown-menu border-0 shadow" style={{ left: 0, right: 'inherit' }}>
                {/* <li>
                <a href="#" onClick={toggleTheme}>test</a>
                </li> */}
                <li>
                    <a href="#" className="dropdown-item" onClick={theme?toggleTheme:undefined}>
                        <i className={!theme?"fa fa-solid fa-check":""}></i>
                        light
                    </a>
                </li>
                <li>
                    <a href="#" className="dropdown-item" onClick={!theme?toggleTheme:undefined}>
                        <i className={theme?"fa fa-solid fa-check":""}></i>
                        dark
                    </a>
                </li>
                {/* <a href="#" className="nav-link" onClick={this.props.toggleTheme}> {darkTheme ? "light" : "dark"}</a> */}
            </ul>
        </li>

    )
}
