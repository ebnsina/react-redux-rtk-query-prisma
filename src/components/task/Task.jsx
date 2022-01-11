import { Link, useParams } from 'react-router-dom';
import { useTaskQuery } from '../../features/task/taskSlice';

function Task() {
  const { id } = useParams();

  const { data, isLoading, isError, isSuccess } = useTaskQuery(id);

  if (isLoading) return <p>Loading data from server.</p>;
  if (isError) return <p>Error in loading data.</p>;

  return (
    <div className='task'>
      <h1>{isSuccess && data.title}</h1>

      <Link className='btn btn-secondary' to='/'>
        Back
      </Link>
    </div>
  );
}

export default Task;
