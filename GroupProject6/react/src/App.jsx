import { useState } from "react";
import './index.css';


function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let isFormValid = true;

    if (firstName === "") {
      setFirstNameError("First name required");
      isFormValid = false;
    } else {
      setFirstNameError("");
    }

    if (lastName === "") {
      setLastNameError("Last name required");
      isFormValid = false;
    } else {
      setLastNameError("");
    }

    if (email === "") {
      setEmailError("Email is required");
      isFormValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Email is invalid");
      isFormValid = false;
    } else {
      setEmailError("");
    }

    if (password === "") {
      setPasswordError("Password is required");
      isFormValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password should be at least 8 characters ");
      isFormValid = false;
    } else {
      setPasswordError("");
    }

    if (confirmPassword === "") {
      setConfirmPasswordError("Confirm password is required");
      isFormValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords Not matched");
      isFormValid = false;
    } else {
      setConfirmPasswordError("");
    }

    

    
    if (isFormValid) {
      console.log(`First Name: ${firstName}`);
      console.log(`Last Name: ${lastName}`);
      console.log(`Email: ${email}`);
      console.log(`Password: ${password}`);
      console.log(`Confirm Password: ${confirmPassword}`);
      alert("Form submitted successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="form-container">
      <h1>FORM VALIDATION</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        {firstNameError && <div className="error">{firstNameError}</div>}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        {lastNameError && <div className="error">{lastNameError}</div>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {emailError && <div className="error">{emailError}</div>}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {passwordError && <div className="error">{passwordError}</div>}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {confirmPasswordError && (
          <div className="error">{confirmPasswordError}</div>
        )}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
