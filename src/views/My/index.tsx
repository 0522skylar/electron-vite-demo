import type { RadioChangeEvent } from 'antd';
import { Radio, Tabs } from 'antd';
import React from 'react';
import style from './index.module.scss'
import headImg from '@/assets/image/myHeadImg.jpg';

const { TabPane } = Tabs;

export default function My() {
  return (
    <>
      <div className={style.body}>
        <div className={style.header}>
          <div className={style.userContent}>
            <div className={style.portrait}>
              <img src={headImg} />
            </div>
            <div className={style.userName}>天天</div>
            <div className={style.userDesc}>he more you like yourself, the less you are like anyone else, which makes you unique. </div>
          </div>
        </div>

        <div className={style.twoMainTab}>
          <div className={style.routerTab}>
            <div className={style.childRoute}>语文</div>
            <div className={`${style.childRoute} ${style.activeRoute}`}>数学</div>
            <div className={style.childRoute}>英语</div>
          </div>
          <div className={style.subjectTab}>
            <Tabs defaultActiveKey="1" type="card" size={'large'}>
              <TabPane tab="Card Tab 1" key="1">
                Content of card tab 1
              </TabPane>
              <TabPane tab="Card Tab 2" key="2">
                Content of card tab 2
              </TabPane>
              <TabPane tab="Card Tab 3" key="3">
                Content of card tab 3
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  )
}
