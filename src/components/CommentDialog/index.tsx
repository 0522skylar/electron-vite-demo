import Comment from '@/components/Comment'
import React, { useRef, useState } from 'react'
import { Button, Modal } from 'antd';

export default function CommentDialog() {
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
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="评价" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Comment isLandscape={true}></Comment>
      </Modal>
    </>
  )
} 
