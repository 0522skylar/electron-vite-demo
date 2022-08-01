import React, { useLayoutEffect, useState, useRef } from 'react';
import styles from './index.module.scss'
export default function ListShuffler() {
  const [data, setData] = useState([0, 1, 2, 3, 4, 5]);

  const listRef = useRef<HTMLDivElement>(null);

  function createChildElementRectMap(nodes: HTMLElement | null | undefined) {
    if (!nodes) {
      return new Map();
    }
    const elements = Array.from(nodes.childNodes) as HTMLElement[];
    // 使用节点作为 Map 的 key 存储当前快照，下次直接用 node 引用取值，相当方便
    return new Map(elements.map((node) => [node, node.getBoundingClientRect()]));
  }
  // 使用 ref 存储 DOM 之前的位置信息
  const lastRectRef = useRef<Map<HTMLElement, DOMRect>>(new Map());
  
  function handleAdd() {
    // 添加一条到顶部，让后面节点运动
    setData((prev) => [prev.length, ...prev]);
    // 并存储改变前的 DOM 快照
    lastRectRef.current = createChildElementRectMap(listRef.current);
  }

  useLayoutEffect(() => {
    // 改变后的 DOM 快照，此时 UI 并未更新
    const currentRectMap = createChildElementRectMap(listRef.current);
    // 遍历之前的快照
    lastRectRef.current.forEach((prevRect, node) => {
      // 前后快照的 DOM 引用一样，可以直接获取
      const currentRect = currentRectMap.get(node);

      // Invert
      const invert = {
        left: prevRect.left - currentRect.left,
        top: prevRect.top - currentRect.top,
      };

      const keyframes = [
        {
          transform: `translate(${invert.left}px, ${invert.top}px)`,
        },
        { transform: 'translate(0, 0)' },
      ];

      // Play 执行动画
      node.animate(keyframes, {
        duration: 800,
        easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
      });
    });
  }, [data]);

  return (
    <div className={styles.list} ref={listRef}>
      {data.map((item) => (
        <div key={item} className={styles.item}>
          {item}
        </div>
      ))}
    </div>
  );
}

