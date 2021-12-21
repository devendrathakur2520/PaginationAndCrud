import React,{useEffect} from 'react';
import axios from 'axios';

import { useSelector,useDispatch } from 'react-redux';
import { editUser } from '../action';
import { useHistory, useParams } from 'react-router';

export const EditUser=()=>{
    const {id}=useParams();
    const history=useHistory()
  const editUsers=useSelector((state) => state.EditUser.user);
  console.log("EditUser",editUsers);
 const dispatch=useDispatch();
   
       const {name,username,email,phone}=editUsers;
       const onInputChange=(e)=>{
           //console.log(e.target.value)
            dispatch(editUser({...editUsers,[e.target.name]: e.target.value}));
            
        }
        useEffect(()=>{
             loadUser()
            
        },[]);
        
        const loadUser=async(e)=>{
         await axios.get(`http://localhost:3004/users/${id}`).then((response)=>{
                dispatch(editUser(response.data));
                console.log(response.data)
           })
        }

         const onSubmit= async (e)=>{
            e.preventDefault();
            await axios.put(`http://localhost:3004/users/${id}`,editUsers);
            history.push('/User')
            };

            

    return(
        <>
        <div  className="mb-3">
        <form onSubmit={(e)=>{onSubmit(e)}}>
        Name:
        <input type="text" name="name" value={name} onChange={(e =>onInputChange(e))}/>
        username:
        <input type="text" name="username" value={username} onChange={(e)=>onInputChange(e)}/>
        email:
        <input type="text" name="email" value={email} onChange={(e)=>onInputChange(e)}/>
        phone:
        <input type="text" name="phone" value={phone} onChange={(e)=>onInputChange(e)}/>
        submit:
        <button type="submit" className="btn btn-primary"  onSubmit={()=>onSubmit()}>Submit</button>
        </form>
        </div>
        </>
    )
}
