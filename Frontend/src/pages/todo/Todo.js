// tools
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, selectTodo , del} from "../../redux/slice/todoSlice";

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
      <button
        onClick={() => {
          dispatch(add({ text: todo, id: Date.now()}));
          setTodo("");
        }}
      >
        add
      </button>

      <div>
        {todos.map((value)=>{
            return (
              <div key={value.id}>
                <p id={value.id}>{value.text}</p>
                <button onClick={(e) => dispatch(del(value.id))}>delete</button>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Todo;
