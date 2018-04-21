import React from 'react';
import menu from '../mock/menu.json';

const LeftSideBar = () => {
    let mo = menu.menus;
    console.log(mo);
    /*
    JSON.parse(menu).map((number) =>
      <li key={number.id}>
        {number.name}
      </li>
    )
    */

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

          <div className="menu">
              <ul className="list">
                  <li className="header">ANA MENÜ</li>

                  {
                    menu.menus.map((number) =>
                      <li key={number.id}>
                        {number.name}
                      </li>
                    )
                  }

                  <li>
                      <a href="javascript:void(0);" className="menu-toggle">
                          <i className="material-icons">widgets</i>
                          <span>Widgets</span>
                      </a>
                      <ul className="ml-menu">
                          <li>
                              <a href="javascript:void(0);" className="menu-toggle">
                                  <span>Cards</span>
                              </a>
                              <ul className="ml-menu">
                                  <li>
                                      <a href="../../pages/widgets/cards/basic.html">Basic</a>
                                  </li>
                                  <li>
                                      <a href="../../pages/widgets/cards/colored.html">Colored</a>
                                  </li>
                                  <li>
                                      <a href="../../pages/widgets/cards/no-header.html">No Header</a>
                                  </li>
                              </ul>
                          </li>
                          <li>
                              <a href="javascript:void(0);" className="menu-toggle">
                                  <span>Infobox</span>
                              </a>
                              <ul className="ml-menu">
                                  <li>
                                      <a href="../../pages/widgets/infobox/infobox-1.html">Infobox-1</a>
                                  </li>
                                  <li>
                                      <a href="../../pages/widgets/infobox/infobox-2.html">Infobox-2</a>
                                  </li>
                                  <li>
                                      <a href="../../pages/widgets/infobox/infobox-3.html">Infobox-3</a>
                                  </li>
                                  <li>
                                      <a href="../../pages/widgets/infobox/infobox-4.html">Infobox-4</a>
                                  </li>
                                  <li>
                                      <a href="../../pages/widgets/infobox/infobox-5.html">Infobox-5</a>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </li>

                  <li>
                      <a href="javascript:void(0);" className="menu-toggle">
                          <i className="material-icons">swap_calls</i>
                          <span>User Interface (UI)</span>
                      </a>
                      <ul className="ml-menu">
                          <li>
                              <a href="../../pages/ui/alerts.html">Alerts</a>
                          </li>
                          <li>
                              <a href="../../pages/ui/animations.html">Animations</a>
                          </li>
                          <li>
                              <a href="../../pages/ui/badges.html">Badges</a>
                          </li>

                          <li>
                              <a href="../../pages/ui/breadcrumbs.html">Breadcrumbs</a>
                          </li>
                          <li>
                              <a href="../../pages/ui/buttons.html">Buttons</a>
                          </li>
                          <li>
                              <a href="../../pages/ui/collapse.html">Collapse</a>
                          </li>
                          <li>
                              <a href="../../pages/ui/colors.html">Colors</a>
                          </li>
                          <li>
                              <a href="../../pages/ui/dialogs.html">Dialogs</a>
                          </li>
                          <li>
                              <a href="../../pages/ui/icons.html">Icons</a>
                          </li>
                          <li>
                              <a href="../../pages/ui/labels.html">Labels</a>
                          </li>
                          <li>
                              <a href="../../pages/ui/list-group.html">List Group</a>
                          </li>
                          <li>
                              <a href="../../pages/ui/media-object.html">Media Object</a>
                          </li>
                          <li>
                              <a href="../../pages/ui/modals.html">Modals</a>
                          </li>
                          <li>
                              <a href="../../pages/ui/notifications.html">Notifications</a>
                          </li>
                          <li>
                              <a href="../../pages/ui/pagination.html">Pagination</a>
                          </li>
                          <li>
                              <a href="../../pages/ui/preloaders.html">Preloaders</a>
                          </li>
                          <li>
                              <a href="../../pages/ui/progressbars.html">Progress Bars</a>
                          </li>
                          <li>
                              <a href="../../pages/ui/range-sliders.html">Range Sliders</a>
                          </li>
                          <li>
                              <a href="../../pages/ui/sortable-nestable.html">Sortable & Nestable</a>
                          </li>
                          <li>
                              <a href="../../pages/ui/tabs.html">Tabs</a>
                          </li>
                          <li>
                              <a href="../../pages/ui/thumbnails.html">Thumbnails</a>
                          </li>
                          <li>
                              <a href="../../pages/ui/tooltips-popovers.html">Tooltips & Popovers</a>
                          </li>
                          <li>
                              <a href="../../pages/ui/waves.html">Waves</a>
                          </li>
                      </ul>
                  </li>

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
