import React from "react";
import { Link } from "react-router-dom";
import { Menu, Divider } from 'antd';
import {
  CalendarOutlined,
  AppstoreOutlined,
  TeamOutlined,
 
} from '@ant-design/icons';

const AdminNav = () => {
  const [mode, setMode] = React.useState('inline');
  const [theme, setTheme] = React.useState('light');

  return (
    <>
      
      <Divider type="vertical" />
      <br />
      <Menu
        style={{ width: 224 }}
        mode={mode}
        theme={theme}
      >
         <Menu.Item key="1" style={{ height: 50 }} icon={<AppstoreOutlined />}>
         <Link to="/admin/dashboard" className="nav-link">
          Dashboard
        </Link>
        </Menu.Item>
        <Menu.Item key="2" style={{ height: 50 }} icon={<TeamOutlined />}>
        <Link to="/admin/allusers" className="nav-link">
          Utilisateurs
        </Link>
        </Menu.Item>
        <Menu.Item key="3" style={{ height: 50 }} icon={<CalendarOutlined />}>
        <Link to="/admin/allannonces" className="nav-link">
          Annonces
        </Link>
        </Menu.Item>
      </Menu>

  </>
  );
};

export default AdminNav;
