import { Box } from '@material-ui/core';
import { Routes, Route, useParams } from 'react-router-dom';
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
import Register from './components/Register';
import ApiProviderIntegration from './pages/ApiProviderIntegration';
import Found from './pages/Found';
import Businesses from './pages/Businesses';
import About from './pages/About';

const useStyles = makeStyles((theme) => ({
  app: {
    width: '100vw',
  },
  footerSection: {
    marginTop: '20rem',
  },
}));

function App() {
  const classes = useStyles();
  const location = useLocation();
  console.log(location.pathname);

  const ReturnNavigation = () => {
    if (location.pathname !== '/Login' && location.pathname !== '/Register') {
      return <Navigation />;
    }
  };

  const ReturnFooter = () => {
    if (location.pathname !== '/Login' && location.pathname !== '/Register') {
      return <Footer />;
    }
  };

  return (
    <div className={classes.app}>
      <Box>
        {location.pathname === '/dashboard/1' ? null : ReturnNavigation()}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/categories" element={<Catergories />} />
          <Route exact path="/categories/:id" element={<BranchList />} />
          <Route exact path="/profile/:id" element={<Profile />} />
          <Route exact path="/blog" element={<Community />} />
          <Route exact path="/logInAndSignUp" element={<LogInAndSignUp />} />
          <Route exact path="/Login" element={<LogIn />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Review" element={<WriteReviewPage />} />
          <Route exact path="/dashboard/:id" element={<Dashboard />} />
          <Route exact path="/api" element={<ApiProviderIntegration />} />
          <Route exact path="/found" element={<Found />} />
          <Route exact path="/businesses" element={<Businesses />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Box>

      {location.pathname === '/dashboard/1' ? null : ReturnFooter()}
    </div>
  );
}

export default App;
