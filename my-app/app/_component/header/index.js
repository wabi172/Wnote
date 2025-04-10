'use client'
import React, { useState, useEffect } from 'react'
import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faCalendar,
  faCircleUser,
  faBell,
} from '@fortawesome/free-solid-svg-icons' // 導入需要的圖示
export default function Header() {
  const [user, setUser] = useState()

  return (
    <>
      <nav className="nav container-fluid">
        <div className="p-2 flex-grow-1">Wnote</div>
        <div className="p-2 flex-grow-1">
          <form className="form-control">
            <input
              className="ps-2 me-1"
              type="search"
              placeholder="search"
              aria-label="Search"
            ></input>
            <button className="btn " type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
        <div className="p-2 flex-grow-1 justify-content-end align-items-center">
          <div className="me-3 ">
            <FontAwesomeIcon icon={faCalendar} className='me-3' />
            <FontAwesomeIcon icon={faBell} className='me-3'/>
            <FontAwesomeIcon icon={faCircleUser} className='me-3'/>
          </div>
        </div>
      </nav>
    </>
  )
}
