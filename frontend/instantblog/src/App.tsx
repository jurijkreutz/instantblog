import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Layout from './components/Layout'
import Blog from './components/Blog';
import About from './components/About';
import Login from './components/Login';

function App() {

  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    setUserLoggedIn(localStorage.getItem('token') != null);
  }, [])

  return (
    <>
    <BrowserRouter>
        <Routes>
              <Route path="/" element={<Layout userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />}>
                <Route index element={<Blog />} />
                <Route path="about" element={<About />}/>
                <Route path="login" element={<Login setUserLoggedIn={setUserLoggedIn}/>}/>
              </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
