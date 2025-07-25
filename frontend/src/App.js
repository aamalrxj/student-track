import React, { useState } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from './components/Sidebar';
import CustomNavbar from './components/CustomNavbar';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import CGPA from './pages/CGPA';
import Assignments from './pages/Assignments';

const { Content, Sider } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Sidebar />
        </Sider>
        <Layout>
          <CustomNavbar />
          <Content style={{ margin: '24px 16px 0' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/cgpa" element={<CGPA />} />
              <Route path="/assignments" element={<Assignments />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}
export default App;
