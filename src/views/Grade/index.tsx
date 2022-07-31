import React, { createContext, useEffect, useRef, useState } from 'react'
import { Button } from 'antd';
import {useNavigate} from 'react-router-dom'
import style from './index.module.scss'
import png1 from '@/assets/image/1.png'
import png2 from '@/assets/image/2.png'
import png3 from '@/assets/image/3.png'
import png4 from '@/assets/image/4.png'
import png5 from '@/assets/image/5.png'
import png6 from '@/assets/image/6.png'
import png7 from '@/assets/image/7.png'

export default function Grade() {
  const router = useNavigate();
  return (
    <div className={style.container}>
      <h1>选择学习</h1>
      <div className={style.top}>
        <p className={style.title}>单词</p>
        <p className={style.desc}>选择自己适合的等级进行学习</p>
        <div className={style.gardBox}>
          <div className={style.grade} onClick={() => router('/wordStudy', {state: 5})}>
            <img src={png1} />
            低级（5个）
          </div>
          <div className={style.grade} onClick={() => router('/wordStudy', {state: 10})}>
            <img src={png2} />
            中级（10个）
          </div>
          <div className={style.grade} onClick={() => router('/wordStudy', {state: 20})}>
            <img src={png3} />
            高级（20个）
          </div>
        </div>
      </div>
      <div className={style.bottom}>
        <p className={style.title}>阅读</p>
        <p className={style.desc}>去听听英语文章丰富生活吧</p>
        <div className={style.gardBox}>
          <div className={style.grade}>
            <img src={png4} />
            美丽新世界
          </div>
          <div className={style.grade}>
            <img src={png5} />
            小鬼当家
          </div>
          <div className={style.grade}>
            <img src={png6} />
            小妇人
          </div>
          <div className={style.grade}>
            <img src={png7} />
            小王子
          </div>
        </div>
      </div>
    </div>
  )
}
