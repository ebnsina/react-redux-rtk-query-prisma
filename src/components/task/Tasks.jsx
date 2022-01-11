import { Link, useNavigate } from 'react-router-dom';
import {
  useDeleteTaskMutation,
  useTasksQuery,
} from '../../features/task/taskSlice';
import Loader from '../common/Loader';

function Tasks() {
  const { data, isLoading, isError, isSuccess } = useTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();

  if (isLoading) return <Loader />;
  if (isError) return <p>Error in loading data.</p>;

  const handleDelete = async (id) => {
    try {
      if (window.confirm('Are you sure to delete?')) {
        const res = await deleteTask(id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className='title'>All Tasks</h1>

      <ul className='tasks'>
        {isSuccess &&
          data.map((task) => (
            <li key={task.id}>
              <div>
                <h2>{task.title}</h2>

                <div className='actions'>
                  <Link className='btn-link' to={`tasks/${task.id}`}>
                    View
                  </Link>
                  <Link className='btn-link' to={`tasks/${task.id}/edit`}>
                    Edit
                  </Link>

                  <button
                    className='btn btn-primary'
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Tasks;
