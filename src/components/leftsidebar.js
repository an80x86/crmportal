import React from 'react';

const LeftSideBar = (props) => {

    if (props.menus === undefined) {
      return '';
    }
    let menu = props;

    return (
      <aside id="leftsidebar" className="sidebar">

          <div className="user-info">
              <div className="image">
                  <img src="../../images/user.png" width="48" height="48" alt="User" />
              </div>
              <div className="info-container">
                  <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mustafa Bayer</div>
                  <div className="email">user: mustafa</div>
                  <div className="btn-group user-helper-dropdown">
                      <i className="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
                      <ul className="dropdown-menu pull-right">
                          <li><a><i className="material-icons">person</i>Profile</a></li>
                          <li role="seperator" className="divider"></li>
                          <li><a><i className="material-icons">favorite</i>Likes</a></li>
                          <li role="seperator" className="divider"></li>
                          <li><a><i className="material-icons">input</i>Sign Out</a></li>
                      </ul>
                  </div>
              </div>
          </div>

          <div className="menu" id="mastermenu">
              <ul className="list">
                  <li className="header">ANA MENÜ</li>

                  {
                    menu.menus.map((ust) =>
                      <li key={ust.id}>
                        <a href="javascript:void(0);" className="menu-toggle">
                            <i className="material-icons">widgets</i>
                            <span>{ust.name}</span>
                        </a>
                        <ul className="ml-menu">
                        {
                            ust.menu.map((alt) =>
                              <li key={alt.menuId}>
                                <a href={alt.murl}>{alt.name}</a>
                              </li>
                            )
                        }
                        </ul>
                      </li>
                    )
                  }

                  <li className="header">BİLGİ</li>
                  <li>
                      <a href="javascript:void(0);">
                          <i className="material-icons col-red">donut_large</i>
                          <span>Önemli</span>
                      </a>
                  </li>
                  <li>
                      <a href="javascript:void(0);">
                          <i className="material-icons col-amber">donut_large</i>
                          <span>Dikkat</span>
                      </a>
                  </li>
                  <li>
                      <a href="javascript:void(0);">
                          <i className="material-icons col-light-blue">donut_large</i>
                          <span>Bilgi</span>
                      </a>
                  </li>
              </ul>
          </div>

          <div className="legal">
              <div className="copyright">
                  &copy; 2017 - 2018 <a href="javascript:void(0);">CrmPortal</a>
              </div>
              <div className="version">
                  <b>Version: </b> 1.0.5
              </div>
          </div>

      </aside>
    )
}

export default LeftSideBar;
