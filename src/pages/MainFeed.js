import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Container, Modal } from "@mui/material";

import Navbar from "../components/Navbar";
import ModalBox from "../components/ModalBox";
import PostTemplate from "../components/PostTemplate";
import { fetchAllPosts } from "../actions/post-actions";

function MainFeed() {
  const dispatch = useDispatch();
  const postArr = useSelector((state) => state && state.postArr);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  useEffect(() => {
    setPosts(postArr);
  }, [postArr]);

  return (
    <div style={{ backgroundColor: "#000000", minHeight: "100vh" }}>
      <Navbar />
      <Container>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: "30px",
          }}
        >
          <Button variant="outlined">Filter</Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "four.main", color: "one.main" }}
            onClick={handleOpen}
          >
            Create Post
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ModalBox close={handleClose} />
          </Modal>
        </Box>
        <Box>
          {/* post start  */}
          {posts.length > 0 &&
            posts.map((post) => (
              <PostTemplate
                title={post.data.title}
                body={post.data.body}
                timestamp={post.data.timestamp.seconds}
                userId={post.data.userId}
                postId={post.postId}
                key={post.postId}
              />
            ))}
        </Box>
      </Container>
    </div>
  );
}

export default MainFeed;
