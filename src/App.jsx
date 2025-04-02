import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/user/home'
import UserAbout from './pages/user/about'
import Contact from './pages/user/contact'
import UserNotFound from './pages/user/notfound'
import UserLayout from './layout/user'
import AdminLayout from './layout/admin'
import Dashboard from './pages/admin/dashboard'
import AdminAbout from './pages/admin/about'
import AdminNotFound from './pages/admin/notfound'
import Blogs from './pages/admin/blogs'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<UserAbout />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<UserNotFound />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='about' element={<AdminAbout />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='*' element={<AdminNotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App