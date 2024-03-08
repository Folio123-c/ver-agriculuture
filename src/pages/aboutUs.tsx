import React from 'react'
import NavBar from '../copmponents/navBar'
import "./gallery.css"
import Footer from '../copmponents/footer'
import Head from '../copmponents/new'
const AboutUs = () => {
    return (
        <div className='bg-[#edefef] w-full'>
            <Head/>
            <NavBar />
            <div className='aboutContainer'>
                <div className='px-10 py-1 bg-[#385656] text-white w-40 ml-20 relative top-36'>
                    <p className='text-lg' >Home/About</p>
                </div>
                <h1 className='text-5xl  font-bold pt-40  text-white pl-20  '>About Us</h1>
            </div>
            <div className='w-[80%] m-auto'>
                <h1 className='text-5xl  font-bold py-10  text-center '>More About Ver</h1>
                <div className='lg:flex gap-20'>
                    <div className='relative'>
                        <div className='absolute pt-2 w-32 lg:w-60 h-40'>
                            <img src="https://images.pexels.com/photos/4090605/pexels-photo-4090605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div className='absolute pt-20 w-32 lg:w-60 h-40 left-40'>
                            <img src="https://images.pexels.com/photos/1496266/pexels-photo-1496266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                    </div>
                    <div className='lg:ml-40 pt-[30rem] lg:pt-0'>
                        <h1 className='text-2xl  font-bold p-10 text-center '>VIE et ENVIRONNEMENT RWANDA</h1>
                        <p className='text-center pl-2 xl:pl-40 pb-20'>Vie et Environnement Rwanda (VER) is Non-Government Organization, registration no 14/NGO/RGB/2016;

                            Accredited by Ministerial Order No 4/2012 of 17 February 2012, Official Gazette no16 bis7 April 2017 founded on 2014 at Kivumu sector,
                            Rutsiro District Western province country of Rwanda with a mission to contribute to the wellbeing of community

                            through environment Management, conservation and Protection</p>
                    </div>
                </div>
                <div className=' xl:mt-60 flex flex-wrap gap-10'>
                    <div className='bg-white border-2  border-s-[#fe7f4c]  h-[1s8rem] w-[22rem] p-2 rounded-md shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                        <div className='flex justify-between p-2' >
                            <h1 className='text-2xl  font-medium pt-3 text-center text-black'>Vision</h1>
                        </div>
                        <p className='text-[#000000bd] p-3'>“Working towards prosperous communities that conserve their environment”.</p>
                    </div>
                    <div className='bg-white border-2  border-s-[#fe7f4c]  h-[s18rem] w-[22rem] p-2 rounded-md shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                        <div className='flex justify-between p-2' >
                            <h1 className='text-2xl  font-medium pt-3 text-center text-black'>Mission</h1>
                        </div>
                        <p className='text-[#000000bd] p-3'>We are committed to sustainably improve the well-being of poor people in Rwanda by using community-based approach to
                            finding solutions to food insecurity, livelihoods and environmental challenges.</p>
                    </div>
                    <div className='bg-white border-2  border-s-[#fe7f4c]  h-[1s8rem] w-[24rem] p-2 rounded-md shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                        <div className='flex justify-between p-2' >
                            <h1 className='text-2xl  font-medium pt-2 text-center text-black'>Activities</h1>
                        </div>
                        <p className='text-[#000000bd] p-2'>VER programmes are focused on:</p>
                        <ul>
                            <li>. Environmental research & Advocacy</li>
                            <li>. Climate & Disaster resilience (Food security & livelihoods projects)</li>
                            <li>. Capacity building (Community mobilization, Environmental literacy)</li>
                            <li>.Environment conservation activ​ities</li>

                        </ul>
                    </div>
                    <div className='bg-white border-2  border-s-[#fe7f4c]  h-[1s8rem] w-[22rem] p-2 rounded-md shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                        <div className='flex justify-between p-2' >
                            <h1 className='text-2xl  font-medium pt-3 text-center text-black'>PROGRESS</h1>
                        </div>
                        <ul>
                            <li>. Training on Conservation of Mukura Gishwati national park.</li>
                            <li>. Livelihoods security initiative in rural Rwanda.</li>
                            <li>. Training in soil conservation to rural farmers.</li>

                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutUs