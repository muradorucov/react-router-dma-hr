import React from 'react'
import { Link } from 'react-router'

function Aside() {
    return (
        <div>
            <nav>
                <Link to="/admin/dashboard">Dashboard</Link>
                <Link to="/admin/blogs">Blogs</Link>
                <Link to="/admin/about">About</Link>
            </nav>
        </div>
    )
}

export default Aside