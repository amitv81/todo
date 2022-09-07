import React from "react";
import { TodoModal } from "../../models";
import TodoItem from "./TodoItem";

export interface Props {
  todos: TodoModal[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModal[]>>; // copied from setTodos state
  setFilter?: React.Dispatch<React.SetStateAction<string>>; // copied from setTodos state
  filter?: string;
}

const TodoList = ({ todos, setTodos, filter }: Props) => {
  let filteredList = todos.sort((d1,d2)=>{
      const date1:any = new Date(d1.date);
      const date2:any = new Date(d2.date);
      return date1 - date2
  });
  if (filter === "done") {
    filteredList = todos.filter((todoItem) => todoItem.isDone === true);
  } else if (filter === "pending") {
    filteredList = todos.filter((todoItem) => todoItem.isDone === false);
  } else {
    filteredList = todos;
  }
  console.log(filteredList);
  return (
    <>
      {filteredList.map((todoItem, index) => (
        <TodoItem
          todoItem={todoItem}
          todoItems={todos}
          filteredItems={filteredList}
          setTodos={setTodos}
          index={index}
        />
      ))}
    </>
  );
};

export default TodoList;
