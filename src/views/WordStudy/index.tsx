import { Button, Progress  } from 'antd';
import React, { useEffect, useState } from 'react';
import style from './index.module.scss'

import { king, stopKing as stop } from './data'

const  WordStudy = () => {

  const [word, setWord] = useState("abundance");
  useEffect(() => {
    fetch('http://localhost/admin/word-detail?word=abundance', {
      method: 'get',

    }).then((response) => response.json())
    .then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err, 'error');
    })
  }, [])

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
        <div className={style.word}>contrast</div>
        <div className={style.account}>
            <img src={king} alt="" />
          /ˈkɑnˌtræst/, /kənˈtræst/
        </div>
      </div>
      <div className={style.cardMsg}>
        <p>根据提示，判断释义</p>
        <div className={style.boxMask}>
          <span className={style.explame}>例句</span>
          <span className={style.juzi}>
          In chess, the <span className={style.current}>contrast</span> between black and white is easy to see.
          </span>
          <span className={style.call}>
            <img src={stop} />
          </span>
        </div>
      </div>
      <div className={style.footer}>
        <div><Button className={style.know}>我认识</Button></div>
        <div><Button className={style.message}>提示一下</Button></div>
      </div>
    </>
  )
}

export default WordStudy;
