import logo from './logo.svg';
import './App.css';
import { Switch } from 'react-router';
import { useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home.js';
import Profile from './pages/profile/profile.js';
import Contact from './pages/Contact/Contact';
import Category from './pages/category/category';
import AboutUs from './pages/aboutus/aboutus';
import AccountDetail from './pages/accountdetail/accountdetail';
import Authen from './pages/authen/authen';
import Blogs from './pages/blogs/blogs';
import Blogdetail from './pages/blogdetail/blogdetail';
import Changeauthen from './pages/changeauthen/changeauthen';
import DailyCheck from './pages/dailycheck/dailycheck';
import Notification from './pages/notification/notification';
import NotifyDetail from './pages/notifydetail/notifydetail';
import OurProject from './pages/ourproject/ourproject';
import PaymentMethod from './pages/paymentmethod/paymentmethod';
import PersonalSetting from './pages/personalsetting/personalsetting';
import Qrcode from './pages/qrcode/qrcode';
import RealNameAuthen from './pages/realnameauthen/realnameauthen';
import Recharge from './pages/recharge/recharge';
import Record from './pages/record/record';
import Shopping from './pages/shopping/shopping';
import Vip from './pages/vip/vip';
import Withdraw from './pages/withdraw/withdraw';

function ProfileRoute() {
  const isLoggedIn = sessionStorage.getItem('user_id');
  const [path, setPath] = useState(window.location.pathname);
  return (
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/record/*" element={<Record />} />
        <Route path='/ourproject/*' element={< OurProject/>} />
        <Route path='/paymentmethod/*' element={< PaymentMethod/>} />
        <Route path='/PersonalSetting/*' element={< PersonalSetting/>} />
        <Route path='/Qrcode/*' element={< Qrcode/>} />
        <Route path='/RealNameAuthen/*' element={< RealNameAuthen/>} />
        <Route path='/Recharge/*' element={< Recharge/>} />
        <Route path='/Record/*' element={< Record/>} />
        <Route path='/Shopping/*' element={< Shopping/>} />
        <Route path='/Vip/*' element={< Vip/>} />
        <Route path='/Withdraw/*' element={< Withdraw/>} />
        <Route path='/accountdetail/*' element={<AccountDetail />} />
        <Route path='/changeauthen/*' element={<Changeauthen />} />
        <Route path='/dailycheck/*' element={<DailyCheck />} />
      </Routes>
  );
}

function App() {

  const isLoggedIn = sessionStorage.getItem('user_id');
  const [path, setPath] = useState(window.location.pathname);

  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/profile/*' element={isLoggedIn ? <ProfileRoute /> : <Authen/>} />
        <Route path='/category' element={<Category />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/authen' element={<Authen />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogdetail' element={<Blogdetail />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/notifydetail' element={<NotifyDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
