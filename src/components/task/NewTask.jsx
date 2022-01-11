import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddTaskMutation } from '../../features/task/taskSlice';

function NewTask() {
  const [title, setTitle] = useState('');

  const navigate = useNavigate();

  const [addTask] = useAddTaskMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addTask({ title });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='form'>
      <h4>Task Form</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name='title'
            placeholder='Task title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Add Task
        </button>
      </form>
    </div>
  );
}

export default NewTask;
