import { Button, Result } from 'antd';
import React from 'react';
import {useNavigate} from 'react-router-dom'


const NoServer = () => {
  const router = useNavigate();

  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={<Button type="primary" onClick={() => {router("/english")}}>Back Home</Button>}
    />
  );
}

export default NoServer;
