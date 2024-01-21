import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Artist from '../pages/Artist';
import Community from '../pages/Community';
import Login from '../pages/Login';
import Mypage from '../pages/Mypage';
import Home from '../pages/Home';
import Layout from '../components/Common/Layout';
import Signup from '../pages/Signup';
import ScrollToTop from '../components/Common/ScrollToTop';
import ProtectedRoute from '../components/Common/ProtectedRoute';

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/community/:artistName" element={<Community />} />
            <Route path="/mypage" element={<Mypage />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/artist/:artistName" element={<Artist />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
