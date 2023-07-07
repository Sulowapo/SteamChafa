import Login from "./Components/Login";
import Register from "./Components/Register";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio de sesión</Link>
          </li>
          <li>
            <Link to="/registro">Registro</Link>
          </li>
        </ul>
      </nav>

      <Routes>
      <Route path="/registro" Component={Register}/>
      <Route path="/login" Component={Login}/>
    </Routes>
    </div>
  </Router>

  );
}

export default App;
