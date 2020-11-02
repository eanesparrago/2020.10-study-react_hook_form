import React from "react";
import "./styles.css";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, errors } = useForm();
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const validateUsername = async (value) => {
    await sleep(1000);

    if (value === "bill") {
      return true;
    }

    return false;
  };

  return (
    <div>
      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
        <label>First Name:</label>
        <input
          name="firstName"
          ref={register({ required: true, minLength: 2 })}
        />
        {errors.firstName && <p>This is required</p>}

        <label>Last Name:</label>
        <input name="lastName" ref={register({ required: true })} />
        {errors.lastName && <p>This is required</p>}

        <label>Gender</label>
        <select name="gender" ref={register({ required: true })}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.gender && <p>This is required</p>}

        <label>Username</label>
        <input
          name="username"
          ref={register({ required: true, validate: validateUsername })}
        />
        {errors.username && <p>This is required</p>}

        <label>Email</label>
        <input name="email" ref={register({ required: true })} />
        {errors.email && <p>This is required</p>}

        <label>About you</label>
        <textarea name="aboutYou" ref={register({ required: true })} />
        {errors.aboutYou && <p>This is required</p>}

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
