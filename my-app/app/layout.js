'use client'
import 'react-bootstrap'
import Header from './_component/header'
import '@/styles/globals.scss'
import Sidebar from './_component/sideBar'
import { useState } from 'react'

export default function RootLayout({ children }) {
  const [sideWidth,setSideWidth] = useState('272px 1fr')
  function rewidth(e) {
    if(sideWidth == '100px 1fr'){
      setSideWidth('272px 1fr')
    }else{
      setSideWidth('100px 1fr')
    }
    
  }
  return (
    <html lang="en">
      <body>
        <Header />
        <div
          className="side"
          style={{ gridTemplateColumns: sideWidth }}
          onClick={rewidth}
        >
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  )
}
