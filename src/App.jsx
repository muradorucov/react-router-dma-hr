import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import NotFound from './pages/notfound'
import Layout from './layout'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App