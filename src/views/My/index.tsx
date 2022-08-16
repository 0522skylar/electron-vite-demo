import { Radio, Tabs } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import style from './index.module.scss'
import headImg from '@/assets/image/myHeadImg.jpg';
import axios from 'axios';

const { TabPane } = Tabs;

interface StoryItem {
  _id?: string,
  title?: string,
  storytype?: string,
  content?: string
}
export default function My() {

  const [content, setContent] = useState<Array<StoryItem>>([]); // 展示的内容
  const [fable, setFable] = useState<Array<StoryItem>>([]); // 寓言
  const [beforeBed, setBeforeBed] = useState<Array<StoryItem>>([]); // 睡前
  const [fairy, setFairy] = useState<Array<StoryItem>>([]); // 童话

  const [activeSub, setActiveSub] = useState<Number>(0)
  const [subList, setSubList] = useState<Array<String>>([
    '寓言', '睡前','童话','益智', '口才','魔力','围棋'
  ])

  const tabEle = useRef(null);
  const [isTop, setIsTop] = useState(true);

  const watchDOM = useRef(null)
  const debounce = (fn: Function, wait: number, time?: number) => {
    let previous: number | null = null; // 记录上一次运行的时间
    let timer:  number | NodeJS.Timeout | null = null;
    return function() {
      let now = +new Date();
      if (!previous) previous = now;
      // 当上一次执行的时间与当前的时间差大于设置的执行间隔时长的话，就主动执行一次
      if (now - previous > time) {
        clearTimeout(timer);
        fn();
        previous = now; // 执行函数后，马上记录当前时间
      } else {
        // 否则重新开始新一轮的计时
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn();
        }, wait);
      }
    };
  }
  const onScroll = () => {
    let topHeight = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;

      if(topHeight > 113) {
        tabEle.current.background = "#b7d8f7";
        setIsTop(false)
        // isVisibility = !isVisibility;
      } else {
        setIsTop(true)
        tabEle.current.background = "transparent";
      }
  }
  useEffect(() => {
    axios.get('http://localhost:80/admin/story').then((res) => {
      console.log(res)
      handlerStory(res.data.data.rows)
    }, err => {
      console.log(err, 'error');
    })
    /*
    fetch('http://localhost:80/admin/story', {
      method: 'get',
    }).then((response) => response.json())
    .then((res) => {
      // console.log(res.data.rows)
      handlerStory(res.data.rows)
    }).catch((err) => {
      console.log(err, 'error');
    })*/
    // 开始监听页面滚动
    const dom: HTMLElement = watchDOM.current  as unknown as HTMLElement;
    let isVisibility = true;
    const io = new IntersectionObserver(() => {
      setIsTop(isVisibility)
      isVisibility = !isVisibility;
    })

    // window.addEventListener('scroll', debounce(onScroll, 500))
    window.addEventListener('scroll', onScroll)

    // io.observe(dom);
    return () => {
      io.disconnect();
      // window.removeEventListener('scroll', debounce(onScroll, 500))
      window.removeEventListener('scroll', onScroll)
    }
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
    setContent(yan)
  }

  const selectSubTab = (index: number) => {
    if(index === 0) {
      setContent(fable)
    }
    else if(index === 1) {
      setContent(beforeBed)
    }
    else {
      setContent(fairy)
    }
    setActiveSub(index);
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
            <div className={style.userDesc} ref={watchDOM}>he more you like yourself, the less you are like anyone else, which makes you unique. </div>
          </div>
        </div>

         <div className={[style.twoMainTab, isTop ? null : style.isTop].join(' ')} ref={tabEle}>
          <div className={style.routerTab}>
            <div className={style.childRoute}>字谜</div>
            <div className={`${style.childRoute} ${style.activeRoute}`}>故事</div>
            <div className={style.childRoute}>英语</div>
          </div>
          <div className={style.subjectTab}>
            {
              subList.map((item, index) => {
                return (
                  <div className={activeSub === index ? style.sub_active : ''}
                  key={index}
                  onClick={() => selectSubTab(index)}
                  >{ item }</div>
                )
              })
            }
          </div>
        </div>

        {/* <div className={[style.fixdMain, isTop ? null : style.isTop].join(' ')}>
          <div className={style.routerTab}>
            <div className={style.childRoute}>字谜</div>
            <div className={`${style.childRoute} ${style.activeRoute}`}>故事</div>
            <div className={style.childRoute}>英语</div>
          </div>
          <div className={style.radius}></div>
          <div className={style.subjectTab}>
            {
              subList.map((item, index) => {
                return (
                  <div className={activeSub === index ? style.sub_active : ''}
                  key={index}
                  onClick={() => selectSubTab(index)}
                  >{ item }</div>
                )
              })
            }
          </div>
        </div> */}

        {/* <div className={style.commonMain}>
          <div className={style.routerTab}>
            <div className={style.childRoute}>字谜</div>
            <div className={`${style.childRoute} ${style.activeRoute}`}>故事</div>
            <div className={style.childRoute}>英语</div>
          </div>
          <div className={style.radius}></div>
          <div className={style.subjectTab}>
            {
              subList.map((item, index) => {
                return (
                  <div className={activeSub === index ? style.sub_active : ''}
                  key={index}
                  onClick={() => selectSubTab(index)}
                  >{ item }</div>
                )
              })
            }
          </div>
        </div> */}

        <div className={style.content}>
          <div className={style.boxCon}>
            {
              content.map((item) => (
                <div className={style.box} key={item._id}>
                  <div className={style.title}>{ item.title }</div>
                  <div className={style.type}>{ item.storytype }</div>
                  <div className={style.text}>{ item.content }</div>
                </div>
              ))
            }
          </div>
        </div>


        {/* <div className={style.oneText}></div> */}
      </div>
    </>
  )
}
