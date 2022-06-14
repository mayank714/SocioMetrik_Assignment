import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-form.scss';

export const TodoForm = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState('');
  const [addedtask, setaddedTask] = React.useState([]);

  const handleAddTodo = () => {
    // Fin an ability to add new task
    // setaddedTask(task);
    // setaddedTask( arr => [...arr, `${arr.length}`]);
    setaddedTask([...addedtask, task]);
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <>
      <div className="todo-form">
        <input
          placeholder="Enter new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyUp={handleKeyUp}
        />
        <button type="button" onClick={handleAddTodo}>
          Add task
        </button>
        {/* <br /> */}
      </div>
      <div>
        <h1>List of Tasks</h1>
        <span>
          {addedtask.map((v, i, oarr) => (
            <h5>{v}</h5>
          ))}
        </span>
      </div>
    </>
  );
};
