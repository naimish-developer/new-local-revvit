'use client'

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// import required modules
import { FreeMode, Pagination } from 'swiper/modules'

const Reviews = () => {
    const Slides = 9
    return (
        <div className='features-root '>
            <div className='main-container-root'>
                <div className='features-title-section'>
                    <img
                        src='/assets/logo/revvit-logo-2.png'
                        alt='Logo'
                        className='title--image'
                    />
                    <h2 className='title-text'>Reviews</h2>
                </div>
                <div className='reviewCard-main'>
                    <div className='mt-14'>
                        <div className='keen-slider'>
                            <Swiper
                                slidesPerView={3}
                                slidesPerGroup={3}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    280: {
                                        slidesPerGroup: 1,

                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                        // pagination: true,
                                    },
                                    768: {
                                        slidesPerGroup: 2,

                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                        // pagination: true,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                }}
                                modules={[FreeMode, Pagination]}
                                className='mySwiper'
                            >
                                {Array.from({ length: Slides }).map(
                                    (_, index) => (
                                        <SwiperSlide
                                            key={index}
                                            className='pl-[30px] lg:pl-[50px]'
                                        >
                                            <div className='keen-slider-slide '>
                                                <div className='reviewCard-wraper '>
                                                    <ReviewCard />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ),
                                )}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews

const ReviewCard = () => {
    return (
        <div className='review--card'>
            <h6 className='relative'>
                <div className='absolute flex items-center -left-[25px]'>
                    <img
                        src='/assets/slash/red.png'
                        alt='Logo'
                        className='h-[20px]'
                    />
                    <img
                        src='/assets/slash/black.png'
                        alt='Logo'
                        className='h-[15px] -ml-[7px] -mb-[2px]'
                    />
                </div>
                William Berkley
            </h6>
            <p>
                As a business owner, it's crucial to have access to a diverse
                range of high-quality vehicles. That's why I chose Revvit. This
                platform offers an extensive selection of options, making it
                easy to find the right fit for your customers.
            </p>
            <div className='break-line' />
            <span>May 2023</span>
        </div>
    )
}
