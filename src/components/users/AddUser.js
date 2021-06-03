import { useState } from "react";
import Card from "../ui/Card";
import classes from "./AddUser.module.css";
import Button from "../ui/Button";
import ErrorModal from "../ui/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name (non-empty value).",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (age > 0).",
      });

      return;
    }
    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUserName("");
    setEnteredAge("");
  };

  const usernameChangedHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangedHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
      setError(null);
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangedHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangedHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
