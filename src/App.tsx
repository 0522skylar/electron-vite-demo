import { useState, ReactNode } from 'react'
import {
  Routes,
  Route,
  Outlet,
  useNavigate
} from "react-router-dom";
import styles from 'styles/app.module.scss'
import BottomBar from "./components/BottomBar";
import { Button, Popover } from 'antd';
import { router } from './router'

interface IRoute {
  path: string;
  element: ReactNode;
}
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);


const App: React.FC = () => {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  return (
    <div className={styles.app}>
          
        <div className={styles.leftBox}>
          <BottomBar></BottomBar>
        </div>
        <div className={styles.rightBox}>
          <Routes>
            {
              router.map((item: IRoute ) => {
                return <Route path={item.path} element={item.element} />
              })
            }
          </Routes>
          <Outlet/>
          <button onClick={() => {navigate("/one")}}>点击跳转</button>
          <hr />
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          <Popover content={content} title="Title">
            <Button type="primary">Hover me</Button>
          </Popover>
        </div>
    </div>
  )
}

export default App
