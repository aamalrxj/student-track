import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const columns = [
  { title: 'Course Name', dataIndex: 'name', key: 'name' },
  { title: 'Course Id', dataIndex: 'id', key: 'id' },
  { title: 'Credit Units', dataIndex: 'credits', key: 'credits' },
  { title: 'Student Grade', dataIndex: 'grade', key: 'grade' },
  { title: 'Grade Points', dataIndex: 'gradePoints', key: 'gradePoints' },
];

export default function Courses() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/courses').then(res => setData(res.data));
  }, []);

  return <Table columns={columns} dataSource={data} rowKey="id" />;
}
