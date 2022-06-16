import React, { createContext, useEffect, useRef, useState, ReactNode } from 'react'
import style from './index.module.scss'
import './index.css'
import BetterScroll from 'better-scroll'
import butterfly from '@/assets/image/icon_butterfly@2x.be6101e3.png'
import flower from '@/assets/image/icon_deco_flower@2x.a3712ddb.png'
import { snow } from './constant'


export default function StudyReport() {
  const landscape = useRef(null);

  useEffect(() => {
    const warp = document.querySelector("#content");
    new BetterScroll( warp , {
      scrollbar: {
        fade: false,
      },
    })
  }, [landscape.current])
  return (
    <>
      <div className={style.bg}>
        <div className={style.main}>
          <div className={style.leftBox}>
            <img src={snow} alt="" />
          </div>
          <div className={style.rightBox}>
            <div className={style.scroll_wrapper} id="content">
              <div className={style.scroll_box}>
              <ul className={style.landscape}>
                <li className={style.study_data_item}>
                  <div className={style.time}>0分钟</div>
                  <span className={style.desc}>学习时长</span>
                </li>
                <li className={style.study_data_item}>
                  <div className={style.time}>0天</div>
                  <span className={style.desc}>累计学习</span>
                </li>
                <li className={style.study_data_item}>
                  <div className={style.time}>0个</div>
                  <span className={style.desc}>累计作品</span>
                </li>
              </ul>
              <div className={style.study_content} ref={landscape} >
                  <div className={style.title}>内容名称</div>
                  <div className={style.content}>
                  内容Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore natus error vitae officia odit illo corporis officiis in, maxime a sunt mollitia perferendis, beatae fugit ab necessitatibus similique aperiam. Ad?
                  内容Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore natus error vitae officia odit illo corporis officiis in, maxime a sunt mollitia perferendis, beatae fugit ab necessitatibus similique aperiam. Ad?
                  内容Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore natus error vitae officia odit illo corporis officiis in, maxime a sunt mollitia perferendis, beatae fugit ab necessitatibus similique aperiam. Ad?
                  内容Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore natus error vitae officia odit illo corporis officiis in, maxime a sunt mollitia perferendis, beatae fugit ab necessitatibus similique aperiam. Ad?
                  内容Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore natus error vitae officia odit illo corporis officiis in, maxime a sunt mollitia perferendis, beatae fugit ab necessitatibus similique aperiam. Ad?
                  内容Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore natus error vitae officia odit illo corporis officiis in, maxime a sunt mollitia perferendis, beatae fugit ab necessitatibus similique aperiam. Ad?
                  </div>
                </div>
              </div>
            </div>
            <img src={butterfly} alt="" className={style.butterfly} />
            <img src={flower} alt="" className={style.flower} />
          </div>
        </div>
      </div>
    </>
  )
}