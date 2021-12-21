import { EDIT_USER} from "../action";

const initialState = {
   
    user: {name:"",
    username:"",
    email:"",
    phone:""
  }
}

export default function EditUser(state = initialState, action) {
    switch (action.type) {
        case EDIT_USER:
            return {
                ...state,
                user: action.payload,
            }
           

        default:
            return state;
    }
}