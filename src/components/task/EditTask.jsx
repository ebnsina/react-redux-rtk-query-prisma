import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  useTaskQuery,
  useUpdateTaskMutation,
} from '../../features/task/taskSlice';

function EditTask() {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading, isError } = useTaskQuery(id);
  const [updateTask] = useUpdateTaskMutation();

  useEffect(() => {
    if (data) {
      setTitle(data.title);
    }
  }, [id, data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateTask({ id, title });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <p>Loading data from server.</p>;
  if (isError) return <p>Error in loading data.</p>;

  return (
    <div className='form'>
      <h4>Task Form</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Update Task
        </button>
        <Link className='btn btn-secondary' to='/'>
          Back
        </Link>
      </form>
    </div>
  );
}

export default EditTask;
