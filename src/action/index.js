export const  SET_POST= 'SET_POST';
export const  SHOW_PER_PAGE= 'SHOW_PER_PAGE';
export const  GET_USER= 'GET_USER';
export const  EDIT_USER= 'EDIT_USER';


export const  setPost= (payload) => ({ type: SET_POST, payload });
export const  showPerPage= (payload) => ({ type: SHOW_PER_PAGE, payload });
export const  getUser= (payload) => ({ type: GET_USER, payload });
export const  editUser= (payload) => ({ type: EDIT_USER, payload });