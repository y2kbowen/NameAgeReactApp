import React, {useState} from 'react';
import AddUser from './components/users/AddUser';
import UserList from './components/users/UsersList';


function App() {
  const [usersList,setUsersList] = useState([]);

  const addUserHandler = (userName,userAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList,{name: userName, age: userAge, id: Math.random().toString()}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
