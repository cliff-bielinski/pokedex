import About from '../components/about';
import Contact from '../components/contact';
import Home from '../components/home';
import Navbar from '../components/navbar';
import Title from '../components/title';

import { Routes, Route } from "react-router-dom";

function Main() {
  return (
    <div>
      <Title />
      <Navbar></Navbar>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
    </div>
  );
}

export default Main;