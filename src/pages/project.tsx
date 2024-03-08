import React from 'react'
import NavBar from '../copmponents/navBar'
import "./gallery.css"
import Footer from '../copmponents/footer'
import Head from '../copmponents/new'
const Project = () => {
    return (
        <div className='bg-[#edefef] w-full'>
            <Head/>
            <NavBar />
            <div className='aboutContainer'>
                <div className='px-10 py-1 bg-[#385656] text-white w-40 ml-20 relative top-36'>
                    <p className='text-lg' >Home/project</p>
                </div>
                <h1 className='text-5xl  font-bold pt-40  text-white pl-20  '>Projects</h1>
            </div>
            <div className='w-[80%] m-auto'>
                <h1 className='text-5xl  font-bold py-10  text-center '>Ver Projects</h1>
                <div className='xl:flex gap-20'>
                    <div className='relative '>
                        <div className='absolute pt-2 w-32 lg:w-60 h-40'>
                            <img src="https://images.pexels.com/photos/4090605/pexels-photo-4090605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div className='absolute pt-20 w-32 lg:w-60 h-40 left-40'>
                            <img src="https://images.pexels.com/photos/1496266/pexels-photo-1496266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                    </div>
                    <div className='xl:ml-40 pt-[20rem] xl:pt-0 w-full'>
                        <h1 className='text-2xl  font-bold p-10 text-center '>VIE et ENVIRONNEMENT RWANDA</h1>
                        <p className='text-center pl-2 xl:pl-60 pb-20'>Deforestation is a very big problem in developing countries include Rwanda, 70.2% of the Rwanda population lives in the rural areas parts of the country most of the part depends on charcoal and fuel-wood for fuel supply which requires cutting of forest this one causes a reduction in forest products a reduction in environmental services such as soil protection and damage to biodiversity.     Consequently, access to tree products (timber, poles, fodder and fruits), food security, climate change, and diseases is a serious problem in sub-Saharan Africa and particularly in rural areas of Rwanda caused by deforestation.

                            This project aims to support community vulnerable with limited or no access to good livelihoods in the generating the income opportunities this is will facilitate reduction of all dependence to forest.</p>
                        <ul className='font-bold  xl:mt-40'>
                            <li>
                                1. Increased number of trees production and plantation for soil erosion protection and improve soil fertility;                    </li>
                            <li>
                                2.Fruits production and plantation;           </li>
                            <li>
                                3.Reduced cost of energy using and availability of renewable energy by using Improved cooking stove ,         </li>
                            <li>
                                4.Contributing to climate stabilization by reducing the negative effects of climate change that are culminating into Global warming;        </li>
                            <li>
                                5.Increasing the number of shade trees, especially in resting, recreational and garden places of schools, hospitals and churches      </li>
                            <li>
                                6.Improving community knowledge and awareness on climate change issues, food security and unbalanced diet, and supporting adaptation practices that reduce the impact climate change on people’s livelihoods

                            </li>
                            <li>
                                7.The project offers trainings to youth that will help them to find paid employment as well as giving women access needed to generate income from trees products and fruit trees production.
                            </li>
                        </ul>
                        <p>The project was targeted 100000$ for impacting approximately 10000 households
                            for 5 years in Rutsiro District, Western province of Rwanda, 10 primary and 6 secondary schools of the district
                        </p>
                        <button className='bg-[#fe7f4c] text-white w-[15rem] h-12 mt-5'>Support Our Mission</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Project