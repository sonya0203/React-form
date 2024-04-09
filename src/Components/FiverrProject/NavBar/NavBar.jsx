import React, { useEffect, useState } from 'react'
import "./NavBar.scss"
import logo from "../logo/logo1.jpg"
import { Link, useLocation } from 'react-router-dom'
function NavBar() {
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive)
        return () => {
            window.removeEventListener("scrolli", isActive)
        }
    }, [])
    const currentUser = {
        id: 1,
        username: "sanjay",
        isSeller: true
    }
    const { pathname } = useLocation()

    return (<>
        <div className={active || pathname != "/" ? "navbar active" : 'navbar'}>
            <div className='container'>
                <div className='logo'>
                    <Link to='/' className='Links' >
                        <span className='title'>fiverr</span>
                    </Link>
                    <span className='dot'>.</span>
                </div>
                <div className='navLinks'>
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign In</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button className='buttonNav'>Join</button>}
                    {currentUser && (
                        <div className='user' onClick={() => { setOpen(!open) }}>
                            <img className='imgNav' src={logo}></img>
                            <span>{currentUser?.username}</span>
                            {open && (<div className='options'>
                                {currentUser?.isSeller && (
                                    <>
                                        <Link to='gigs' className='Links'>Gig</Link>
                                        <Link to='add' className='Links'>Add New</Link>
                                    </>)}
                                <Link to='orders' className='Links'>Order</Link>
                                <Link to='messages' className='Links'>Messages</Link>
                                <Link to='mygigs' className='Links'>My Gigs</Link>

                                <span>LogOut</span>
                            </div>)}

                        </div>
                    )

                    }

                </div>
            </div>
            {(active || pathname != "/") && (
                <>
                    <hr ></hr>
                    <div className="menuNavbar">
                        <Link to='/' className='Links'>Graphics & Design</Link>
                        <Link to='/' className='Links'>Video & animation</Link>
                        <Link to='/' className='Links'>Writing & Translation</Link>
                        <Link to='/' className='Links'>Al Services </Link>
                        <Link to='/' className='Links'>Digital Marketing</Link>
                        <Link to='/' className='Links'>Music& Audio</Link>
                        <Link to='/' className='Links'>Programming & Tech</Link>
                        <Link to='/' className='Links'>Business</Link>
                        <Link to='/' className='Links'>LifeStyle</Link>
                    </div></>)}
            <hr />
        </div>






    </>







    )



}

export default NavBar