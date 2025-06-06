import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Outlet } from 'react-router'

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout