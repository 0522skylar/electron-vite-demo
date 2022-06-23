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

  let [imgUrl, setImgUrl] = useState(stopIcon); // 图片
  let imgSrc: string = stopIcon;
  // let isPlay = false;
  const [isPlay, setIsPlay] = useState(false);
  let timer: NodeJS.Timeout | undefined;
  const [count, setCount] = useState(null);

  const { userVoiceInfo , isLandscape = false} = props;
  const workVoice  = useRef(null);

  useEffect(() => {
    //  需要监听页面挂起和呼出，当页面挂起时，音频停止
    document.getElementById("warpVoide")?.addEventListener('visibilitychange', stopThisVoice)
    return () => {
      document.getElementById("warpVoide")?.removeEventListener('visibilitychange', stopThisVoice)
      //  清除定时器
      clearInterval(timer)
    }
  }, [])
  // 秒数转分钟
  const realFormatSecond = (second: number) => {
      if (
        second === null ||
        second === undefined ||
        second === 0
      ) {
        return '00:00'
      }
      var secondType = typeof second

      if (secondType === 'number' || secondType === 'string') {
        let minute = Math.floor(second / 60)
        second = second - minute * 60
        return ('0' + minute).slice(-2) + ':' + ('0' + second).slice(-2)
      } else {
        return '00:00'
      }
  }
  
  const onCommentEnded = () => {
    // isPlay = false
    setIsPlay(false);
    // clearInterval(timer)
    setImgUrl(stopIcon)
  }
  const stop = () => {
    const $audio: HTMLAudioElement = workVoice.current as unknown as HTMLAudioElement; //音频dom

    // isPlay = false
    setIsPlay(false);
    if($audio != null) {
      $audio.pause()
    }
    //  停止音波动画
    // clearInterval(timer)
    //  切换按钮
    setImgUrl(stopIcon)
  }

  // 离开页面后，停止音频，回来时恢复
  const stopThisVoice = () => {
  const $audio: HTMLAudioElement = workVoice.current as unknown as HTMLAudioElement; //音频dom

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
    setImgUrl(kingIcon)
    imgSrc = kingIcon;
    console.log('ready ok')
  }
  // 点击事件
  const clickVoiceFun = () => {
    // isPlay = !isPlay
    setIsPlay(!isPlay);
  }

  /*
  useEffect(() => {
    const $audio: HTMLAudioElement = workVoice.current as unknown as HTMLAudioElement; //音频dom
    try {
      if (isPlay) {
        //  从0秒开始播放
        if ($audio.fastSeek) {
          $audio.fastSeek(0)
        } else {
          $audio.currentTime = 0
        }
        $audio.play()
        setImgUrl(kingIcon)
        // 播放音波动画
        timer = setInterval(() => {
          if(imgSrc == stopIcon) {
            imgSrc = kingIcon;
          } else {
            imgSrc = stopIcon;
          }
        }, 1000 / 4)
        setCount(timer);

        //  播放学生语音时停止老师点评语音 -- 待续
      } else {

        //  停止音波动画
        clearInterval(count)
        setCount(null);
        //  切换按钮
        imgUrl = stopIcon
        setImgUrl(stopIcon)
        $audio.pause()
      }
    } catch (e) {
      console.log('[dom error] 学生语音组件', e)
    }

    return () => {
      // clearInterval(timer)
    }
  }, [isPlay])
  */
  useEffect(() => {
    const $audio: HTMLAudioElement = workVoice.current as unknown as HTMLAudioElement; //音频dom
    if (isPlay) {
      //  从0秒开始播放
      if ($audio.fastSeek) {
        $audio.fastSeek(0)
      } else {
        $audio.currentTime = 0
      }
      $audio.play()
      setImgUrl(kingIcon)
      let timer: NodeJS.Timeout;
      // 播放音波动画
      timer = setInterval(() => {
        if(imgSrc == stopIcon) {
          imgSrc = kingIcon;
          setImgUrl(kingIcon)
        } else {
          imgSrc = stopIcon;
          setImgUrl(stopIcon)
        }
      }, 1000 / 4)
      return () => clearInterval(timer)
      //  播放学生语音时停止老师点评语音 -- 待续
    } else {
      //  切换按钮
      // imgUrl = stopIcon
      setImgUrl(kingIcon)
      $audio.pause()
    }
    
  }, [isPlay])

  return (
    <div className='voice-container' onClick={clickVoiceFun} id="warpVoide">
      <img src={ imgUrl } className={isLandscape ? 'isLandscape voice-img' : 'voice-img'}/>
      <span className={isLandscape ? 'isLandscape voiceLen' : "voiceLen"}>{ realFormatSecond(userVoiceInfo.voiceLen) }</span>
      <audio
        style={{display: 'none'}}
        ref={workVoice}
        preload="true"
        src={userVoiceInfo.voiceUrl}
        id="audio"
        onCanPlay={ ready }
        onEnded={ onCommentEnded }
      />
    </div>
  )
}