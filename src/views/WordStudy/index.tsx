import { Button, Progress  } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import style from './index.module.scss'

import { king, stopKing as stop, EWord } from './data'

const  WordStudy = () => {

  const [word, setWord] = useState("abundance");
  const [needObj, setNeedObject] = useState<EWord>({});
  const audioDOM = useRef(null);
  const sentenceDOM = useRef(null);
  const [wordPlayImg, setWordPlayImg] = useState(stop)
  const [sentencePlayImg, setSentencePlayImg] = useState(stop)


  useEffect(() => {
    fetch('http://localhost/admin/word-detail?word=abundance', {
      method: 'get',

    }).then((response) => response.json())
    .then((res) => {
      console.log(res.data)
      setNeedObject(res.data);
    }).catch((err) => {
      console.log(err, 'error');
    })
  }, [])

  const overAudio = () => {
    setWordPlayImg(stop)
  }

  const ready = () => {
    setWordPlayImg(king)
  }

  const overSentence = () => {
    setSentencePlayImg(stop);
  }

  const playSentence = () => {
    setSentencePlayImg(king);
    const dom: HTMLAudioElement = sentenceDOM.current  as unknown as HTMLAudioElement;
    dom.play();
  }

  const playWord = () => {
    setWordPlayImg(king);
    const dom: HTMLAudioElement = audioDOM.current  as unknown as HTMLAudioElement;
    dom.play();
  }
  return (
    <>
      <div className={style.header}>
        <div className={style.item}>
          <div className={style.desc}>今日新学</div>
          <div className={style.num}>0/5</div>
        </div>
        <div className={style.item}>
          <div className={style.desc}>今日新词</div>
          <div className={style.num}>0/5</div>
        </div>
        <div className={style.item}>
          <div className={style.desc}>学习时间</div>
          <div className={style.num}>0s</div>
        </div>
      </div>
      <div className={style.progress}>
        <Progress percent={100} />
      </div>
      <div className={style.line}></div>
      <div className={style.content}>
        <div className={style.word}>{word}</div>
        <div className={style.account}>
            <img src={wordPlayImg} alt="" onClick={playWord}/>
            {needObj.accent}
        </div>
      </div>
      <div className={style.cardMsg}>
        <p>根据提示，判断释义</p>
        <div className={style.boxMask}>
          <span className={style.explame}>例句</span>
          <span className={style.juzi}>
            {needObj.sentence}
          </span>
          <span className={style.call} onClick={playSentence}>
            <img src={sentencePlayImg} />
          </span>
        </div>
      </div>
      <div className={style.footer}>
        <div><Button className={style.know}>我认识</Button></div>
        <div><Button className={style.message}>提示一下</Button></div>
      </div>

      <audio className={style.audio}
      ref={audioDOM}
      autoPlay
      src={`https://dict.youdao.com/dictvoice?audio=${needObj.word}&type=2`}
      onEnded={overAudio}
      onCanPlay={ready}
      >对不起，您的浏览器不支持HTML5音频播放。</audio>


      <audio
      className={style.audio}
      ref={sentenceDOM}
      src={`https://dict.youdao.com/dictvoice?audio=${needObj.sentence}&le=eng`}
      onEnded={overSentence}
      >对不起，您的浏览器不支持HTML5音频播放。</audio>
    </>
  )
}

export default WordStudy;
