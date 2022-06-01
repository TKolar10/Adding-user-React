import { useState } from "react";
import "./App.css";
import Form from "./Component/Form";
import NewUser from "./Component/NewUser";
function App() {
  const [users, getUsers] = useState([]);
  const newUserHandler = (newUser) => {
    getUsers((prevUser) => {
      return [newUser, ...prevUser];
    });
  };
  const deleteUserHandler = (event) => {
    console.log(event.target.id);
  };
  return (
    <div>
      <Form onNewUser={newUserHandler} />
      {users.map((newUser) => (
        <NewUser
          key={newUser.id}
          onClick={deleteUserHandler}
          object={newUser}
        />
      ))}
    </div>
  );
}

export default App;
