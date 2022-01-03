// tools
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Input from "../../components/input/Input";
import TodoCard from "../../components/TodoCard";
import { add, selectTodo } from "../../redux/slice/todoSlice";
// style
import {todoStyles} from "./todo.style"

const Todo = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector(selectTodo);
// style
const classes = todoStyles()
  // info for todo input
  const todoInput = {
    type: "text",
    variant: "outlined",
    placeholder: "write your text",
    sx: { width: { xs: "78%",sm:"68%"}, marginRight: "3px" },
  };
  // info add btn
  const InfoAddBtn = {
    name: "add",
    value: todo,
    event: (e) => {
      dispatch(add({ text: todo, id: Date.now().toString() }));
      setTodo(" ");
    },
    size: "large",
    sx: { height: "55px" },
  };

  // delete btn
  const InfoDeleteBtn = {
    name: "Delete All",
    sx: {
      width: { xs: "100%", sm: "83%" },
      margin: { xs: "15px 0px 0px 0px", sm: "15px 4px 0px 4px", md:"15px 0px 0px 0px" },
      height: "45px",
    },
  };

  return (
    <Box component="main" className={classes.containerPage}>
      <Box component="section" className={classes.containerInput}>
        <Input Info={todoInput} />
        <Button Info={InfoAddBtn} />
        <Button Info={InfoDeleteBtn} />
      </Box>
      <Box component="section" className={classes.containerCard}>
        {todos.map(({ text, id }) => {
          return <TodoCard key={id} text={text} id={id} setTodo={setTodo} />;
        })}
      </Box>
    </Box>
  );
};

export default Todo;
