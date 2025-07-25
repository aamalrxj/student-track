import React from 'react';
import { Card, Row, Col } from 'antd';

export default function Dashboard() {
  return (
    <div>
      <h1>Welcome to Student Portal</h1>
      <Row gutter={24}>
        <Col span={8}>
          <Card title="Total Courses" bordered={false}>7</Card>
        </Col>
        <Col span={8}>
          <Card title="Ongoing Assignments" bordered={false}>3</Card>
        </Col>
        <Col span={8}>
          <Card title="Current CGPA" bordered={false}>8.2</Card>
        </Col>
      </Row>
      {/* Add more widgets as you like */}
    </div>
  );
}
