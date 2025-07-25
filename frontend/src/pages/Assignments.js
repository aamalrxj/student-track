import React, { useEffect, useState } from 'react';
import { Table, Tag, Select } from 'antd';
import axios from 'axios';

const { Option } = Select;

export default function Assignments() {
  const [data, setData] = useState([]);
  const [courseFilter, setCourseFilter] = useState(null);
  const [assignmentFilter, setAssignmentFilter] = useState(null);

  useEffect(() => {
    axios.get('/api/assignments').then(res => setData(res.data));
  }, []);

  // Filtered data
  let filtered = data;
  if (courseFilter) filtered = filtered.filter(d => d.courseId === courseFilter);
  if (assignmentFilter) filtered = filtered.filter(d => d.id === assignmentFilter);

  // To populate filters
  const courseIds = [...new Set(data.map(d => d.courseId))];
  const assignmentIds = [...new Set(data.map(d => d.id))];

  const columns = [
    { title: 'Assignment Id', dataIndex: 'id', key: 'id' },
    { title: 'Course Id', dataIndex: 'courseId', key: 'courseId' },
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Status', dataIndex: 'status', key: 'status', 
      render: status => <Tag color={status === 'Completed' ? 'green' : 'orange'}>{status}</Tag> },
    { title: 'Due Date', dataIndex: 'dueDate', key: 'dueDate' },
  ];

  return (
    <div>
      <h2>Assignments</h2>
      <div style={{ marginBottom: 16 }}>
        <Select
          allowClear
          placeholder="Filter by Course Id"
          style={{ width: 150, marginRight: 8 }}
          onChange={v => setCourseFilter(v)}
        >
          {courseIds.map(id => <Option value={id} key={id}>{id}</Option>)}
        </Select>
        <Select
          allowClear
          placeholder="Filter by Assignment Id"
          style={{ width: 150 }}
          onChange={v => setAssignmentFilter(v)}
        >
          {assignmentIds.map(id => <Option value={id} key={id}>{id}</Option>)}
        </Select>
      </div>
      <Table columns={columns} dataSource={filtered} rowKey="id" />
    </div>
  );
}
