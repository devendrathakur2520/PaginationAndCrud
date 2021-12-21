import { SET_POST} from "../action";

const initialState = {
   
    post:[],
}

export default function SetPost(state = initialState, action) {

    switch (action.type) {
        case SET_POST:
            return {
                ...state,
                post: action.payload,
            }
           

        default:
            return state;
    }
}