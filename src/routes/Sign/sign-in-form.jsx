import { useState, useContext } from "react";
import { SignInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await SignInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user)
      setFormFields(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password");
          break;
        case "auth/user-not-found":
          alert("No user found for this email");
          break;
        default:
          console.log(error);
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
      <h3>Sign In</h3>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="mt-2">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
            name="email"
            onChange={handleChange}
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
            name="password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
