import React from 'react'
import BgImg from "../assets/bgPicture.jpg";
import Logo from "../assets/logo.png";
import { BiDownArrow } from "react-icons/bi";
import img1 from "../assets/images/feature-1.png";
import img2 from "../assets/images/feature-2.png";
import img3 from "../assets/images/feature-3.png";
import img4 from "../assets/images/feature-4.png";
import { GrClose } from "react-icons/gr";
import { Link, useNavigate } from 'react-router-dom';




function FirstPage() {
    const navigate = useNavigate()

    return (
        <div className='text-white bg-black'>
            <div className='relative w-full h-screen  '>
                <img src={BgImg} alt="bg-img" className='opacity-40 absolute  w-full h-full object-cover hidden sm:block ' />
                <div className='absolute w-full  px-4 py-5 z-50'>
                    <nav className='flex items-center justify-between  px-36 '>
                        <img src={Logo} alt="" className='w-[150px] cursor-pointer' />
                        <div>

                            <button className=' outline-0 bg-transparent text-white px-4 py-2 text-xs rounded ml-2.5 cursor-pointer  border-solid  border-white border'>English   <BiDownArrow className="inline-flex  items-center bg-transparent  text-sm ml-2 " /></button>
                            <Link to='/login'>
                                <button className='border-0 outline-0 bg-red-500 text-white px-4 py-2 text-xs rounded ml-2.5 cursor-pointer '>Sign In   </button>
                            </Link>

                        </div>
                    </nav>
                    <div className=' absolute top-2/4 right-2/4 translate-x-2/4 translate-y-2/4  align-center mt-20 '>
                        <h1 class="max-w-[650px] text-6xl font-bold leading-70">Unlimited movies, TV shows, and more</h1>
                        <h3 className='font-[400] mb-[20px]'>Watch anywhere. Cancel anytime.</h3>
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        <form className='bg-white rounded-[4px] flex align-center mt-[30px] overflow-hidden' >
                            <input className='text-black flex-1 border-0 outline-0 ml-[20px]' type="email" placeholder='Email address' required />
                            <button className='bg-red-500 border-0 outline-0 text-base px-[15px] py-[13px] pointer' type='submit'>Get Started</button>
                        </form>
                    </div>
                </div>
            </div >

            <div className=' mx-auto my-0 px-3.5 py-[5%] text-[22px]'>
                <div className='flex w-full items-center flex-wrap px-[50px] py-0'>
                    <div className='basis-2/4 mb-[20px]'>
                        <h2 className='text-[50px] font-[600] mb-[20px]'>Enjoy on your TV.</h2>
                        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div>
                    <div className='basis-2/4 mb-[20px]'>
                        <img src={img1} alt="" className='block w-[85%] m-auto' />
                    </div>
                </div>

                <div className='flex w-full items-center flex-wrap px-[50px] py-0'>
                    <div className='basis-2/4 mb-[20px]'>
                        <img src={img2} alt="" className='block w-[90%] m-auto' />
                    </div>
                    <div className='basis-2/4 mb-[20px]'>
                        <h2 className='text-[50px] font-[600] mb-[20px]'>Download your shows to watch offline</h2>
                        <p>Save your favorites easily and always have something to watch.</p>
                    </div>
                </div>

                <div className='flex w-full items-center flex-wrap px-[50px] py-0'>
                    <div className='basis-2/4 mb-[20px]'>
                        <h2 className='text-[50px] font-[600] mb-[20px]'>Watch everywhere</h2>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    <div className='basis-2/4 mb-[20px]'>
                        <img src={img3} alt="" className='block w-[90%] m-auto' />
                    </div>
                </div>

                <div className='flex w-full items-center flex-wrap px-[50px] py-0'>
                    <div className='basis-2/4 mb-[20px]'>
                        <img src={img4} alt="" className='block w-[90%] m-auto' />
                    </div>
                    <div className='basis-2/4 mb-[20px]'>
                        <h2 className='text-[50px] font-[600] mb-[20px]'>Create profiles for kids</h2>
                        <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                    </div>
                </div>
            </div>

            <div className='py-[70px] px-[30px] '>
                <h1 className='text-center text-[50px]'>Frequently Asked Questions</h1>

                <div className='max-w-[635px] text-[26px] mx-auto my-0'>
                    <div className='relative bg-faqbg py-[30px] px-[30]  border-b border-solid border-black pointer block'>
                        <input type="checkbox" id='q1' />
                        <label className='' for="q1" ></label>
                        <div className='py-[10px] px-[30px] border-b border-solid border-black pointer block'>What is Netflix?
                            <svg className='absolute w-[30px] h-[30px] top-[20px] right-[30px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div className='p-[30px]'>
                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

                            You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                        </div>
                    </div>
                </div>
            </div>
        </div >



    )
}

export default FirstPage