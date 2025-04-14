'use client'
import 'react-bootstrap'
import Providers from './provider'
import Header from './_component/header'
import '@/styles/globals.scss'
import Sidebar from './_component/sideBar'
import Breadcrumb from './_component/breadcrumb'
import { BrowserRouter as Router } from 'react-router-dom'
import { useState } from 'react'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Flex, Layout, Menu, theme } from 'antd'
const { Content, Sider } = Layout

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  }
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '6'),
    getItem('Team 2', '8'),
  ]),
  getItem('Files', '9', <FileOutlined />),
]

export default function RootLayout({ children }) {
  const [sideWidth, setSideWidth] = useState('272px 1fr')
  function rewidth(e) {
    if (sideWidth == '100px 1fr') {
      setSideWidth('272px 1fr')
    } else {
      setSideWidth('100px 1fr')
    }
  }
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  if(!document){
    return <></>
  }
  return (
    <html lang="en">
      <body>
      <Providers>
      <Layout
          style={{
            minHeight: '100vh',
          }}
        >
          <Header />
          <Layout
            style={{
              minHeight: '100vh',
              flexDirection: 'row', //主軸水平 內容由左至右
            }}
          >
            <Sider collapsible theme="light">
              <Menu
                theme="light"
                defaultSelectedKeys={['1']}
                mode="inline"
                items={items}
              />
            </Sider>

            <Layout>
              <Content  style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}>
          <Router>
          <Breadcrumb/>
          </Router>
          {children}
          </Content>
            </Layout>
          </Layout>
        </Layout>
      </Providers>
       
      </body>
    </html>
  )
}
