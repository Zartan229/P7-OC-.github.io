import { BrowserRouter as Router, Routes , Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Loging from './pages/Loging'
import NoMatch from "./pages/NoMatch";
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}   />          
          <Route path="/loging/:id" element={<Loging/>}  />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      {/* </div> */}
    </Router>
  );
}
export default App;
