import React from "react";

import { signInWithGooglePopup, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogle = async () => {
    const user = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user)
    //console.log(response);
  };
  return (
    <div>
      <h1>Sign in page</h1>
      <button className="btn btn-primary" onClick={logGoogle}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
