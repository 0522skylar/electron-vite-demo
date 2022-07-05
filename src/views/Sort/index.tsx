import React, { createContext, useEffect, useRef, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Button } from 'antd';
import style from './index.module.scss'
// import data from '../../data/gaokao/list.json'
export default function Sort() {
  useEffect(() => {
    // const data  = require('../../data/gaokao/list.json');
    // console.log(data);
    fetch('http://localhost/admin/gaokao', {
      method: 'get',
    }).then((response) => response.json())
    .then((res) => {
      console.log(res, '-----------')
    }).catch((err) => {
      console.log(err, 'error');
    })
  }, [])

  return (
    <>
      <div className={style.contianer}>
        <h1>单词本</h1>
        <div className={style.rightBox}>
          <div className={style.word}>A</div>
          <div className={style.word}>A</div>
          <div className={style.word}>A</div>
          <div className={style.word}>A</div>
          <div className={style.word}>A</div>
          <div className={style.word}>A</div>
          <div className={style.word}>A</div>
        </div>
        <div className={style.sides}>
          <h3>A</h3>
          <div className={style.line}>aside</div>
          <div className={style.line}>aside</div>
          <div className={style.line}>aside</div>
          <div className={style.line}>aside</div>
          <div className={style.line}>aside</div>
        </div>

        <div className={style.sides}>
          <h3>A</h3>
          <div className={style.line}>aside</div>
          <div className={style.line}>aside</div>
          <div className={style.line}>aside</div>
          <div className={style.line}>aside</div>
          <div className={style.line}>aside</div>
        </div>

        <div className={style.sides}>
          <h3>A</h3>
          <div className={style.line}>aside</div>
          <div className={style.line}>aside</div>
          <div className={style.line}>aside</div>
          <div className={style.line}>aside</div>
          <div className={style.line}>aside</div>
        </div>
      </div>
    </>
  )
}
