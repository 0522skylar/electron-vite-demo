import type { RadioChangeEvent } from 'antd';
import { Radio, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import style from './index.module.scss'
import headImg from '@/assets/image/myHeadImg.jpg';

const { TabPane } = Tabs;

interface StoryItem {
  _id?: string,
  title?: string,
  storytype?: string,
  content?: string
}
export default function My() {

  const [fable, setFable] = useState<Array<StoryItem>>([]); // 寓言
  const [beforeBed, setBeforeBed] = useState<Array<StoryItem>>([]); // 睡前
  const [fairy, setFairy] = useState<Array<StoryItem>>([]); // 童话
  useEffect(() => {
    fetch('http://localhost:80/admin/story', {
      method: 'get',
    }).then((response) => response.json())
    .then((res) => {
      // console.log(res.data.rows)
      handlerStory(res.data.rows)
    }).catch((err) => {
      console.log(err, 'error');
    })
  }, [])

  const handlerStory = (list: Array<StoryItem>) => {
    let yan:Array<StoryItem> = []
    let tong: Array<StoryItem> = []
    let bed: Array<StoryItem> = []
    list.forEach((item) => {
      if(item.storytype === "寓言") {
        yan.push(item);
      }
      else if(item.storytype === "睡前") {
        bed.push(item)
      }
      else if(item.storytype === "童话") {
        tong.push(item)
      }
      else {
        console.log(item)
      }
    })

    setFable(yan)
    setBeforeBed(bed)
    setFairy(tong)
  }
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
            <div className={style.childRoute}>字谜</div>
            <div className={`${style.childRoute} ${style.activeRoute}`}>故事</div>
            <div className={style.childRoute}>英语</div>
          </div>
          <div className={style.subjectTab}>
            <Tabs defaultActiveKey="1" type="card" size={'large'}>
              <TabPane tab="寓言" key="1">
                {
                  fable.map((item) => (
                    <div className={style.box} key={item._id}>
                      <div className={style.title}>{ item.title }</div>
                      <div className={style.type}>{ item.storytype }</div>
                      <div className={style.content}>{ item.content }</div>
                    </div>
                  ))
                }
              </TabPane>
              <TabPane tab="睡前" key="2">
                {
                  beforeBed.map((item) => (
                    <div className={style.box} key={item._id}>
                      <div className={style.title}>{ item.title }</div>
                      <div className={style.type}>{ item.storytype }</div>
                      <div className={style.content}>{ item.content }</div>
                    </div>
                  ))
                }
              </TabPane>
              <TabPane tab="童话" key="3">
                {
                  fairy.map((item) => (
                    <div className={style.box} key={item._id}>
                      <div className={style.title}>{ item.title }</div>
                      <div className={style.type}>{ item.storytype }</div>
                      <div className={style.content}>{ item.content }</div>
                    </div>
                  ))
                }
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  )
}
