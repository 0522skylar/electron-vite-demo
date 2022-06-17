import React, { createContext, useEffect, useRef, useState, ReactNode } from 'react'
import { kingIcon, stopIcon } from '../../views/studyReport/constant'
interface IvoiceInfo {
  userVoiceInfo: {
    voiceLen: number,
    voiceUrl: string
  };
  isLandscape: boolean;
}

export default function VoiceBar(props: IvoiceInfo) {

  let imgUrl = kingIcon; // 图片
  let isPlay = false;
  let timer: any = null;

  const { userVoiceInfo , isLandscape = false} = props;
  const workVoice  = useRef(null);
  const $audio: HTMLAudioElement = document.getElementById("audio") as HTMLAudioElement;

  useEffect(() => {
    //  需要监听页面挂起和呼出，当页面挂起时，音频停止
    document.addEventListener('visibilitychange', stopThisVoice)
    return () => {
      document.removeEventListener('visibilitychange', stopThisVoice)
      //  清除定时器
      clearInterval(timer)
    }
  }, [])
  // 秒数转分钟
  const realFormatSecon = (second: number) => {
      if (
        second === null ||
        second === undefined ||
        second === 0
      ) {
        return '00:00'
      }
      var secondType = typeof second

      if (secondType === 'number' || secondType === 'string') {
        var mimute = Math.floor(second / 60)
        second = second - mimute * 60
        return ('0' + mimute).slice(-2) + ':' + ('0' + second).slice(-2)
      } else {
        return '00:00'
      }
  }
  
  const onCommntEnded = () => {
    isPlay = false
    clearInterval(timer)
    imgUrl = stopIcon;
  }
  const stop = () => {
    isPlay = false
   
    if($audio != null) {
      $audio.pause()
    }
    //  停止音波动画
    clearInterval(timer)
    //  切换按钮
    imgUrl = stopIcon;
  }

  // 离开页面后，停止音频，回来时恢复
  const stopThisVoice = () => {
    if(document.hidden) {
      $audio.pause() // 页面挂起
    } else {
      // 页面呼出
      if(isPlay) {
        $audio.play()
      }
    }
  }


  const ready = () => {
    imgUrl = kingIcon;
    console.log('ready ok')
  }
  // 点击事件
  const clickVoiceFun = () => {
    isPlay = !isPlay
    console.log('click--------------')
    try {
      if (isPlay) {
        //  从0秒开始播放
        if ($audio.fastSeek) {
          $audio.fastSeek(0)
        } else {
          $audio.currentTime = 0
        }
        $audio.play()

        //  播放音波动画
        timer = setInterval(() => {
          imgUrl =
            imgUrl === stopIcon
              ? kingIcon
              : stopIcon
        }, 1000 / 4)

        //  播放学生语音时停止老师点评语音 -- 待续
      } else {
        //  停止音波动画
        clearInterval(timer)
        //  切换按钮
        imgUrl = stopIcon
        $audio.pause()
      }
    } catch (e) {
      console.log('[dom error] 学生语音组件', e)
    }
  }
  return (
    <div className='voice-container' onClick={clickVoiceFun}>
      <img src={ imgUrl } className={isLandscape ? 'isLandscape voice-img' : 'voice-img'}/>
      <span className={isLandscape ? 'isLandscape voiceLen' : "voiceLen"}>{ realFormatSecon(userVoiceInfo.voiceLen) }</span>
      <audio
        style={{display: 'none'}}
        ref={workVoice}
        preload="true"
        src={userVoiceInfo.voiceUrl}
        id="audio"
        onCanPlay={ ready }
        onEnded={ onCommntEnded }
      />
    </div>
  )
}