import axios from 'axios';
import { setPost } from "../action/index.js";
export const postRequest=(prevFilters)=>{
    return async(dispatch) =>{  
      
      const params = ({
        _limit: prevFilters.limit,
        _page: prevFilters.page
      })
    await axios.get('http://localhost:3004/posts',{params}).then((response)=>{

    
            dispatch(setPost(response.data))
            console.log(response.data)
          })
        }
      }