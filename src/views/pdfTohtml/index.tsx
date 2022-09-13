import React, { createContext, useRef, useState } from 'react'
// import pdf2html from 'pdf2html' // 引用了fs模块，不支持在浏览器中使用


export default function PdfToHtml() {
  const [activeIndex, setActiveIndex] = useState(0)

  const pdfTohtml = (event) => {
    const file = event.target.value
    // console.log(file)
    // pdf2html.html(file, (err, html) => {
    //     if (err) {
    //         console.error('Conversion error: ' + err)
    //     } else {
    //         console.log(html)
    //     }
    // })
  }

  return (
    <>
      <div title='pdf' className='myTabs'>
        <input type="file" name="上传pdf文件" id="pdf" onChange={pdfTohtml}/>
      </div>
    </>
  )
}