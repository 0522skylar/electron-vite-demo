import React, { createContext, useEffect, useRef, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Button } from 'antd';
import style from './index.module.scss'

export default function English() {
  const router = useNavigate();

  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <h1>热门词汇10000+</h1>
          <button className={style.header_btn}>切换词汇</button>
        </div>
        <p className={style.doen}>已掌握 <span className={style.special}>10</span>/78</p>
        <div className={style.progress}>
          <div className={style.bar}>
            <div className={style.sucess}></div>
          </div>
          <span className={style.gray}>12%</span>
        </div>
        <div className={style.count}>
          <div className={style.study}>
            <span className={style.number}>5</span>
            <span className={style.gray}>上一次已经掌握单词</span>
          </div>
          <div className={style.study}>
            <span className={style.number}>10</span>
            <span className={style.gray}>上次学习至</span>
          </div>
        </div>
        <div className={style.doen}>
          <Button type="primary" className={style.goto} onClick={() => {router("/grade")}}>进入学习</Button>
        </div>
        <div className={style.doen}><Button onClick={() => {router("/sort")}}>查看我的词本</Button></div>
      </div>
    </>
  )
}
