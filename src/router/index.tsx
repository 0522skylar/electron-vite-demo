import { ReactNode } from 'react'
import One from "../views/One";
import Two from "../views/Two";
import StudyReport from "../views/studyReport";
import ReactHook from '../views/ReactHook'
import English from '../views/English'

interface IRoute {
  path: string;
  name?: string;
  element?: ReactNode;
}
export const router: Array<IRoute> = [
  // {/* 重定向，当没有网址是http://localhost:3000/#/，展示的内容 */}
  {
    path: '*',
    element: <main style={{ padding: "1rem" }}>
    <p>There's nothing here!</p>
  </main>,
  },
  {
    path: 'one',
    name: 'One',
    element: <One />,
  },
  {
    path: 'two',
    name: 'Two',
    element: <Two />,
  },
  {
    path: 'studyReport',
    name: 'studyReport',
    element: <StudyReport />,
  },
  {
    path: 'react_hook',
    name: 'react_hook',
    element: <ReactHook />,
  },
  {
    path: 'english',
    name: 'english_index',
    element: <English />,
  }
];
