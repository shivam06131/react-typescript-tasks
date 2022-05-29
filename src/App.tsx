import "./App.css";
import { ChangeEvent, FC, ReactElement, useEffect, useState } from "react";
import { ITask } from "./inerface";
import TodoTask from "./TodoTask";

const App: FC = (): ReactElement => {
  const [task, setTask] = useState<string>("");
  const [deadLine, setDeadLine] = useState<number | string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadLine(Number(e.target.value));
    }
  };

  const handleClick = (): void => {
    let obj = { task, deadLine };
    setTodoList([obj, ...todoList]);
    setTask("");
    setDeadLine("");
  };

  const completeTask = (taskName: string): void => {
    setTodoList(todoList.filter((item) => item.task !== taskName));
  };

  console.log("todoList", todoList);

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            name="task"
            value={task}
            id="task"
            placeholder="Add task... "
            onChange={handleChange}
          />
          <input
            type="number"
            name="deadLine"
            id="deadLine"
            value={deadLine}
            placeholder="Add task priority..."
            onChange={handleChange}
          />
        </div>
        <button onClick={handleClick}>Add Task...</button>
      </div>
      <div>
        {todoList.map((task: ITask, index: number): ReactElement => {
          return (
            <TodoTask key={index} tasks={task} completeTask={completeTask} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
