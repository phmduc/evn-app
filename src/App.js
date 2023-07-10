import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Switch } from 'react-router';
import Home from './pages/home/home.js';
import Profile from './pages/profile/profile.js';
import Contact from './pages/Contact/Contact';
import Category from './pages/category/category';
import AboutUs from './pages/aboutus/aboutus';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/category' element={<Category />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />

        

      </Routes>
   </BrowserRouter>
  );
}

export default App;
