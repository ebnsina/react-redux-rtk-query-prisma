import { Routes, Route } from 'react-router-dom';
import EditTask from '../components/task/EditTask';
import NewTask from '../components/task/NewTask';
import Task from '../components/task/Task';
import HomePage from '../pages/home';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='tasks/:id' element={<Task />} />
      <Route path='tasks/:id/edit' element={<EditTask />} />
      <Route path='new' element={<NewTask />} />
    </Routes>
  );
}

export default AppRoutes;
