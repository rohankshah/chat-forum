import { getAuth } from "firebase/auth";
import {
  doc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

function updateProfileSuccess(profileInfo) {
  return {
    type: "PROFILE-UPDATED",
    payload: profileInfo,
  };
}

function setProfile(profileInfo) {
  return {
    type: "PROFILE-SET",
    payload: profileInfo,
  };
}

function updateUserProfile(name, country, bio) {
  const auth = getAuth();
  const uid = auth.currentUser.uid;
  const q = query(collection(db, "profiles"), where("userId", "==", uid));
  const userInfo = {
    name: name,
    country: country,
    bio: bio,
  };
  return async (dispatch) => {
    getDocs(q)
      .then((data) => data.docs[0].id)
      .then((id) => doc(db, "profiles", id))
      .then((data) => updateDoc(data, userInfo))
      .then(() => dispatch(updateProfileSuccess(userInfo)));
  };
}

function getUserProfile() {
  const auth = getAuth();
  const uid = auth.currentUser.uid;
  return async (dispatch) => {
    try {
      const q = await query(
        collection(db, "profiles"),
        where("userId", "==", uid)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        dispatch(setProfile(doc.data()));
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export { updateUserProfile, getUserProfile };
