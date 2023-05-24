import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function loginSuccess(userObj) {
  return {
    type: "LOGIN-SUCCESS",
    payload: userObj,
  };
}

function setUserLogin(email, pass) {
  const auth = getAuth();
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        dispatch(loginSuccess(userCredential.user));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export { setUserLogin };
