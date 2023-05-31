import {
  collection,
  addDoc,
  serverTimestamp,
  getDoc,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebaseConfig";

function addCommentSuccess(commentObj) {
  return {
    type: "ADD-COMMENT-SUCCESS",
    payload: commentObj,
  };
}

function fetchCommentSuccess(commentArr) {
  return {
    type: "FETCH-COMMENT-SUCCESS",
    payload: commentArr,
  };
}

function clearComments() {
  return {
    type: "CLEAR-COMMENTS",
  };
}

function addNewComment(comment, postId) {
  const userId = getAuth().currentUser.uid;
  return (dispatch) => {
    const postRef = doc(db, "posts", postId);
    const commentObj = {
      body: comment,
      timestamp: serverTimestamp(),
      userId: userId,
    };
    addDoc(collection(db, "comments"), commentObj).then((doc) =>
      updateDoc(postRef, {
        comments: arrayUnion(doc.id),
      }).then(() => dispatch(addCommentSuccess(commentObj)))
    );
  };
}

function fetchCommentArr(commentIdArr) {
  return (dispatch) => {
    let commentArr = [];
    let commentPromises = commentIdArr.map((commentId) => {
      return getDoc(doc(db, "comments", commentId)).then((data) =>
        commentArr.push(data.data())
      );
    });
    Promise.all(commentPromises)
      .then(() => dispatch(fetchCommentSuccess(commentArr)))
      .catch((e) => console.log(e));
  };
}

function clearCommentArr() {
  return (dispatch) => {
    dispatch(clearComments());
  };
}

export { addNewComment, fetchCommentArr, clearCommentArr };
