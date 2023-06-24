import React, { useState } from 'react'
import { addUser } from './UserReducer'
import { useDispatch, useSelector } from 'react-redux'

const Create = () => {
    const [name,setName]= useState("")
    const [email, setEmail]= useState("")
  const users=useSelector((state)=>state.users)

const dispatch=useDispatch()


      const handleSubmit=(event)=>{
        event.preventDefault()

    dispatch(addUser({id:users[users.length-1].id+1,name :name,email:email}))
    }
    const navigate= 
  return (

    

    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
           <form onSubmit={handleSubmit}>
            <h3>Add New User</h3>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text"  onChange={(e)=> setName(e.target.value)} name="name" id="" className='form-control' placeholder='Enter name'/>

            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email " onChange={(e)=>setEmail(e.target.value)} name='email' className='form-control'  placeholder='enter email'/>


            </div> <br />
            <button className='btn btn-info'>submit</button>
           </form>
        </div>
      
    </div>
  )
}

export default Create
