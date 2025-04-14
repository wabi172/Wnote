'use client'
import React from 'react';
import { Dropdown, message, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};
const defaultItmes = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];
// items沒有值就用預設
const Dropmenu = ({icon, items = defaultItmes}) => (
  <Dropdown
    menu={{
      items,
      onClick,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <FontAwesomeIcon icon={icon} className='me-5'/>
      </Space>
    </a>
  </Dropdown>
);
export default Dropmenu;