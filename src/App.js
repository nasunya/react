import { useState } from 'react';
import API from './api';
import Users from './components/users';
import SearchStatus  from './components/searchStatus';

const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  console.log(users)

  const handleDelete = (userId) => {
    setUsers(prevState => prevState.filter(td => td._id !== userId));
  } 


const handleToggleBookmark = (id) => {
  console.log(id);
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

