import { SHOW_PER_PAGE} from "../action";

const initialState = {
  filter:{
    page:1,limit:10
  }
}

export default function Pagination(state = initialState, action) {

    switch (action.type) {
        case SHOW_PER_PAGE:
            return {
                ...state,
                filter: {
                  ...state.filter,
                  ...action.payload,
              }
            }
           

        default:
            return state;
    }
}