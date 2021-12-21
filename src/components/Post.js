import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { showPerPage } from '../action';
import { postRequest } from '../thunk/postRequest'

export default function Post() {

  const dispatch = useDispatch();
  const AllPost = useSelector((state) => state.SetPost.post)
  const filters=useSelector((state)=>state.Pagination.filter)
  console.log("all", AllPost);
  console.log("filter",filters);
  const handlePageChange = (acc) => {
    dispatch(showPerPage({ page: filters.page + acc}));
  };

  useEffect(() => {
    dispatch(postRequest(filters))
  }, [filters.limit,filters.page])
  return (
    <div>
      

<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      
      <th>Id</th>
      <th>title</th>
      
    </tr>
  </thead>
  <tbody>
  {AllPost.map((data) => (
    <tr>
      <td>{data.id}</td>
      <td>{data.title}</td>
    </tr>
   
  ))}
  </tbody>
</Table>
<button disabled={filters.page === 1} onClick={() => handlePageChange(-1)}>Prev</button>
      <button disabled={filters.page === filters.pages} onClick={() => handlePageChange(1)}>Next</button>
    </div>
  )
}
