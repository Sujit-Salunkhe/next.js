"use client";
import { useState } from "react";
import { addTodo, removeTodo } from "@/reducers/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Home() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task);
  const handleInput = (e) => {
    dispatch(addTodo(input));
    setInput("")
  };

  const handleRemoveTodo = (todoid) =>{
    dispatch(removeTodo(todoid))
  }
  return (
    <>
      <div className="flex-col justify-center items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border-2 border-black m-3 text-black"
        />
        <button
          onClick={handleInput}
          className="bg-black text-white p-3 rounded"
        >
          Click
        </button>
        {tasks ? (
          tasks.map((todo) => (
            <div className="bg-black text-white p-3 flex" key={todo.id}>
              <p className="text-white m-2">{todo.text}</p>
              <button
                onClick={() => handleRemoveTodo(todo.id)}
                className="bg-white text-black"
              >delete</button>
            </div>
          ))
        ) : (
          <p className="text-black"> There is no Tasks</p>
        )}
      </div>
    </>
  );
}
