import Navbar from './Component/Navbar'
import './App.css';
import Home from "./Screen/Home";
import Todo from "./Screen/Todo"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} exact ></Route>
          <Route path="/todo" element={<Todo/>} exact ></Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
