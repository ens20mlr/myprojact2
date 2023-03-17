import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Meny from "./pages/Meny"
import Index from "./pages/Index"
import Login from "./pages/Login"
import Movie from "./pages/Movie"
import Personal from "./pages/Personal"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";



function App() {
      return (
      
        <div>
          <Router>
          <Header/>
            <Routes>
              <Route exact path = "/" element = {<Index/>}/>
              <Route path = "/Meny" element = {<Meny/>}/>
              <Route path = "/Login" element = {<Login/>}/>
              <Route path = "/Movie" element = {<Movie/>}/>
              <Route path = "/Personal" element = {<Personal/>}/>
            </Routes>
            <Footer/>
          </Router>
        </div>
      );
    }

export default App;
