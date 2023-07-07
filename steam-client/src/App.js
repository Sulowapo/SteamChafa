import Login from "./Components/Login";
import Register from "./Components/Register";
import MainPage from "./Components/MainPage";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    
    <Router>
    <div>
      <Routes>
      <Route path="/registro" Component={Register}/>
      <Route path="/" Component={Login}/>
      <Route path="/mainPage" Component={MainPage}/>
    </Routes>
    </div>
  </Router>

  );
}

export default App;
