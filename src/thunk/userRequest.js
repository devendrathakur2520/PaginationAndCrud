import axios from "axios"
import { getUser } from "../action"


export const userRequest =  () => async(dispatch)=>{
 

try{
  const response=  await axios.get("http://localhost:3004/users")
      
        dispatch(getUser(response.data))
        console.log("thunk", response.data)
} catch(err){
  console.log(err);
}
  }


  export const userDeleteRequest =  (id) => async(dispatch)=>{
 

    try{
      const response=  await axios.delete(`http://localhost:3004/users/${id}`)
          window.location.reload()
    } catch(err){
      console.log(err);
    }
      }