import React, { Component } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';

export default class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {darkTheme => {
          return <div className={darkTheme ? "dark-mode" : ""}>
            {/* Navbar */}
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
              {/* Left navbar links */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <div className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars" /></div>
                </li>
                <ThemeSwitcher theme={darkTheme} toggleTheme={this.props.toggleTheme}></ThemeSwitcher>
                <li className="nav-item d-none d-sm-inline-block">
                  <a href="index3.html" className="nav-link">Home</a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                  <div  className="nav-link">Contact</div>
                </li>
              </ul>
              {/* Right navbar links */}
              <ul className="navbar-nav ml-auto">
                {/* Navbar Search */}
                <li className="nav-item">
                  <div className="nav-link" data-widget="navbar-search"  role="button">
                    <i className="fas fa-search" />
                  </div>
                  <div className="navbar-search-block">
                    <form className="form-inline">
                      <div className="input-group input-group-sm">
                        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                          <button className="btn btn-navbar" type="submit">
                            <i className="fas fa-search" />
                          </button>
                          <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                            <i className="fas fa-times" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>
                {/* Messages Dropdown Menu */}
                <li className="nav-item dropdown">
                  <div className="nav-link" data-toggle="dropdown" >
                    <i className="far fa-comments" />
                    <span className="badge badge-danger navbar-badge">3</span>
                  </div>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <div  className="dropdown-item">
                      {/* Message Start */}
                      <div className="media">
                        <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                        <div className="media-body">
                          <h3 className="dropdown-item-title">
                            Brad Diesel
                            <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                          </h3>
                          <p className="text-sm">Call me whenever you can...</p>
                          <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                        </div>
                      </div>
                      {/* Message End */}
                    </div>
                    <div className="dropdown-divider" />
                    <div className="dropdown-item">
                      {/* Message Start */}
                      <div className="media">
                        <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                        <div className="media-body">
                          <h3 className="dropdown-item-title">
                            John Pierce
                            <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
                          </h3>
                          <p className="text-sm">I got your message bro</p>
                          <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                        </div>
                      </div>
                      {/* Message End */}
                    </div>
                    <div className="dropdown-divider" />
                    <div  className="dropdown-item">
                      {/* Message Start */}
                      <div className="media">
                        <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                        <div className="media-body">
                          <h3 className="dropdown-item-title">
                            Nora Silvester
                            <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
                          </h3>
                          <p className="text-sm">The subject goes here</p>
                          <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                        </div>
                      </div>
                      {/* Message End */}
                    </div>
                    <div className="dropdown-divider" />
                    <div  className="dropdown-item dropdown-footer">See All Messages</div>
                  </div>
                </li>
                {/* Notifications Dropdown Menu */}
                <li className="nav-item dropdown">
                  <div className="nav-link" data-toggle="dropdown" >
                    <i className="far fa-bell" />
                    <span className="badge badge-warning navbar-badge">15</span>
                  </div>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <span className="dropdown-item dropdown-header">15 Notifications</span>
                    <div className="dropdown-divider" />
                    <div  className="dropdown-item">
                      <i className="fas fa-envelope mr-2" /> 4 new messages
                      <span className="float-right text-muted text-sm">3 mins</span>
                    </div>
                    <div className="dropdown-divider" />
                    <div  className="dropdown-item">
                      <i className="fas fa-users mr-2" /> 8 friend requests
                      <span className="float-right text-muted text-sm">12 hours</span>
                    </div>
                    <div className="dropdown-divider" />
                    <div  className="dropdown-item">
                      <i className="fas fa-file mr-2" /> 3 new reports
                      <span className="float-right text-muted text-sm">2 days</span>
                    </div>
                    <div className="dropdown-divider" />
                    <div  className="dropdown-item dropdown-footer">See All Notifications</div>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link" data-widget="fullscreen"  role="button">
                    <i className="fas fa-expand-arrows-alt" />
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true"  role="button">
                    <i className="fas fa-th-large" />
                  </div>
                </li>
              </ul>
            </nav>
            {/* /.navbar */}
          </div>
        }}
      </ThemeContext.Consumer>
    )
  }
}
