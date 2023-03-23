import React, { useState, useEffect } from "react";
import "./style.css";
function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    console.log("useeffect running after state change");
    if (
      firstName.length > 3 &&
      lastName.length > 3 &&
      email.length > 8 &&
      age > 0 &&
      password === confirmPassword &&
      password.length > 8
    ) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [
    firstName.length,
    lastName.length,
    email.length,
    age,
    password,
    confirmPassword,
  ]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "age":
        setAge(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    console.log(firstName, lastName, age, email, password, confirmPassword);
  };

  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="firstName">
            First Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            value={firstName}
            onChange={(e) => handleInputChange(e)}
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="lastname">
          <label className="form__label" for="lastName">
            Last Name{" "}
          </label>
          <input
            type="text"
            name=""
            id="lastName"
            value={lastName}
            className="form__input"
            onChange={(e) => handleInputChange(e)}
            placeholder="LastName"
          />
        </div>
        <div className="age">
          <label className="form__label" for="age">
            Age{}
          </label>
          <input
            type="number"
            name=""
            id="age"
            value={age}
            min="0"
            max="100"
            className="form__input"
            onChange={(e) => handleInputChange(e)}
            placeholder="age"
          />
        </div>
        <div className="email">
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            value={email}
            onChange={(e) => handleInputChange(e)}
            placeholder="Email"
          />
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
            placeholder="Password"
          />
        </div>
        <div className="confirm-password">
          <label className="form__label" for="confirmPassword">
            Confirm Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => handleInputChange(e)}
            placeholder="Confirm Password"
          />
          {password !== confirmPassword && <span>Password not match</span>}
        </div>
      </div>
      <div class="footer">
        <button
          onClick={() => handleSubmit()}
          type="submit"
          class="btn"
          disabled={disableButton}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default RegistrationForm;
