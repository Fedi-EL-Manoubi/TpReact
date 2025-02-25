import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Feed from './components/Feed.jsx';
import Profile from './components/Profile.jsx';
import LoginForm from './components/LoginForm.jsx'; // Importez LoginForm
import SignupForm from './components/SignupForm.jsx'; // Importez SignupForm
import Post from './components/Post.jsx';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LoginForm />} /> {/* Route pour le login */}
          <Route path="/signup" element={<SignupForm />} /> {/* Route pour le signup */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;