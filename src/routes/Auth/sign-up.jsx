import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }

    try {
      const user = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocFromAuth(user, { displayName });
      setFormFields(defaultFormFields);

      // await createAuthUserWithEmailAndPassword(email, password).then(
      //   (userCredential) => console.log(userCredential)
      // );
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already exist.");
      } else {
        console.log("User Creation error: ", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div>
      <h3>Don't have an account?</h3>
      <h5>Sign Up now!</h5>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group">
          <label className="mt-2">Display Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
          />
        </div>
        <div className="form-group">
          <label className="mt-2">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
        </div>
        <div className="form-group">
          <label className="mt-2">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
        </div>
        <div className="form-group">
          <label className="mt-2">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mt-2"
          style={{ width: "45%" }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
