import React, { createContext, useEffect, useRef, useState } from 'react'
import { Button } from 'antd';
import style from './index.module.scss'

export default function English() {
  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <h1>热门词汇10000+</h1>
          <button className={style.header_btn}>切换词汇</button>
        </div>
        <p>已掌握 <span className={style.special}>10</span>/78</p>
        <div className={style.progress}>
          <div className={style.bar}>
            <div className={style.sucess}></div>
          </div>
          <span className={style.gray}>12%</span>
        </div>
        </div>
    </>
  )
}
