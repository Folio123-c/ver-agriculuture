import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface navProps{
    navClass:any,
    linkClassName:any,
    onClick?:any,
}
const Nav = ({navClass ,linkClassName}:navProps) =>(
    <NavComponent navClass={navClass}
                  linkClassName = {linkClassName}
    />
);
const navElement=[
    {
        "tittle":"Home",
        "link":"/"
    },
    {
        "tittle":"About",
        "link":"/home/about"
    },
    {
        "tittle":"Contact",
        "link":"/home/contact"
    },
    {
        "tittle":"Gallery",
        "link":"/home/gallery"
    },
    {
        "tittle":"Project",
        "link":"/home/project"
    },
]
export const NavComponent = ({onClick, navClass, linkClassName}:navProps)=>(
  <nav className={navClass}>
      {/* <div className='w-[20%] bg-[#07847f] pl-10'>
                <img src="https://verrwanda.org/images/logo-removebg-preview.png" alt="logo" />
            </div> */}
      {navElement.map(section=>
        <Link to={section.link}
            //   smooth={true}
              className={linkClassName}
              onClick={onClick}>
            {section.tittle}
        </Link>
      )}
      <div className='lg:flex gap-10 mr-10 my-5 '>
                <button className='bg-[#fe7f4c] text-white w-[10rem] h-12'>Donate</button>
                <div className='lg:flex gap-3 '><div className='bg-[#07847f] p-3 mt-1 rounded-full h-10 w-10 lg:block hidden'> <FiPhoneCall color='white' /></div>
                <div>
                    <h1 className='italic text-[#40414186] text-sm lg:pt-0 pt-10'>Call Us AnyTime</h1>
                <h1>+0788704505</h1>
                </div>
                </div>
                </div>
  </nav>
)
export default Nav;