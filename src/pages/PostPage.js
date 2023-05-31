import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import moment from "moment";
import Navbar from "../components/Navbar";
import CommentBox from "../components/CommentBox";
import {
  addNewComment,
  fetchCommentArr,
  clearCommentArr,
} from "../actions/comment-actions";

function PostPage() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const postObj = useSelector((state) => state && state.postArr);
  const commentArrStore = useSelector((state) => state && state.commentArr);

  const [currentPost, setCurrentPost] = useState({});
  const [newComment, setNewComment] = useState("");
  const [commentArr, setCommentArr] = useState([]);

  function handleAddComment() {
    dispatch(addNewComment(newComment, postId));
    setNewComment("");
  }

  useEffect(() => {
    if (postObj.length > 0) {
      let post = postObj.filter((post) => post.postId === postId);
      if (post[0].data.comments !== undefined) {
        dispatch(fetchCommentArr(post[0].data.comments));
      } else {
        dispatch(clearCommentArr());
      }
      setCurrentPost(post[0]);
    }
  }, [postObj]);

  useEffect(() => {
    if (commentArrStore.length !== 0) {
      console.log(commentArr);
      setCommentArr(commentArrStore);
    } else {
      setCommentArr([]);
    }
  }, [commentArrStore]);

  if (Object.keys(currentPost).length === 0) {
    return (
      <div style={{ backgroundColor: "#000000", minHeight: "100vh" }}>
        <Navbar />
        <Container sx={{ color: "three.main" }}>Loading...</Container>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#000000", minHeight: "100vh" }}>
      <Navbar />
      <Container>
        <Box
          sx={{
            border: "2px solid white",
            borderRadius: "20px",
            p: "25px",
            mb: "15px",
            mt: "30px",
          }}
        >
          <Typography
            sx={{ color: "white", fontWeight: "bold", mb: "5px" }}
            variant="h6"
          >
            {currentPost.data.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              mb: "20px",
            }}
          >
            <Typography sx={{ color: "white" }} variant="caption">
              Created by: {currentPost.data.userId}
            </Typography>
            <Typography sx={{ color: "white" }} variant="caption">
              {moment.unix(currentPost.data.timestamp).format("lll")}
            </Typography>
          </Box>
          <Typography sx={{ color: "white" }} variant="body1">
            {currentPost.data.body}
          </Typography>
        </Box>
        <Box
          sx={{
            border: "2px solid white",
            borderRadius: "20px",
            p: "25px",
            mb: "15px",
            mt: "30px",
          }}
        >
          <Typography sx={{ color: "white", mb: "5px" }}>Comments</Typography>
          <TextField
            type="text"
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderWidth: "1px",
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderWidth: "1px",
                  borderColor: "white",
                },
              },
              "& .MuiInputBase-input": {
                color: "white",
              },
              mb: "10px",
            }}
            multiline
            rows={4}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <Button
            variant="contained"
            size="small"
            sx={{ backgroundColor: "four.main", color: "one.main", mb: "20px" }}
            onClick={() => handleAddComment()}
          >
            Add Comment
          </Button>
          {commentArr.length !== 0 &&
            commentArr.map((comment) => (
              <CommentBox
                userId={comment.userId}
                timestamp={comment.timestamp.seconds}
                body={comment.body}
              />
            ))}
        </Box>
      </Container>
    </div>
  );
}

export default PostPage;
