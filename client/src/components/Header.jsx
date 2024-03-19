// import { Navbar } from 'flowbite-react'
// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Header() {
//     return (
//         <Navbar className='border-b-2'>
//             <Link to="/" className='self-centered whitestpace-nowrap text-sm:text:text-xl font-semibold dark:text-white'>
//                 <span className='px-2 py-1 bg-gradiant-to-r from-indigo-500 via-purple-500 rounded-lg text-white'> Jazim,s</span>
//                 Blog
//             </Link>
//         </Navbar>
//     )
// }
import { Button, Navbar, TextInput } from 'flowbite-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
    const path = useLocation().pathname;
    return (
        <Navbar className='border-b-2'>
            <Link to="/" className='self-center whitespace-nowrap text-sm xl:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Jazim's</span> Blog
            </Link>
            <form>
                <TextInput
                    type='text'
                    placeholder='search'
                    rightIcon={AiOutlineSearch}
                    className='hidden lg:inline'
                />
            </form>
            <Button className='w-12 h-10 lg:hidden' color="grey">
                <AiOutlineSearch />
            </Button>
            <div className='flex gap-2 md:order-2'>
                <Button className='w-12 h-10 hidden sm:inline' color="greyt" pill>
                    <FaMoon />
                </Button>
                <Link to="/signin">
                    <Button gradientDuoTone='purpleToBlue' pill>
                        Sign In
                    </Button>
                </Link>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link to='/' className='block' onClick={() => Navbar.Toggle()}>
                    <Navbar.Link active={path === "/"} as={'div'}>
                        Home
                    </Navbar.Link>
                </Link>
                <Link to='/about' className='block' onClick={() => Navbar.Toggle()}>
                    <Navbar.Link active={path === "/about"} as={'div'}>
                        About
                    </Navbar.Link>
                </Link>
                <Link to='/projects' className='block' onClick={() => Navbar.Toggle()}>
                    <Navbar.Link active={path === "/projects"} as={'div'}>
                        Projects
                    </Navbar.Link>
                </Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
