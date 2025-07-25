import React from 'react';
import { Layout, Breadcrumb, Dropdown, Menu, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';

const { Header } = Layout;

const breadcrumbNameMap = {
  '/': 'Home',
  '/courses': 'Courses',
  '/cgpa': 'CGPA',
  '/assignments': 'Assignments'
};

const CustomNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Build breadcrumb as per pathname
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const breadcrumbItems = [
    <Breadcrumb.Item key="home" onClick={() => navigate('/')}>{'Home'}</Breadcrumb.Item>,
    ...pathSnippets.map((snippet, index) => {
      const url = `/${snippet}`;
      return (
        breadcrumbNameMap[url] && <Breadcrumb.Item key={url}>{breadcrumbNameMap[url]}</Breadcrumb.Item>
      );
    }),
  ];

  const userMenu = (
    <Menu>
      <Menu.Item key="profile">Edit Personal Data</Menu.Item>
      <Menu.Item key="change-password">Change Password</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ background: '#fff', padding: '0 24px', display: 'flex', alignItems:'center', justifyContent:'space-between' }}>
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
      <Dropdown overlay={userMenu} placement="bottomRight">
        <Avatar style={{ marginLeft: 24, cursor:'pointer' }} icon={<UserOutlined />} />
      </Dropdown>
    </Header>
  );
};

export default CustomNavbar;
