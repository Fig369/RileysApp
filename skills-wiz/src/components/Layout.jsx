import React from "react";
import { Link, Outlet } from "react-router-dom";




const Layout = ()=> {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/skills'>Skills</Link>
                    </li>
                    <li>
                        <Link to='/resources'>Resources</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout;