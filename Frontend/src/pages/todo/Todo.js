// tools
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Input from "../../components/input/Input";
import TodoCard from "../../components/TodoCard";
import { add, selectTodo } from "../../redux/slice/todoSlice";
const Todo = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector(selectTodo);

  // info for todo input
  const todoInput = {
    type: "text",
    variant: "outlined",
    placeholder: "write your text",
    sx: { width: "80%", marginRight: "3px" },
  };
  // info add btn
  const InfoAddBtn = {
    name: "add",
    event: () => {
      dispatch(add({ text: todo, id: Date.now().toString() }));
      setTodo("");
      console.log("hkj");
    },
    size: "large",
    sx: {
      height: "55px",
    },
  };

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="section"
        sx={{
          width: "500px",
          height: "150px",
          marginTop: "10px",
          // display: "flex",
          background: "blue",
        }}
      >
        <Input Info={todoInput} />
        <Button Info={InfoAddBtn} />
      </Box>
      <Box
        component="section"
        sx={{
          width: "100%",
          height: "auto",
          background: "khaki",
        }}
      >
        {todos.map(({ text, id }) => {
          return <TodoCard key={id} text={text} id={id} setTodo={setTodo} />;
        })}
      </Box>
    </Box>
  );
};

export default Todo;

// <div>
//       <input
//         type="text"
//         placeholder="todo"
//         value={todo}
//         onChange={(e) => setTodo(e.target.value)}
//       />
//       {/* button for add todo  */}
//       <button
//         onClick={() => {
//           dispatch(add({ text: todo, id: Date.now().toString() }));
//           setTodo("");
//         }}
//       >
//         add
//       </button>
//       {/* button for delete a todo */}
//       <button onClick={() => dispatch(delAll())}>delete All</button>
//       {/* map on array of todo for show them */}
//       <div>

//       </div>
//     </div>
// <div>
//   {todos.map(({ text, id }) => {
//     return <TodoCard key={id} text={text} id={id} setTodo={setTodo} />;
//   })}
// </div>;
