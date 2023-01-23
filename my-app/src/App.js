import { BrowserRouter as Router, Routes , Route, Link} from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/Users'
import NoMatch from "./pages/NoMatch";
function App() {
  return (
    <Router>
      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}   />          
          <Route path="/users" element={<Users/>}  />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      {/* </div> */}
    </Router>
  );
}
export default App;
