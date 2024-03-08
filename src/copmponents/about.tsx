import React from 'react'
import { FaEnvira } from "react-icons/fa6";
import { CgCommunity } from "react-icons/cg";
import { FaConnectdevelop } from "react-icons/fa";
const About = () => {
    return (
        <div className='text-black w-full p-5'>
            <h1 className='text-5xl  font-bold py-10  text-center '>What We do</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 w-[80%] m-auto'>
                <div className='bg-white h-[d20rem] w-[23rem] p-2 rounded-md shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                 <div className='flex justify-between p-2' >
                     <h1 className='text-2xl  font-medium pt-3 text-center text-black'>Environmental conservation activities</h1>
                     {/* <FaEnvira size={100} color="#fe7f4c"/> */}
                     <div className='bg-[#07847f] p-3 mt-1 rounded-full'> <FaEnvira color='white' className='h-16 w-16'/></div>
                     </div>  
                    <p className='text-[#000000bd] p-3'>We champion and support community based climate change adaptation initiatives, biodiversity conservation, renewable energy promotion, and forestry management projects</p>
                </div>
                <div className='bg-white h-[2d0rem] w-[23rem] p-2 rounded-md shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                 <div className='flex justify-between p-2' >
                     <h1 className='text-2xl  font-medium pt-3 text-center text-black'> Economic development activities</h1>
                     {/* <FaEnvira size={100} color="#fe7f4c"/> */}
                     <div className='bg-[#07847f] p-3 mt-1 rounded-full'> <CgCommunity color='white' className='h-16 w-16'/></div>
                     </div>  
                    <p className='text-[#000000bd] p-3'>We are engaged in facilitating grassroots initiatives aimed at women and youth empowerment through capacity building and entrepreneurship, for income and livelihoods security, wealth creation and economic growth, hence contributing towards resilient communities'</p>
                </div>
                <div className='bg-white h-[2d0rem] w-[23rem] p-2 rounded-md shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                 <div className='flex justify-between p-2' >
                     <h1 className='text-2xl  font-medium pt-3 text-center text-black'>Social development activities</h1>
                     {/* <FaEnvira size={100} color="#fe7f4c"/> */}
                     <div className='bg-[#07847f] p-3 mt-1 rounded-full'> <FaConnectdevelop color='white' className='h-16 w-16'/></div>
                     </div>  
                    <p className='text-[#000000bd] p-3'>We are engaged in facilitating grassroots initiatives aimed at women and youth empowerment through capacity building and entrepreneurship, for income and livelihoods security, wealth creation and economic growth, hence contributing towards resilient communities'</p>
                </div>

            </div>
            <div>
            <h1 className='text-5xl  font-bold py-10  text-center '>Our Partners</h1>
<div className='w-[80%] m-auto grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-5'>
<div className="max-w-sm bg-white border  border-gray-200 rounded-lg shadow hover:bg-[#07847f] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">

        <img className="rounded-t-lg w-full" src="https://www.rgb.rw/index.php?eID=dumpFile&t=f&f=16642&token=e32867996bd480c554695c358ee3d605df6e381d" alt="" />
   
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-white  h-32">Rwanda Governance Board</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 hover:text-white"></p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#fe7f4c] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#fe7f4c] dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-[#07847f] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">

        <img className="rounded-t-lg w-full h-36 px-10 pt-2" src="https://www.gov.rw/index.php?eID=dumpFile&t=f&f=1686&token=bbbb57e8d97711973cf02637df254ced6259f00f" alt="" />
   
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-white  h-32">Republic of Rwanda</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 hover:text-white"></p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#fe7f4c] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#fe7f4c] dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-[#07847f] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">

        <img className="rounded-t-lg w-full h-36s px-10 pt-3" src="https://unsdg.un.org/themes/custom/theme_server/assets/images/unsdg-logo-en.svg" alt="" />
   
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-white  h-32">United Nations Rwanda unity Diversity</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 hover:text-white"></p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#fe7f4c] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#fe7f4c] dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-[#07847f] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">

        <img className="rounded-t-lg w-full bg-gray-300 hover:bg-[#07847f]" src="https://www.rema.gov.rw/fileadmin/user_upload/icons/logo-rema.svg" alt="" />
   
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-white  h-32">Rwanda Environment Management Authority</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 hover:text-white"></p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#fe7f4c] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#fe7f4c] dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-[#07847f] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">

        <img className="rounded-t-lg w-full h-36" src="https://www.undp.org/sites/g/files/zskgke326/files/2022-04/undp-logo-blue.svg" alt="" />
   
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-white  h-32">United Nations Development Program</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 hover:text-white"></p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#fe7f4c] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#fe7f4c] dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
</div>
            </div>
        </div>
    )
}

export default About