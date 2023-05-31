import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebaseConfig";

function postCreationSuccess(post) {
  return {
    type: "POST-CREATE-SUCCESS",
    payload: post,
  };
}

function fetchAllPostsSuccess(postArr) {
  return {
    type: "POST-FETCH-SUCCESS",
    payload: postArr,
  };
}

function fetchAllPosts() {
  let postArr = [];
  return async (dispatch) => {
    const postObj = await getDocs(collection(db, "posts"));
    postObj.forEach((post) =>
      postArr.push({ postId: post.id, data: post.data() })
    );
    dispatch(fetchAllPostsSuccess(postArr));
  };
}

function createNewPost({ title, body }) {
  const auth = getAuth();
  const uid = auth.currentUser.uid;
  return (dispatch) => {
    const newPost = {
      title: title,
      body: body,
      userId: uid,
      timestamp: serverTimestamp(),
    };
    addDoc(collection(db, "posts"), newPost).then((doc) => {
      dispatch(postCreationSuccess({ data: newPost, postId: doc.id }));
    });
  };
}

export { createNewPost, fetchAllPosts };
