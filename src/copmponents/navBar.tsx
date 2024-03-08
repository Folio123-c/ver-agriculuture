import React from 'react'
import { ImFacebook } from "react-icons/im";
import { ImLinkedin2 } from "react-icons/im";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { SiInstagram } from "react-icons/si";
import { GrLocation } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className='w-full hidden lg:flex mt-20'>
            <div className='w-[10%] bg-[#07847f] pl-10'>
                <img src="https://verrwanda.org/images/logo-removebg-preview.png" alt="logo" />
            </div>
            <div className='w-[90%]'>
            <div className='bg-[#1e3737] p-2 text-[#ffffffc0] text-[13px] font-medium h-[4rem] w-full flex justify-between'>
                <div className='flex gap-5 ml-5'>
                <h1 >Connect with Ver</h1> 
                <div className='flex gap-3 mt-1'> <ImFacebook fill='white'/> <ImLinkedin2 fill='white'/> <TbBrandTwitterFilled fill='white'/> <SiInstagram fill='white'/></div>
                </div>
                <div className='flex gap-3'> <GrLocation fill='white' className='mt-2'/><div><h1>Rutsiro,Rwanda NR7,Kivumu Sector,​Western Province,</h1>
                    <h1 >Address:Binjunju cell, Tarafiporo Village</h1></div>
</div>
                
                <div className='flex gap-3'> <MdOutlineMail fill='white' className='mt-1'/><h1>info@verrwanda.org</h1></div>
                
            </div>
            {/* <div className='bg-white flex justify-between p-2 text-black text-lg font-medium h-[6rem] w-full'>
                <ul className='flex gap-10 text-[#8b9e9e] ml-20 mt-6'>
                 <Link to='/'>  <li>  Home</li></Link> 
                 <Link to='/home/about'>  <li>About</li></Link>
                 <Link to='/home/contact'>   <li>Contact</li></Link>
                 <Link to='/home/gallery'>  <li>Gallery</li></Link>
                 <Link to='/home/project'>  <li>Projects</li></Link>
                </ul>
                <div className='flex gap-10 mr-10 mt-5'>
                <button className='bg-[#fe7f4c] text-white w-[10rem] h-12'>Donate</button>
                <div className='flex gap-3 '><div className='bg-[#07847f] p-3 mt-1 rounded-full h-10 w-10'> <FiPhoneCall color='white'/></div>
                <div>
                    <h1 className='italic text-[#40414186] text-sm'>Call Us AnyTime</h1>
                <h1>+0788704505</h1>
                </div>
                </div>
                </div>

            </div> */}
            </div>
        </div>
    )
}

export default NavBar