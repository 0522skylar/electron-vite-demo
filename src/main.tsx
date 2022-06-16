import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from "react-router-dom";
import { ConfigProvider } from 'antd';
import App from './App'
import 'styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <ConfigProvider direction="rtl">
        <App />
      </ConfigProvider>
    </HashRouter>
  </React.StrictMode>
)

window.removeLoading()
