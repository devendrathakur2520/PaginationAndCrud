import { GET_USER} from "../action";

const initialState = {
   
    user:[],
}

export default function GetUser(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload,
            }
           

        default:
            return state;
    }
}