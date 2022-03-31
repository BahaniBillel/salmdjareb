import { Box } from '@material-ui/core';
import { Routes, Route } from 'react-router-dom';
import Catergories from './pages/Catergories';
import Community from './pages/Community';
import Home from './pages/Home';
import Profile from './pages/Profile';
import WriteReviewPage from './pages/WriteReviewPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LogInAndSignUp from './pages/LogInAndSignUp';
import BranchList from './pages/BranchList';
import './App.scss';
import { makeStyles } from '@material-ui/core';
import Dashboard from './pages/Dashboard';
import { useLocation } from 'react-router-dom';
import LogIn from './components/Login';
import SignUp from './components/SignUp';

const useStyles = makeStyles((theme) => ({
  app: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      // padding: '.5rem 2rem',
      flexDirection: 'column',

      // width: '100%',
    },
  },
}));

function App() {
  const classes = useStyles();
  const location = useLocation();
  console.log(location.pathname);

  const ReturnNavigation = () => {
    if (location.pathname !== '/login') {
      return <Navigation />;
    }
  };

  return (
    <>
      <Box className={classes.app}>
        {/* {location.pathname !== '/logpage' ? <Navigation /> : null} */}
        {ReturnNavigation()}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/categories" element={<Catergories />} />
          <Route exact path="/categories/:id" element={<BranchList />} />
          <Route exact path="/profile/:id" element={<Profile />} />
          <Route exact path="/community" element={<Community />} />
          <Route exact path="/logInAndSignUp" element={<LogInAndSignUp />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/write-review" element={<WriteReviewPage />} />
          <Route exact path="/dashboard/:id" element={<Dashboard />} />
        </Routes>
      </Box>

      {/* {ReturnFooter()} */}
      {/* {location.pathname !== '/login' ? (
        <Footer />
      ) : location.pathname !== '/signup' ? (
        <Footer />
      ) : null} */}
    </>
  );
}

export default App;
