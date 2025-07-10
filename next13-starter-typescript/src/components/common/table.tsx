'use client';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
interface Iprops {
  blogs: IBlog[];
}

function TableComponent(props: Iprops) {
  const { blogs } = props;
  console.log(blogs);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Content</th>
          <th>Author</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        { blogs?.map((blog, index) => (
          <tr key={blog.id}>
            <td>{blog.id}</td>
            <td>{blog.title}</td>
            <td style={{ maxWidth: '500px', textOverflow: 'ellipsis' }}>{blog.content}</td>
            <td>{blog.author}</td>
            <td style={{ textAlign: 'center' }}>
              <Button variant="success" className='me-2'>View</Button>
              <Button variant="primary" className='me-2'>Edit</Button>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        )) }
      </tbody>
    </Table>
  );
}

export default TableComponent;