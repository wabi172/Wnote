'use client'
import React, { useState, useEffect } from 'react'
import './sideBar.css'
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MenuOutlined,
  PieChartOutlined,
} from '@ant-design/icons'
import { red, blue } from '@ant-design/colors'
import { Button, Menu } from 'antd'
const items = [
  {
    key: '1',
    icon: <PieChartOutlined />,
    label: 'Option 1',
  },
  {
    key: '2',
    icon: <DesktopOutlined />,
    label: 'Option 2',
  },
  {
    key: '3',
    icon: <ContainerOutlined />,
    label: 'Option 3',
  },
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      {
        key: '5',
        label: 'Option 5',
      },
      {
        key: '6',
        label: 'Option 6',
      },
      {
        key: '7',
        label: 'Option 7',
      },
      {
        key: '8',
        label: 'Option 8',
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: '9',
        label: 'Option 9',
      },
      {
        key: '10',
        label: 'Option 10',
      },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          {
            key: '11',
            label: 'Option 11',
          },
          {
            key: '12',
            label: 'Option 12',
          },
        ],
      },
    ],
  },
]

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  function resize() {
    container.style.gridTemplateColumns = 100 + 'px 1fr' // 更新 Grid 佈局
  }
  function stopResize() {
    dcontainer.style.gridTemplateColumns = 272 + 'px 1fr' // 更新 Grid 佈局
  }
  return (
    
    <div
    className='side'
      style={{
        width: 256,
      }}
    >
      <Button
        className="btn"
        type="red"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
          backgroundColor: '#d6e4ff',
          marginTop: '40px',
        }}
      >
        <MenuOutlined />
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
        style={{
          backgroundColor: ' #08979c',
        }}
      />
    </div>
  )
}
export default Sidebar
