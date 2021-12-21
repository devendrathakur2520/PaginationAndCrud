import { combineReducers } from 'redux';
import SetPost from './SetPost';
import Pagination from './Pagination';
import GetUser from './GetUser';
import EditUser from './EditUser';
 const reducer = combineReducers({
    SetPost,
    Pagination,
    GetUser,
    EditUser
});
export default reducer;