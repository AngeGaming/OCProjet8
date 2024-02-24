import React from "react"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Location from "./pages/location/Location.jsx";
import About from "./pages/about/About.jsx";
import Error from "./pages/Error404/Error404.jsx";
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/location/:id" element={<Location />} />
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
