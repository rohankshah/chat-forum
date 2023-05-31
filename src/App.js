import { BrowserRouter, Route, Redirect } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainFeed from "./pages/MainFeed";
import ProfilePage from "./pages/ProfilePage";
import PostPage from "./pages/PostPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const loggedIn = useSelector((state) => state && state.loggedIn);

  useEffect(() => {
    console.log(loggedIn);
  }, [loggedIn]);

  return (
    <BrowserRouter>
      <Route exact path="/">
        {loggedIn ? <Redirect to="/mainfeed" /> : <LoginPage />}
      </Route>
      <Route path="/mainfeed">
        {loggedIn ? <MainFeed /> : <Redirect to="/" />}
      </Route>
      <Route path="/profile">
        {loggedIn ? <ProfilePage /> : <Redirect to="/" />}
      </Route>
      <Route path="/posts/:postId">
        {loggedIn ? <PostPage /> : <Redirect to="/" />}
      </Route>
    </BrowserRouter>
  );
}

export default App;
