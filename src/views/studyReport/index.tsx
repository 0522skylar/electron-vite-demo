import React, { createContext, useEffect, useRef, useState, ReactNode } from 'react'
import style from './index.module.scss'
import './index.css'
import BetterScroll from 'better-scroll'
import butterfly from '@/assets/image/icon_butterfly@2x.be6101e3.png'
import flower from '@/assets/image/icon_deco_flower@2x.a3712ddb.png'
import { finishIcon, snow } from './constant'
import VoiceBar from '@/components/VoiceBar'

export default function StudyReport() {
  const landscape = useRef(null);

  const voideInfo = {
    voiceLen: 8,
    voiceUrl: "https://dict.youdao.com/dictvoice?audio=Cayton+describes+himself+as+comfortably+well-off.She+describes+him+as+urbane+and+charming.This+verse+describes+three+signs+of+spring.&le=eng"
  }
  useEffect(() => {
    const warp = landscape.current || "";
    console.log(warp, '----------')
    new BetterScroll(warp, {
      scrollbar: {
        fade: false,
      },
    })
  }, [])
  return (
    <>
      <div className={style.bg}>
        <div className={style.main}>
          <div className={style.leftBox}>
            <div className={style.work_box}>
              <div className={style.pic_frame_box}>
                <img src="https://ai-cdn.oss-cn-shenzhen.aliyuncs.com/81fa86b1c2e1ed72f2f84ec4b9344752.jpg" className={style.img} />
                <VoiceBar userVoiceInfo={voideInfo} isLandscape={true} ></VoiceBar>
              </div>
            </div>
            <img src={snow} className={style.icon_star_left}/>
            <img src={snow} className={style.icon_star_right}/>
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
                  </div>
                  <div className={style.title}>掌握知识点</div>
                  <ul className={style.knowledge_list}>
                    <li className={style.knowledge_list_item}>
                      <img src={finishIcon} className={style.icon_tick} />
                      <p className={style.knowledge_desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li className={style.knowledge_list_item}>
                      <img src={finishIcon} className={style.icon_tick}/>
                      <p className={style.knowledge_desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li className={style.knowledge_list_item}>
                      <img src={finishIcon} className={style.icon_tick}/>
                      <p className={style.knowledge_desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <img src={butterfly} className={style.butterfly} />
            <img src={flower} className={style.flower} />
          </div>
        </div>
      </div>
    </>
  )
}