import { CssBaseline, Typography, Link, Box } from "@mui/material";
import "./App.scss";
import logo from "./assets/kmlogohd_transparent.png";

const App = () => {
  return (
    <div className="App">
      <Link href="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <Box height={1000}>Hi</Box>
    </div>
  );
};

export default App;
