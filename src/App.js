import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Home/Services/Services';
import Login from './Components/Login/Login';
import AuthProvider from './Components/Context/Context';
import Additems from './Components/AddItems/Additems';


function App() {

  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/aboutus">
              <About></About>
            </Route>
            <Route path="/services/:id">
              <Services></Services>
            </Route>
            <Route path="/additems">
              <Additems></Additems>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
