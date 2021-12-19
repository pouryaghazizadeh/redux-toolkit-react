// tools
import { Route, Routes } from "react-router-dom";
// component
import Home from "./pages/home/Home";
import Todo from "./pages/todo/Todo";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
