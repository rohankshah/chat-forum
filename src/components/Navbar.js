import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "four.main" }}>
          <Container>
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              ></Typography>
              <Button
                sx={{ color: "one.main" }}
                color="inherit"
                onClick={() => history.push("/mainfeed")}
              >
                FEED
              </Button>
              <Button
                sx={{ color: "one.main" }}
                color="inherit"
                onClick={() => history.push("/profile")}
              >
                PROFILE
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
