import { useState } from 'react';
import api from './api';
import Users from './components/users';

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  console.log("api",api.users.fetchAll())

  const handleDelete = (userId) => {
    setUsers(prevState => prevState.filter(td => td._id !== userId));
  } 
  return (
    <div>
       <div>
      <SearchStatus length={users.length}/>
      <Users users={users} onDelete={handleDelete} onToggleBookmar={handleToggleBookmark}/>
    </div>
    </div>
  )
}

export default App;

