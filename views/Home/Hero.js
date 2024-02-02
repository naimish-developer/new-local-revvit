'use client'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper/modules'
import Link from 'next/link'
import data from '../../config/data.json'

const Hero = () => {
    const heroPagination = {
        clickable: true,
    }
    const Slides = 5
    return (
        <div className='home-hero-root'>
            <div className='main-container-root home-hero-wraper'>
                <Swiper
                    style={{}}
                    breakpoints={{
                        280: {
                            slidesPerView: 1,
                        },
                        768: {
                            pagination: false,
                        },
                    }}
                    navigation={true}
                    pagination={heroPagination}
                    modules={[Navigation, Pagination]}
                    className='mySwiper h-full hero_swiper'
                    loop={true}
                >
                    {Array.from({ length: Slides }).map((_, index) => (
                        <SwiperSlide key={index}>
                            <div className='keen-slider-slide h-full relative'>
                                <div className='hero-wrapper h-full'>
                                    <div className='flex flex-col items-center text-center pt-16 2xl:pt-32'>
                                        <img
                                            src='/assets/logo/revvit-logo-2.png'
                                            alt='Logo'
                                            className='hero-wrapper-logo'
                                        />
                                        <h1 className='hero-wrapper-title'>
                                            Rev Up Your Transactions
                                        </h1>
                                        <h3 className='hero-wrapper-sub-title'>
                                            Connecting Vehicle Buyers & Sellers
                                        </h3>
                                        <p className='hero-wrapper-text'>
                                            With our platform, you can easily
                                            connect with a diverse range of
                                            buyers and sellers, all from the
                                            comfort of your own device.
                                        </p>
                                        {/* <button className='hero-wrapper-btn'>
                      Get Started Today!
                    </button> */}
                                        <Link href={data.APP_URL}>
                                            <button className='hero-wrapper-btn'>
                                                Get Started Today!
                                            </button>
                                        </Link>
                                    </div>
                                    <div className='hero-wrapper-img'>
                                        <img
                                            src='/assets/car/home_car.png'
                                            alt='Logo'
                                            className='hero-wrapper-home-car-img'
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>{' '}
        </div>
    )
}

export default Hero
