import Login from "./Components/Login";
import Register from "./Components/Register";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    
    <Router>
    <div>
      <Routes>
      <Route path="/registro" Component={Register}/>
      <Route path="/" Component={Login}/>
    </Routes>
    </div>
  </Router>

  );
}

export default App;
