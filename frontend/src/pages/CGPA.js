import React, { useEffect, useState } from 'react';
import { Card, Form, InputNumber, Button, Table } from 'antd';
import axios from 'axios';

export default function CGPA() {
  const [courses, setCourses] = useState([]);
  const [cgpa, setCGPA] = useState(0);

  useEffect(() => {
    axios.get('/api/courses').then(res => setCourses(res.data));
  }, []);

  useEffect(() => {
    if (courses.length === 0) setCGPA(0);
    else {
      let totalCredits = 0, totalPoints = 0;
      courses.forEach(course => {
        totalCredits += course.credits;
        totalPoints += course.credits * course.gradePoints;
      });
      setCGPA((totalPoints / totalCredits).toFixed(2));
    }
  }, [courses]);

  return (
    <Card title="Current CGPA">
      <Table
        columns={[
          { title: 'Course Name', dataIndex: 'name', key: 'name' },
          { title: 'Credits', dataIndex: 'credits', key: 'credits' },
          { title: 'Grade Points', dataIndex: 'gradePoints', key: 'gradePoints' },
        ]}
        dataSource={courses}
        pagination={false}
        rowKey="id"
      />
      <div style={{ marginTop: 24, fontSize: 18 }}>
        <b>CGPA: {cgpa}</b>
      </div>
    </Card>
  );
}
