import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Feed from './components/Feed.jsx';
import Profile from './components/Profile.jsx';
import LoginForm from './components/LoginForm.jsx';
import SignupForm from './components/SignupForm.jsx';
import Post from './components/Post.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import PostForm from './components/PostForm.jsx'; 

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/form" element={<PostForm />} /> {}
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;