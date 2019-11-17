import {
  auth,
  googleProvider,
  facebookProvider,
  userDatabase
} from "./firebase";
import { GET_USER, USER_STATUS } from "./actionTYpes";
import { toastr } from "react-redux-toastr";

// log in with google
export const googleLogin = () => {
  return dispatch => {
    auth
      .signInWithPopup(googleProvider)
      .then(data => {
        const user = {
          displayName: data.user.displayName,
          uid: data.user.uid,
          photoURL: data.user.photoURL,
          email: data.user.email
        };
        userDatabase
          .child(user.uid)
          .child("info")
          .update({
            displayName: data.user.displayName,
            uid: data.user.uid,
            photoURL: data.user.photoURL,
            email: data.user.email
          });
      })
      .catch(err => console.log(err));
  };
};

//login wuth facebook

export const facebookLogin = () => {
  return dispatch => {
    auth
      .signInWithPopup(facebookProvider)
      .then(data => {
        const user = {
          displayName: data.user.displayName,
          uid: data.user.uid,
          photoURL: data.user.photoURL,
          email: data.user.email
        };
        userDatabase
          .child(user.uid)
          .child("info")
          .update({
            displayName: data.user.displayName,
            uid: data.user.uid,
            photoURL: data.user.photoURL,
            email: data.user.email
          });
      })
      .catch(err => console.log(err));
  };
};

// update USer info

export const updateProfile = (uid, info) => {
  return dispatch => {
    userDatabase
      .child(uid)
      .child("info")
      .update(info)
      .then(data => {
        toastr.success("Success", "Your profile has been updated");
      })
      .catch(err => {
        console.log(err);
      });
  };
};
// sign out
export const logOut = () => {
  return dispatch => {
    auth.signOut();
  };
};

// get user info
export const getUser = () => {
  return dispatch => {
    //show loading status before user get to login
    dispatch({
      type: USER_STATUS,
      payload: true
    });
    auth.onAuthStateChanged(user => {
      dispatch({
        type: GET_USER,
        payload: user
      });
      //show loading status before user get to login
      dispatch({
        type: USER_STATUS,
        payload: false
      });
    });
  };
};
