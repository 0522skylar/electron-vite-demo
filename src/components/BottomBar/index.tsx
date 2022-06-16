import React from 'react';
import {
  NavLink,
} from "react-router-dom";
import style from './index.module.scss'
export default function BottomBar() {

  return (
    <> 
      <div className={style.bottom_bar}>
        <div className={style.outside}>
          <NavLink className={style.active} to="/one">
            <div className={style.content}>One</div>
          </NavLink>
          <NavLink className={style.active} to="/two">
            <div className={style.content}>Two</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
