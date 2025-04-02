import React from 'react'
import Header from './header'
import Aside from './aside'
import Footer from './footer'
import { Outlet } from 'react-router'

function Layout() {
    return (
        <>
            <Header />
            <Aside />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout