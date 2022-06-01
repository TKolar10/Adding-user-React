import React, { useState } from "react";
import style from "./Form.module.css";

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isValid, isValide] = useState(true);
  // const [inValid, isInvalid] = useState(true);

  const getUsername = (event) => {
    setUsername(event.target.value);
  };
  const getAgee = (event) => {
    setAge(event.target.value);
  };
  const submitForm = (event) => {
    event.preventDefault();
    if (username.trim().length <= 0 || age.trim().length <= 0) {
      isValide(false);
    } else {
      props.onNewUser([
        { key: Math.random().toString(), newUsername: username, newAge: age },
      ]);
      setUsername("");
      setAge("");
      isValide(true);
    }
  };

  return (
    <form className={`${style.form} ${!isValid && style.invalid}`}>
      <label>Username</label>
      <input type="text" value={username} onChange={getUsername} />
      <label>Age (Years)</label>
      <input type="number" value={age} onChange={getAgee} />
      <button onClick={submitForm}>Add User</button>
    </form>
  );
};
export default Form;
