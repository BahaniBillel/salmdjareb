import { Box } from "@material-ui/core";
import { Routes, Route } from "react-router-dom";
import Catergories from "./pages/Catergories";
import Community from "./pages/Community";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import WriteReviewPage from "./pages/WriteReviewPage";
import Navigation from "./components/Navigation";
import LogInAndSignUp from "./pages/LogInAndSignUp";
import BranchList from "./pages/BranchList";
import "./App.scss";

function App() {
  return ( 
    <Box className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/categories" element={<Catergories />} />
        <Route exact path="/categories/:id" element={<BranchList />} />
        <Route exact path="/profile/:id" element={<Profile />} />
        <Route exact path="/community" element={<Community />} />
        <Route exact path="/signin" element={<LogInAndSignUp />} />
        <Route exact path="/write-review" element={<WriteReviewPage/>} />
      </Routes>
    </Box>
  );
}

export default App;
