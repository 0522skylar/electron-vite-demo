import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Demo1 from "./demo1";
import Demo2 from "./demo2";
import Demo3 from "./demo3";
import styles from "./index.module.scss";

export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.app}>
        {/* <Demo1 /> */}
        <Demo2 />
        {/* <Demo3 /> */}
      </div>
    </DndProvider>
  );
}