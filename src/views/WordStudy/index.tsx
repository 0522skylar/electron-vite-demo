import { Button, Progress  } from 'antd';
import React from 'react';
import style from './index.module.scss'

const  WordStudy = () => {

  const king = 'data:image/gif;base64,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'

  const stop = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAilBMVEUAAAApwaApvqBO3MoovqEov6Apv6Epv6Iov6EpvqEpv6Eov6EpwKErwKItxKcwxKkov6Epv6ApwKEpwKEtw6Uov6Epv6Eov6Eov6Epv6Epv6EpwKIpwKEpv6Mpw6MuwqMpvqEqwKIrwqEqwqI1yqopv6Apv6EpvqEpvqIowKEovqEov6Eov6EovqAIbtG3AAAALXRSTlMAPugD/fnCbtiftYyFNRYM9Od+VxvGZs28mHNaUjomIdVMLysI7q+odl7p3KuvvkW8AAABfElEQVRIx+3WyXaCMBiG4d9CQEaZBRQc69D2u//bKzUtLfQQSNx5fDdZPRpDQqRnD9GxXihTJwBz1Kw3x1cqWnN13NJ9aXtY4qdK9msvDG0zObtJAVWcBRjCx72YJjYwiA3YmsCuXiHAW6D4v0KmPW9aFidAhCsGmH2bo02IaQXovd9dYhz7xYWaIiDvYmMCNgG3GbQ5sOvgcAI+MCBrxh0w76z4ywRMsY7A59OcSWNyAasZYsCRx4sQ+qYZGN5lMV+zshlsYC+PfR0p/4xYHlMKXSNaA6UCtoCEyAMcBewCHlECnO/BlvK0K7Vpp2B8wUylR2XwR7VW2iQm3yT1HdtzS9LYAQp+MFxpvPo9kp7sy6BiwJVua72kv+UTsAVE/DXUu0OyCdhLo+9NdqJuH+OYdwVYTb1iy2iyI0uMZwx6TIPtwpHrJiJB/lmAc36ehHfdINZqGiux+1j2flfHtDFa7JF0Wsm4DRbyuP03ZZJSWvSGMCPlFvTsMfoEWPe4qIWR/SoAAAAASUVORK5CYII='
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
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAilBMVEUAAAApwaApvqBO3MoovqEov6Apv6Epv6Iov6EpvqEpv6Eov6EpwKErwKItxKcwxKkov6Epv6ApwKEpwKEtw6Uov6Epv6Eov6Eov6Epv6Epv6EpwKIpwKEpv6Mpw6MuwqMpvqEqwKIrwqEqwqI1yqopv6Apv6EpvqEpvqIowKEovqEov6Eov6EovqAIbtG3AAAALXRSTlMAPugD/fnCbtiftYyFNRYM9Od+VxvGZs28mHNaUjomIdVMLysI7q+odl7p3KuvvkW8AAABfElEQVRIx+3WyXaCMBiG4d9CQEaZBRQc69D2u//bKzUtLfQQSNx5fDdZPRpDQqRnD9GxXihTJwBz1Kw3x1cqWnN13NJ9aXtY4qdK9msvDG0zObtJAVWcBRjCx72YJjYwiA3YmsCuXiHAW6D4v0KmPW9aFidAhCsGmH2bo02IaQXovd9dYhz7xYWaIiDvYmMCNgG3GbQ5sOvgcAI+MCBrxh0w76z4ywRMsY7A59OcSWNyAasZYsCRx4sQ+qYZGN5lMV+zshlsYC+PfR0p/4xYHlMKXSNaA6UCtoCEyAMcBewCHlECnO/BlvK0K7Vpp2B8wUylR2XwR7VW2iQm3yT1HdtzS9LYAQp+MFxpvPo9kp7sy6BiwJVua72kv+UTsAVE/DXUu0OyCdhLo+9NdqJuH+OYdwVYTb1iy2iyI0uMZwx6TIPtwpHrJiJB/lmAc36ehHfdINZqGiux+1j2flfHtDFa7JF0Wsm4DRbyuP03ZZJSWvSGMCPlFvTsMfoEWPe4qIWR/SoAAAAASUVORK5CYII=" alt="" />
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
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAilBMVEUAAAApwaApvqBO3MoovqEov6Apv6Epv6Iov6EpvqEpv6Eov6EpwKErwKItxKcwxKkov6Epv6ApwKEpwKEtw6Uov6Epv6Eov6Eov6Epv6Epv6EpwKIpwKEpv6Mpw6MuwqMpvqEqwKIrwqEqwqI1yqopv6Apv6EpvqEpvqIowKEovqEov6Eov6EovqAIbtG3AAAALXRSTlMAPugD/fnCbtiftYyFNRYM9Od+VxvGZs28mHNaUjomIdVMLysI7q+odl7p3KuvvkW8AAABfElEQVRIx+3WyXaCMBiG4d9CQEaZBRQc69D2u//bKzUtLfQQSNx5fDdZPRpDQqRnD9GxXihTJwBz1Kw3x1cqWnN13NJ9aXtY4qdK9msvDG0zObtJAVWcBRjCx72YJjYwiA3YmsCuXiHAW6D4v0KmPW9aFidAhCsGmH2bo02IaQXovd9dYhz7xYWaIiDvYmMCNgG3GbQ5sOvgcAI+MCBrxh0w76z4ywRMsY7A59OcSWNyAasZYsCRx4sQ+qYZGN5lMV+zshlsYC+PfR0p/4xYHlMKXSNaA6UCtoCEyAMcBewCHlECnO/BlvK0K7Vpp2B8wUylR2XwR7VW2iQm3yT1HdtzS9LYAQp+MFxpvPo9kp7sy6BiwJVua72kv+UTsAVE/DXUu0OyCdhLo+9NdqJuH+OYdwVYTb1iy2iyI0uMZwx6TIPtwpHrJiJB/lmAc36ehHfdINZqGiux+1j2flfHtDFa7JF0Wsm4DRbyuP03ZZJSWvSGMCPlFvTsMfoEWPe4qIWR/SoAAAAASUVORK5CYII=" />
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
