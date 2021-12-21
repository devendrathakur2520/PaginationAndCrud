import Post from './components/Post';
 import './App.css';
 import { Route, Link,Switch, BrowserRouter  as Router } from 'react-router-dom'
import {User} from './components/User';
import { EditUser } from './components/EditUser';

function App() {
  return (
    <div>
     <Router>
            <div>

                <nav>
                    <ul>
                        <li>
                            <Link to='/User'>User</Link>
                        </li>
                        <li>
                            <Link to='/Post'>Post</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>



                    <Route path='/User'>
                        <User/>
                    </Route>

                    <Route path='/Post'>
                        <Post/>
                    </Route>
                    <Route path='/EditUser/:id'>
                        <EditUser/>
                    </Route>

                </Switch>

            </div>
        </Router>
    </div>
  );
}

export default App;
