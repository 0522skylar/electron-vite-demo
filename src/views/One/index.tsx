import React, { createContext, useEffect, useRef, useState } from 'react'
import { Modal } from 'antd';
import Cartoon from '@/components/Cartoon'
import Comment from '@/components/Comment'

const tabItems = [
  { key: 'fruits', title: '水果1111' },
  { key: 'vegetables', title: '蔬菜' },
  { key: 'animals1', title: '333' },
  { key: 'animals2', title: '444' },
  { key: 'animals3', title: '555' },
]

export default function One() {
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <>
      <div className='myTabs'>
      <h3>这是One page</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis soluta, doloribus consequuntur et, natus rerum, adipisci aspernatur eos sapiente atque velit aliquid animi. Incidunt, sequi a veniam iste ratione debitis!
        <div onClick={showModal}>
          <Cartoon isLandscape={true}></Cartoon>
        </div>

        <Modal title="评价" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <Comment isLandscape={true}></Comment>
        </Modal>
      </div>
    </>
  )
}
