import { ITask } from "./inerface";
import "./App.css";

interface Props {
  tasks: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ tasks, completeTask }: Props) => {
  return (
    <div className="container">
      <div className="todo-task-container">
        <p>{tasks.task}</p>
        <p>{tasks.deadLine}</p>
        <button onClick={() => completeTask(tasks.task)}>x</button>
      </div>
    </div>
  );
};

export default TodoTask;
