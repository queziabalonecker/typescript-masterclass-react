import { useEffect, useState } from 'react';
import User from './components/User';
import api from './services/api';

function App() {
  interface IUser {
    name: string;
    email: string;
  }
  const [users, setUsers] = useState<IUser[]>([]);

  const fetchData = async () => {
    const response = await api.get('/users');
    setUsers(response.data);
  };

  useEffect(() => {
    fetchData();
  });
  return (
    <div className='App'>
      {users.map((user) => (
        <User key={user.email} user={user} />
      ))}
    </div>
  );
}

export default App;
