import React from 'react'
import images from '/src/assets/shatyamcreationlogo.jpg'
import { Link, NavLink } from "react-router-dom";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Dropdown from '../Categories/categories';

export default function Header() {



    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-gray-100 border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-evenly md:justify-between items-center mx-auto max-w-screen-xl">
                    <img
                        className='w-20 lg:w-20  rounded-lg shadow-lg object-cover'
                        src={images}
                        alt="Logo"
                    />

                    {/* <div className='flex bg-gray-100 item-center rounded-lg overflow-hidden w-4/6 lg:w-6/12 lg:ml-16 border-spacing-0 shadow-sm shadow-black'>
                        <input
                            type="text"
                            className='outline-none w-full py-1 px-3'
                            placeholder='Search...'
                        />
                        <button
                        className='outline-none max-w-full bg-blue-700 text-white px-3 py-0.5 shrink-0'>
                            <SearchOutlinedIcon />
                        </button>
                    </div> */}
                    {/* <Dropdown /> */}
                    {/* <div className='ml-5 hidden md:block'>
                        <button>
                            <ShoppingCartOutlinedIcon />
                        </button> 
                        <label htmlFor="">  Cart</label>
                    </div> */}

                    <div 
                        id="mobile-menu-2" >
                        <ul className="flex flex-row mt-8 gap-2 lg:gap-5 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li> 

                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact-us
                                </NavLink>
                            </li>                  
                        </ul>
                    </div>
                    <div className='mr-4 hidden md:block'>
                        <button>
                            <ShoppingCartOutlinedIcon />
                        </button> 
                        <label htmlFor="">  Cart</label>
                    </div>
                </div>
            </nav>
        </header>
    );
}
