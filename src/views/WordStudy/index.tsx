import { Button, Progress  } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import style from './index.module.scss'
import 'animate.css';

import { king, stopKing as stop, EWord } from './data'

const  WordStudy = () => {

  const [word, setWord] = useState("abundance");
  const [needObj, setNeedObject] = useState<EWord>({});
  const audioDOM = useRef(null);
  const sentenceDOM = useRef(null);
  const [wordPlayImg, setWordPlayImg] = useState(stop)
  const [sentencePlayImg, setSentencePlayImg] = useState(stop)
  const [showMsg, setShowMsg] = useState(false);
  const [showWordDetail, setShowWordDetail] = useState(false);



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

  const getMesage = () => {
    setShowMsg(true)
    playSentence();
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
      {
        showWordDetail ? (
        <div className="animate__animated animate__backInRight">
          <div className={style.content}>
            <div className={style.word}>{word}</div>
            <div className={style.account}>
                <img src={wordPlayImg} alt="" onClick={playWord}/>
                {needObj.accent}
            </div>
          </div>
          <div className={style.parentBox}>
            {
              showMsg ? (
                <div className={[style.cardMsg, 'animate__animated','animate__backInRight'].join(' ')}>
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
              ) : ''
            }
          </div>
          <div className={style.footer}>
            <div><Button className={style.know}>我认识</Button></div>
            <div><Button className={style.message} onClick={getMesage}>提示一下</Button></div>
          </div>
        </div>
        ) : (
          <div className="animate__animated animate__backInRight">
            <div className={style.wordDetail}>
              <div className={style.wordTitle}>
                <span className={style.word}>variety</span>
                <span className={style.rightIcon}>
                  <img src={wordPlayImg} alt="" onClick={playWord}/>
                </span>
              </div>
              <div className={style.account}>/variety/</div>
              <div className={style.btnIcon}>
                <span>释义</span>
              </div>
              <p>n.种类;变化;多样性</p>
              <div className={style.btnIcon}>
                <span>英文释义</span>
              </div>
              <p>a form of theatre or television entertainment that consists of a series of short performances, such as singing, dancing and funny acts</p>
              <div className={style.btnIcon}>
                <span>例句</span>
              </div>
              <div className={style.sentence}>
                <p> of tomatoes; they are different in color.
                <span className={style.call} onClick={playSentence}>
                  <img src={sentencePlayImg} />
                </span>
                </p>
                <p>番茄有很多种类，颜色各不相同。</p>
              </div>
              <div className={style.btnIcon}>
                <span>词根词汇</span>
              </div>
              <p>vari变化 + ety名词后缀 → variety变化，多样化</p>
              <button className={style.nextWordBtn}>下一个</button>
            </div>
          </div>
        )
      }

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
