import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import Blog from './components/Blog';
import About from './components/About';
import Login from './components/Login';

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Blog />} />
                <Route path="about" element={<About />}/>
                <Route path="login" element={<Login />}/>
              </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
