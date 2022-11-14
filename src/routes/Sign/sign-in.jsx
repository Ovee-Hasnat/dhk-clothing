import React from "react";

import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "./sign-up";
import SignInForm from "./sign-in-form";

const SignIn = () => {
  const logGoogle = async () => {
    const user = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
    //console.log(response);
  };
  return (
    <div>
      <div className="row">
        <div className="col-sm-6 p-2 mb-2">
          <div style={{ width: "60%" }}>
            <SignInForm />
            <button className="btn btn-secondary mt-2" onClick={logGoogle}>
              Sign in with Google
            </button>
          </div>
        </div>
        <div className="col-sm-6 p-2">
          <div style={{ width: "60%" }}>
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
