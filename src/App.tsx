import { useState, ReactNode } from 'react'
import {
  Routes,
  Route,
  Outlet,
  useNavigate
} from "react-router-dom";
import styles from 'styles/app.module.scss'
import 'antd/dist/antd.css';
import BottomBar from "./components/BottomBar";
import { router } from './router'

interface IRoute {
  path: string;
  element?: ReactNode;
}


const App: React.FC = () => {
  return (
    <div className={styles.app}>
        <div className={styles.leftBox}>
          <BottomBar></BottomBar>
        </div>
        <div className={styles.rightBox}>
          <Routes>
            {
              router.map((item: IRoute ) => {
                return <Route path={item.path} element={item.element} key={item.path} />
              })
            }
          </Routes>
          <Outlet/>
        </div>
    </div>
  )
}

export default App
