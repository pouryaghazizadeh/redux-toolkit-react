// tools
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// component
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Todo from "./pages/todo/Todo";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
