import React from 'react'
import { Carousel } from 'antd';
import "./header.css"
const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    // background: '#364d79',
  };
const Header = () => {
  return (
    <div className='w-full flex'>
      <div className='w-[40%] h-[80vh] hidden sm:block bg-[#1e3737e7]'>
        <h1 className='md:text-4xl lg:text-6xl xl:text-8xl text-white font-bold text-center pt-32 xl:pt-14'>Vie et Environne- ment Rwanda</h1>
        <button className='bg-[#fe7f4c] text-white w-[10rem] h-12 ml-20 lg:ml-40 mt-20 xl:mt-10'>Donate</button>
      </div>
    <div className='sm:w-[60%] w-full  h-[80vh]'>
        <Carousel autoplay>
    <div className="sliderTwo">
    <h3 className='text-6xl text-white font-bold pt-[12rem]  text-center'>We champion and support community</h3>
      <p className='text-xl text-white font-medium pt-10  text-center italic'>"Stimulate community based solutions for environmental and livelihood challenges."</p>
      {/* <img className='w-full h-full'  src="" alt="" /> */}
    </div>
    <div className="sliderThree">
    <h3 className='text-6xl text-white font-bold pt-[12rem]  text-center'>Vie et Environnement Rwanda</h3>
      <p className='text-xl text-white font-medium pt-10  text-center'>“Working towards prosperous communities that conserve their environment”..</p>
    </div>
    <div className="sliderFour">
      <h3 className='text-6xl text-white font-bold pt-[12rem]  text-center'>Environmental conservation activities</h3>
      <p className='text-xl text-white font-medium pt-10  text-center'>Ver focus on Environmental protection and conservation Biodiversity</p>
    </div>
    <div className="sliderFive">
    <h3 className='text-6xl text-white font-bold pt-[12rem]  text-center'>Promoting sustainable Development</h3>
      <p className='text-xl text-white font-medium pt-10  text-center'>Food security & livelihoods project​s for the community</p>
    </div>
  </Carousel>
    </div>
    </div>
  )
}

export default Header