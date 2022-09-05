import { Button, Progress, Modal } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import Comment from '@/components/Comment'
import style from './index.module.scss'

// import './test.module.scss'
import 'animate.css';
import { king, stopKing as stop, EWord } from './data'

const  WordStudy = () => {
  const router = useNavigate();
  const {state} = useLocation();// state传参
  const [count, setCount] = useState(state ? Number(state) : 5);
  const [needObj, setNeedObject] = useState<EWord>({});
  const audioDOM = useRef(null);
  const sentenceDOM = useRef(null);
  const [wordPlayImg, setWordPlayImg] = useState(stop)
  const [sentencePlayImg, setSentencePlayImg] = useState(stop)
  const [showMsg, setShowMsg] = useState(false);
  const [showWordDetail, setShowWordDetail] = useState(true);
  const [studyList, setStudyList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isModalVisible, setIsModalVisible] = useState(false);



  useEffect(() => {
    fetch('http://localhost/admin/gaokaoList?count=' + count, {
      method: 'get',
    }).then((response) => response.json())
    .then((res) => {
      setStudyList(res.data);
      console.log(res.data);
      getWordDetail(res.data);
    }).catch((err) => {
      console.log(err, 'error');
    })
  }, [])


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    router('/grade')
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const getWordDetail = (arr: Array<string>) => {

    if(arr.length === 0) {
      return;
    }
    fetch('http://localhost/admin/word-detail?word=' + arr[currentIndex+1], {
      method: 'get',

    }).then((response) => response.json())
    .then((res) => {
      setNeedObject(res.data);
    }).catch((err) => {
      console.log(err, 'error');
    })
    setCurrentIndex(currentIndex + 1);

  }

  const studyNext = () => {
    console.log(currentIndex, count, 'end')
    if(currentIndex+1 >= count) {
      showModal();
      return;
    }
    getWordDetail(studyList);
    setShowWordDetail(true);
  }

  const showDetailFun = () => {
    setShowWordDetail(false);
    setShowMsg(false)
    playWord();
  }
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
          <div className={style.num}>{currentIndex +1 }/{count}</div>
        </div>
        <div className={style.item}>
          <div className={style.desc}>今日新词</div>
          <div className={style.num}>{currentIndex +1 }/{count}</div>
        </div>
        <div className={style.item}>
          <div className={style.desc}>学习时间</div>
          <div className={style.num}>0s</div>
        </div>
      </div>
      <div className={style.progress}>
        <Progress percent={(currentIndex +1) / count * 100} />
      </div>
      <div className={style.line}></div>
      {
        showWordDetail ? (
        <div className="animate__animated animate__backInRight">
          <div className={style.content}>
            <div className={style.word}>{needObj.word}</div>
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
            <div><Button className={style.know} onClick={showDetailFun}>我认识</Button></div>
            <div><Button className={style.message} onClick={getMesage}>提示一下</Button></div>
          </div>
        </div>
        ) : (
          <div className="animate__animated animate__backInLeft">
            <div className={style.wordDetail}>
              <div className={style.wordTitle}>
                <span className={style.word}>{needObj.word}</span>
                <span className={style.rightIcon}>
                  <img src={wordPlayImg} alt="" onClick={playWord}/>
                </span>
              </div>
              <div className={style.account}>{needObj.accent}</div>
              <div className={style.btnIcon}>
                <span>释义</span>
              </div>
              <p>{needObj.mean_cn}</p>
              <div className={style.btnIcon}>
                <span>英文释义</span>
              </div>
              <p>{needObj.mean_en}</p>
              <div className={style.btnIcon}>
                <span>例句</span>
              </div>
              <div className={style.sentence}>
                <p> {needObj.sentence}
                <span className={style.call} onClick={playSentence}>
                  <img src={sentencePlayImg} />
                </span>
                </p>
                <p>{needObj.sentence_trans}</p>
              </div>
              {
                needObj.word_etyma ? (
                  <>
                  <div className={style.btnIcon}>
                    <span>词根词汇</span>
                  </div>
                  <p>{needObj.word_etyma}</p>
                  </>
                ) : ''
              }

              <button className={style.nextWordBtn} onClick={studyNext}>下一个</button>
            </div>
          </div>
        )
      }
      <div className={style.zhanweifu}></div>
      <Modal title="评价" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Comment isLandscape={true}></Comment>
      </Modal>
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
