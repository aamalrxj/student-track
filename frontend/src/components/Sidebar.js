import React from 'react';
import { Menu } from 'antd';
import { DashboardOutlined, BookOutlined, CalculatorOutlined, ProfileOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['dashboard']}
      style={{ height: '100%' }}
      onClick={(e) => navigate(e.key)}
      items={[
        {
          key: '/',
          icon: <DashboardOutlined />,
          label: 'Dashboard',
        },
        {
          key: '/courses',
          icon: <BookOutlined />,
          label: 'Courses',
        },
        {
          key: '/cgpa',
          icon: <CalculatorOutlined />,
          label: 'CGPA',
        },
        {
          key: '/assignments',
          icon: <ProfileOutlined />,
          label: 'Assignments',
        },
      ]}
    />
  );
};

export default Sidebar;
