// tools
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoCard from "../../components/TodoCard";
import { add, selectTodo, delAll } from "../../redux/slice/todoSlice";

const Todo = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector(selectTodo);
  return (
    <div>
      <input
        type="text"
        placeholder="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      {/* button for add todo  */}
      <button
        onClick={() => {
          dispatch(add({ text: todo, id: Date.now().toString() }));
          setTodo("");
        }}
      >
        add
      </button>
      {/* button for delete a todo */}
      <button onClick={() => dispatch(delAll())}>delete All</button>
      {/* map on array of todo for show them */}
      <div>
        {todos.map(({ text, id }) => {
          return <TodoCard key={id} text={text} id={id} setTodo={setTodo} />;
        })}
      </div>
    </div>
  );
};

export default Todo;
