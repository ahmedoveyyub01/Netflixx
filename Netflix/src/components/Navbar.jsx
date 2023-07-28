import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from "../context/AuthContext";
import Logo from "../assets/logo.png"
import { BsSearch } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { TbTransferIn } from "react-icons/tb";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { BiHelpCircle } from "react-icons/bi";
import { GoSignOut } from "react-icons/go";
import bg from "../assets/images/header-image.png";
import SearchInput from './SearchInput';
import MainContext from '../useContext/MainContext';

function Navbar() {
    const { user, logOut } = UserAuth()
    const navigate = useNavigate()
    const { setSearchVal } = useContext(MainContext);

    const [dropDown, setDropDown] = useState(true)
    const handleDropDown = () => {
        setDropDown(!dropDown)
    }

    const [clicked, setClicked] = useState(true)
    const handleClicked = () => {
        setClicked(!clicked)
    }

    const resetSearchVal = () => {
        setSearchVal('');
    }

    const handleLogout = async () => {
        try {
            await logOut()
            navigate("/login")
        } catch (error) {
            console.log(error);
        }
    }


    const [navbarScroll, setNavbarScroll] = useState('')

    const handleScrollAlt = () => {
        const scrollbar = window.scrollY;
        if (scrollbar > 0) {
            setNavbarScroll("bg-bgcolor opacity-80 ")
        }
        else {
            setNavbarScroll("")
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScrollAlt);
        return () => window.removeEventListener("scroll", handleScrollAlt);
    }, []);



    return (
        <div className={` head  ${navbarScroll} `} >
            <div className='flex items-center space-x-2 md:space-x-10 '>
                <Link to="/">
                    <img onClick={resetSearchVal} src={Logo} alt="logo" width={100} height={100} className=' cursor-pointer object-contain' />
                </Link>
                <ul className='hidden space-x-4 md:flex  '>
                    <li className='headerLink'>Home</li>
                    <li className='headerLink'>Tv Shows</li>
                    <li className='headerLink'>Movies</li>
                    <li className='headerLink'>Latest</li>
                    <Link to="/list">
                        <li className='headerLink'>My List</li>
                    </Link>
                    <li className='headerLink'>Browse by Languages</li>
                </ul>


                {
                    <div className='text-white'>
                        {

                            dropDown ? (<div className='flex items-center'>
                                <ul onClick={handleDropDown} className='flex md:hidden' >
                                    <li >Browse</li>
                                </ul>
                                {/* <IoMdArrowDropdown onClick={handleDropDown} className='my-0 mx-2 cursor-pointer' /> */}

                            </div>)
                                : (<div className='flex items-center'>
                                    <li onClick={handleDropDown} className='flex md:hidden' >
                                        <span >Browse</span>
                                    </li>
                                    {/* <IoMdArrowDropup onClick={handleDropDown} className='my-0 mx-2 cursor-pointer' /> */}

                                    <div className=' absolute left-4  top-[70px]   rounded'>
                                        <div className='min-w-[200px] min-h-[200px] text-center bg-black'>
                                            <ul className='py-5 px-5' >
                                                <li className='headerLink'>Home</li>
                                                <li className='headerLink'>Tv Shows</li>
                                                <li className='headerLink'>Movies</li>
                                                <li className='headerLink'>Latest</li>
                                                <Link to="/list">
                                                    <li className='headerLink'>My List</li>
                                                </Link>
                                                <li className='headerLink'>Browse by Languages</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>)
                        }



                    </div>
                }



            </div>


            <div className='flex items-center space-x-4 text-sm font-light '>
                <SearchInput className="h-6 w-6 " />

                <span className='flex max-md:hidden'>Kids</span>
                <IoMdNotifications className='my-0 mx-4 cursor-pointer' size={20} />

                <div className='text-white'>
                    {

                        clicked ? (<div className='flex items-center'>
                            <img onClick={handleClicked} src={bg} alt="bg" className='w-[30px] h-[30px] rounded object-cover cursor-pointer ' />
                            <IoMdArrowDropdown onClick={handleClicked} className='my-0 mx-2 cursor-pointer' />

                        </div>)
                            : (<div className='flex items-center'>
                                <div>
                                    <img onClick={handleClicked} src={bg} alt="bg" className='w-[30px] h-[30px] rounded object-cover cursor-pointer ' />
                                </div>
                                <IoMdArrowDropup onClick={handleClicked} className='my-0 mx-2 cursor-pointer' />

                                <div className=' absolute right-1  top-[70px]   rounded'>
                                    <div className='min-w-[200px] min-h-[200px] text-center bg-black/70'>
                                        <ul className='py-5 px-5' >
                                            <li className='py-3 flex items-center'> <FaPen className='mx-3' size={15} /> Manage Profiles</li>
                                            <li className='py-3 flex items-center'> <TbTransferIn className='mx-3' size={20} /> Transfer Profile</li>
                                            <li className='py-3 flex items-center'> <RiAccountPinCircleFill className='mx-3' size={20} /> Account</li>
                                            <li className='py-3 flex items-center'> <BiHelpCircle className='mx-3' size={20} /> Help Center</li>
                                            <Link to="/login">
                                                <li onClick={handleLogout} className='py-3  flex items-center'> <GoSignOut className='mx-3' size={20} /> Sign out of Netflix</li>
                                            </Link>

                                        </ul>
                                    </div>
                                </div>
                            </div>)
                    }



                </div>
            </div>







            {/* {
                user?.email ? <div>
                    <Link to="/account">
                        <button className='cursor-pointer text-neutral-50 mr-4'>Account</button>
                    </Link>

                    <button onClick={handleLogout} className='cursor-pointer bg-red-600 rounded-md px-4 py-2'>Log Out</button>

                </div> :
                    <div>
                        <Link to="/login">
                            <button className='cursor-pointer text-neutral-50 mr-4'>Sign In</button>
                        </Link>

                        <Link to="/signup">
                            <button className='cursor-pointer bg-red-600 rounded-md px-4 py-2'>Sign Up</button>
                        </Link>
                    </div>

            } */}

        </div >
    )
}

export default Navbar
