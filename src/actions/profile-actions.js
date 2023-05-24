import { getAuth, updateProfile } from "firebase/auth";

function updateProfileSuccess(profileInfo) {
  return {
    type: "PROFILE-UPDATED",
    payload: profileInfo,
  };
}

function updateUserProfile(name, country, bio) {
  const auth = getAuth();
  const userInfo = {
    fullName: name,
    country: country,
    bio: bio,
  };
  return (dispatch) => {
    updateProfile(auth.currentUser, userInfo)
      .then(() => {
        dispatch(updateProfileSuccess(userInfo));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

function getUserProfile() {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    console.log(user);
  }
}

export { updateUserProfile, getUserProfile };
