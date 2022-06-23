import React, { createContext, useEffect, useRef, useState, ReactNode } from 'react'
import bgComment from '@/assets/image/bg_comment@2x.png'
import background from '@/assets/image/sprite.png'
import './index.css'
interface ICartoon {
  isLandscape: boolean;
}
export default function Cartoon(props: ICartoon) {
  const {isLandscape} = props;
  useEffect(() => {

    const cartoon:HTMLDivElement = document.getElementById('cartoon') as HTMLDivElement;

    //  计算缩放比例
    const height = cartoon.clientHeight
    const compress = isLandscape ? height / 100 : height / 144

    //  定时器生成动画（帧率：20）
    const imgBackground:HTMLDivElement = document.getElementById('imgBackground') as HTMLDivElement;
    let dirIndex = 0
    const spriteItemHeight = isLandscape ? 56 : 80
    let timer = setInterval(function () {
      imgBackground.style.backgroundPositionY = dirIndex * spriteItemHeight * compress + 'px'
      dirIndex++
      if (dirIndex === 20) {
        dirIndex = 0
      }
    }, 1000 / 20)

    return () => {
      clearInterval(timer);
    }
  }, [])
  return (
    <div
    id="cartoon"
    className={isLandscape ? 'cartoon-isLandscape' : '' }
    style={{ background: 'url(' + bgComment + ')'} }
  >
    <div
      id="imgBackground"
      style={ {background: 'url(' + background + ')'} }
      className={isLandscape ? 'happy' : ''}
    ></div>
  </div>
  )
}