import { ReactNode } from 'react'
import One from "../views/One";
import Two from "../views/Two";

interface IRoute {
  path: string;
  element: ReactNode;
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
    element: <One />,
  },
  {
    path: 'two',
    element: <Two />,
  }
];