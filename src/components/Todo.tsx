import { useState } from "react";

interface TodoState {
  id: number;
  task: string;
  completed: boolean;
}

const Todo = () => {
  const [todos, setTodos] = useState<TodoState[]>([]);

  const addTodo = (task: string) => {
    const newTodo: TodoState = {
      id: todos.length + 1,
      task,
      completed: false,
    };
    setTodos((pervTodo) => [...pervTodo, newTodo]);
  };
  return (
    <div>
      <h1>Todo </h1>

      <button onClick={() => addTodo("New Todo")}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} {todo.completed ? "Completed" : "Uncompleted"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
