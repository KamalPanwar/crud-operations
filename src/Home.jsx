import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Home = () => {
  const users= useSelector((state)=>state.users)
 
  return (
    <div className='container'>
        <h2>Crud App with JSON container</h2>
        <Link to='/create' className='btn btn-success my-3'>create +</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
             
             {users.map ((user, index )=>(
              <tr key ={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button className='btn btn-sm btn-primary ' >Edit</button>
                  <button className='btn btn-sm btn-danger '>delete</button>
                </td>
              </tr>
             ))}
            </tbody>
        </table>
      
    </div>
  )
}

export default Home
