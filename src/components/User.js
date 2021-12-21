import React, {  useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { Link  } from 'react-router-dom'
//import {getUser} from './action/index.js';
import { userDeleteRequest, userRequest } from '../thunk/userRequest.js';



export const User=()=> {

 const All=useSelector((state) => state.GetUser.user);
console.log("ussers",All);
 const dispatch=useDispatch();

    useEffect(() => {
     dispatch(userRequest())       
     },[]);

     const deleteUser=(id)=>{
       dispatch(userDeleteRequest(id))
     }

    return (
        <>
            <div>
               
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                
                    <tbody>
                    {All.map((user) => { return(
                        <tr key={user.id}>
                            
                            <td> {user.id} </td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>

                            <Link className="btn btn-primary" onClick={()=>deleteUser(user.id)}>Delet</Link>
                            
                            <Link className="btn btn-primary" to={`/EditUser/${user.id}`}>Edit</Link>
                            
                        </tr>
                     ) })}
                    </tbody>
                
            </table>
          
            </div> 
        </>
    )
                    }