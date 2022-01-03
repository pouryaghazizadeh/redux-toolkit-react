import { Typography } from "@mui/material";
// mui
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { del, upd } from "../../redux/slice/todoSlice";
import Button from "../Button/Button";
import Input from "../input/Input";
// style
import { todoCardStyles } from "./todoCard.style";

const TodoCard = ({ id, text, setTodo }) => {
  // state for handel edit mood
  const [edit, setEdit] = useState(false);
  // state for update edited card
  const [update, setUpdate] = useState(text);
  const dispatch = useDispatch();

  // call class
  const classes = todoCardStyles();

  // style btn edit
  const InfoEditBtn = {
    event: (e) => {
      if (edit) {
        dispatch(upd({ id: id, text: update }));
        setEdit(false);
      } else {
        setTodo(update);
        //  // this is for when edit finished input be empty and dont have bug in original input
        setTodo("");
        setEdit(true);
      }
    },
    name: "edit",
  };

  // info for input edit
  const inputEdit = {
    event: (e) => {
      setUpdate(e.target.value);
    },
    value: update,
    size: "small",
    sx: {
      width: "100%",
    },
    placeholder: "write a text",
  };

  // info for delete button
  const infoDeleteBtn = {
    event: (e) => {
      dispatch(del(id));
    },
    name: "delete",
  };

  return (
    <Box component="section" className={classes.card} id={id}>
      {edit ? (
        <Input Info={inputEdit} />
      ) : (
        <Typography
          className={classes.text}
          variant="p"
          component="section"
          id={id}
        >
          {text}
        </Typography>
      )}
      <Button Info={InfoEditBtn} />
      <Button Info={infoDeleteBtn} />
    </Box>
  );
};

export default TodoCard;

//  <div key={id}>
//       {edit ? (
//         <>
//           <p id={id}>{text}</p>
//           <input
//             value={update}
//             onChange={(e) => {
//               setUpdate(e.target.value);
//             }}
//           />
//           <button
//             onClick={() => {
//               dispatch(del(id));
//             }}
//           >
//             delete
//           </button>

//           <button
//             onClick={(e) => {
//               dispatch(upd({ id: id, text: update }));
//               setEdit(false);
//             }}
//           >
//             edit
//           </button>
//         </>
//       ) :
//       // if we dont have edit this code will run
//       (
//         <>
//           <p id={id}>{text}</p>

//           <button
//             onClick={() => {
//               dispatch(del(id));
//             }}
//           >
//             delete
//           </button>
//           <button
//             onClick={() => {
//                 setTodo(update);
//                 // this is for when edit finished input be empty and dont have bug in original input
//                  setTodo("");
//               setEdit(true);
//             }}
//           >
//             edit
//           </button>
//         </>
//       )}
//     </div>
