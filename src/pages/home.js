import { Link } from 'react-router-dom';
import Tasks from '../components/task/Tasks';

function HomePage() {
  return (
    <main className='main'>
      <Tasks />

      <Link className='add-btn btn btn-primary' to='/new'>
        Add New Task
      </Link>
    </main>
  );
}

export default HomePage;
