import Link from 'next/link'
import React from 'react'
import data from '../../config/data.json'

const Hero = () => {
    return (
        <div className='buy-hero-root py-[55px] sm:py-[100px] relative lg:h-screen w-full'>
            <div className='main-container-root relative z-20'>
                <div className='buy-hero-root-inner '>
                    <div className='buy-hero-contant'>
                        <div className='buy-hero-contant-wraper'>
                            <div className='buy-hero-inf-wraper '>
                                <h1 className='buy-contant-info-one'>
                                    We understand the importance of a diverse &
                                    high-quality inventory
                                </h1>
                                <h3 className='buy-contant-info-two'>
                                    making it easier than ever to maximize your
                                    profit potential
                                </h3>
                                <Link href={data.APP_URL}>
                                    <button className='buy-contant-button'>
                                        Get Started Today!
                                    </button>
                                </Link>
                                {/* <button className='buy-contant-button'>
                                    Get Started Today!
                                </button> */}
                            </div>
                        </div>
                    </div>
                    <div className='buy-hero-img-wraper '>
                        <img src='' className='buy-hero-img' />
                    </div>
                </div>
            </div>
            <div className='absolute max-xl:h-full 2xl:h-[1600px] w-full top-0 left-0 z-10'>
                <img
                    src='../../../assets/hero/buyer.png'
                    alt=''
                    className='h-full w-full object-cover object-center'
                />
            </div>
        </div>
    )
}

export default Hero
