import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import Blog from './components/Blog';

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Blog />} />
              </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
