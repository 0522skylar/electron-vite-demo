import { ReactNode } from 'react'
import One from "../views/One";
import Two from "../views/Two";
import StudyReport from "../views/studyReport";
import ReactHook from '../views/ReactHook'
import English from '../views/English'
import Grade from '../views/Grade'
import Sort from '../views/Sort'
import NoAuthorized from '../views/Error/noAuthorized'
import NoFind from '../views/Error/noFind'
import NoServer from '../views/Error/noServer'
import WordStudy from '../views/WordStudy'
import My from '../views/My'
import ListShuffler from '../views/Animation'
import PdfToHtml from '../views/pdfTohtml'

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
  },
  {
    path: 'grade',
    name: 'grade',
    element: <Grade />,
  },
  {
    path: 'sort',
    name: 'sort',
    element: <Sort />,
  },
  {
    path: '403',
    name: '403',
    element: <NoAuthorized />,
  },
  {
    path: '404',
    name: '404',
    element: <NoFind />,
  },
  {
    path: '500',
    name: '500',
    element: <NoServer />,
  },
  {
    path: 'wordStudy',
    name: 'WordStudy',
    element: <WordStudy />,
  },
  {
    path: 'my',
    name: 'My',
    element: <My />,
  },
  {
    path: 'animate',
    name: 'Animate',
    element: <ListShuffler />,
  },
  {
    path: 'pdf2html',
    name: 'pdf2html',
    element: <PdfToHtml />
  }
];
