import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home title="Home page" />} />
        <Route
          path="/login"
          element={<Login title="Login page" description="Mini absen app" />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>Page Nout Found</h1>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
