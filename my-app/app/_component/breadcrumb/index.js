'use client'
import React from 'react'
import { useLocation, Link } from 'react-router-dom'

function Breadcrumb() {
  const location = useLocation() //用useLocation()記得要被Router組件包裹，BrowserRouter用於瀏覽器環境 
  const path = location.pathname.split('/').filter((item) => item != '') //分割路徑 移除空字串

  const breadcrumbData = [{ name: 'Home', url: '/' }]

  let currentPath = ''
  path.forEach((item, index) => {
    currentPath += `/${item}`
    breadcrumbData.push({
      name: item,
      url: currentPath,
    })
  })
if(!location){
    return <p>loading...</p>
}
if(!document){
  return <></>
}
console.log(location);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {breadcrumbData.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${
              index === breadcrumbData.length - 1 ? 'active' : ''
            }`}
            aria-current={index === breadcrumbData.length - 1 ? 'page' : null}
          >
            {index === breadcrumbData.length - 1 ? (
              item.name
            ) : (
              <Link to={item.url}>{item.name}</Link>
            )}
            {index < breadcrumbData.length - 1 && (
              <span className="breadcrumb-separator">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
    
  )
}
export default Breadcrumb