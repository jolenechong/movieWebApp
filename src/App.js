import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { HashRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Profile from "./components/pages/Profile";
import Modal from './components/ModalMovie'
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/add" component={Modal} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
