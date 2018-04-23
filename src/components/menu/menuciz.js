import React from 'react';
import { Link } from 'react-router-dom';
import Bilgi from './bilgi';

const MenuCiz = (props) => {

    return (
      <div className="menu" id="mastermenu">
          <ul className="list">
              <li className="header">ANA MENÜ</li>

              {
                props.menu.menus.map((ust) =>
                  <li key={ust.id}>
                    <a href="javascript:void(0);" className="menu-toggle">
                        <i className="material-icons">widgets</i>
                        <span>{ust.name}</span>
                    </a>
                    <ul className="ml-menu">
                    {
                        ust.menu.map((alt) =>
                          <li key={alt.menuId}>
                            <Link to={alt.murl} key={alt.menuId}>{alt.name}</Link>
                          </li>
                        )
                    }
                    </ul>
                  </li>
                )
              }

              <Bilgi />
          </ul>
      </div>
    )
}

export default MenuCiz;
