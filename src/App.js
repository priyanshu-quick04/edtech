import "./App.css";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route expact path="/" element={<Home />} />
          <Route expact path="/signup" element={<SignUp />} />
          <Route expact path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
