import { useState } from "react";
import { useDispatch } from "react-redux";
import { del, upd } from "../redux/slice/todoSlice";

const TodoCard = ({ id, text, setTodo }) => {
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState(text);
  const dispatch = useDispatch();
  return (
    <div key={id}>
      {edit ? (
        <>
          <p id={id}>{text}</p>
          <input
            value={update}
            onChange={(e) => {
              setUpdate(e.target.value);
            }}
          />
          <button
            onClick={() => {
              dispatch(del(id));
            }}
          >
            delete
          </button>
          <button
            onClick={(e) => {
              dispatch(upd({ id: id, text: update }));
              setEdit(false);
            }}
          >
            edit
          </button>
        </>
      ) : (
        <>
          <p id={id}>{text}</p>

          <button
            onClick={() => {
              dispatch(del(id));
            }}
          >
            delete
          </button>
          <button
            onClick={() => {
                setTodo(update);
              setEdit(true);
            }}
          >
            edit
          </button>
        </>
      )}
    </div>
  );
};

export default TodoCard;
