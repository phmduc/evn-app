import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Switch } from 'react-router';
import Home from './pages/home/home.js';
function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
