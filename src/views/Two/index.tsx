import React, { createContext, useRef, useState } from 'react'


const tabItems = [
  { key: 'fruits', title: '水果1111' },
  { key: 'vegetables', title: '蔬菜' },
  { key: 'animals1', title: '333' },
  { key: 'animals2', title: '444' },
  { key: 'animals3', title: '555' },
]

export default function One() {
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <div title='配合 Swiper 实现手势滑动' className='myTabs'>
        <h3>这是two page</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis soluta, doloribus consequuntur et, natus rerum, adipisci aspernatur eos sapiente atque velit aliquid animi. Incidunt, sequi a veniam iste ratione debitis!</p>

        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam maiores eligendi! Recusandae blanditiis aut dolorum aspernatur necessitatibus facere fugiat. Nemo dicta beatae dolorum vero repellendus, reprehenderit odit sequi repudiandae.loren</div>
      </div>
    </>
  )
}