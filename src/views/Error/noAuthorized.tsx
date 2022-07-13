import { Button, Result } from 'antd';
import React from 'react';
import {useNavigate} from 'react-router-dom'


const  NoAuthorized = () =>{
  const router = useNavigate();
  return  (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<Button type="primary" onClick={() => {router("/english")}}>Back Home</Button>}
    />
  );
}

export default NoAuthorized;
