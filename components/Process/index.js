'use client'
import React, { Fragment, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'
import CustomBullet from '../Bullet/Bullet'

const Icon = [
    {
        id: 1,
        icon: '/assets/components/compo_1.png',
    },
    {
        id: 2,
        icon: '/assets/components/compo_2.png',
    },
    {
        id: 3,
        icon: '/assets/components/compo_3.png',
    },
    {
        id: 4,
        icon: '/assets/components/compo_4.png',
    },
    {
        id: 5,
        icon: '/assets/components/compo_5.png',
    },
]
const Icon2 = [
    '/assets/components/compo_1.png',

    '/assets/components/compo_2.png',

    '/assets/components/compo_3.png',

    '/assets/components/compo_4.png',

    '/assets/components/compo_5.png',
]
const Contant = [
    {
        id: 1,
        heading: 'Streamlined',
        heading2: 'Process',
        des: 'No need to spend time searching multiple platforms or contacting different sellers individually. With our platform, you can access a wide variety of vehicles, from cars to trucks, to SUV’s, all in one place.',
    },
    {
        id: 2,
        heading: 'Verified',
        heading2: 'Buyers',
        des: "We carefully vet all buyers on our platform to ensure that you're dealing with reputable and trustworthy professionals. This gives you peace of mind and eliminates the risk of scams or fraudulent transactions",
    },
    {
        id: 3,
        heading: 'Extensive',
        heading2: 'Inventory',
        des: "We offer a wide range of vehicles, catering to all your business needs. Whether you're looking for a fleet of sedans or heavy-duty trucks, we have you covered. Our inventory is constantly updated, ensuring that you have access to the latest models and options",
    },
    {
        id: 4,
        heading: 'Time &',
        heading2: 'Cost Savings',
        des: 'By having all buyers and sellers in one place, you can save valuable time and resources. You can efficiently compare prices, negotiate deals, and make informed decisions without the need for extensive research or multiple inquiries.',
    },
    {
        id: 5,
        heading: 'Personalized',
        heading2: 'Experience',
        des: 'Our platform is designed to cater to your specific requirements. You can filter vehicles based on your preferences, such as make, model, price range, and location. This allows you to find the perfect vehicles that meet your business needs, saving you time and effort.',
    },
]

export default function Btn() {
    const [Show, setSow] = useState(Contant[0])
    const [Propaty, setPropaty] = useState(0)
    // const [SliderHide, setSliderHide] = useState('flex')

    const TabChangHendler = (index, tabID) => {
        if (Show.id === tabID) return false
        // setSliderHide('none')

        setTimeout(() => {
            setPropaty(110)
            setSow(Contant[index])
            // setSliderHide('flex')
        }, 250)
        setTimeout(() => {
            setPropaty(0)
        }, 300)
    }
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return `<div class="${className} !h-[45px] !w-[45px] sm:!h-[55px] sm:!w-[55px] xl:!h-[85px] xl:!w-[85px] !border-[3px] xl:!border-[5px] !border-primary !bg-transparent !flex !justify-center !items-center selection-ctm-bullet">
     <img src=${Icon2[index]} />
      </div>`
        },
    }

    return (
        <Fragment>
            {/* swiper slider */}
            <div className='main-container-root sliderselection'>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    speed={800}
                    className='selectionSlider relative !flex lg:!items-end !flex-col lg:!flex-row'
                >
                    <SwiperSlide>
                        <div
                            className='slider-contant duration-300 delay-150 ease-linear flex flex-col lg:flex-row'
                            style={{
                                transform: `translateX(${Propaty}%)`,
                                // display: SliderHide,
                            }}
                        >
                            <div className='slider-contant-heding w-full lg:w-6/12 xl:w-5/12'>
                                <h2>
                                    <img
                                        src='/assets/slash/red.png'
                                        alt='Logo'
                                        className='slider-contant-heding-img-1'
                                    />
                                    <img
                                        src='/assets/slash/black.png'
                                        alt='Logo'
                                        className='slider-contant-heding-img-2'
                                    />
                                    <div className='slider-contant-spacing '>
                                        Streamlined
                                        <span className='text-primary break-normal pl-1 lg:pl-2'>
                                            Process
                                        </span>
                                    </div>
                                </h2>
                                <p className='slider-contant-spacing '>
                                    No need to spend time searching multiple
                                    platforms or contacting different sellers
                                    individually. With our platform, you can
                                    access a wide variety of vehicles, from cars
                                    to trucks, to SUV’s, all in one place.
                                </p>
                            </div>
                            <div className='w-full lg:w-6/12 xl:w-7/12'>
                                <img
                                    src='/assets/components/process.png'
                                    className='contant-img'
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className='slider-contant duration-300 delay-150 ease-linear flex flex-col lg:flex-row'
                            style={{
                                transform: `translateX(${Propaty}%)`,
                                // display: SliderHide,
                            }}
                        >
                            <div className='slider-contant-heding w-full lg:w-6/12 xl:w-5/12'>
                                <h2>
                                    <img
                                        src='/assets/slash/red.png'
                                        alt='Logo'
                                        className='slider-contant-heding-img-1'
                                    />
                                    <img
                                        src='/assets/slash/black.png'
                                        alt='Logo'
                                        className='slider-contant-heding-img-2'
                                    />
                                    <div className='slider-contant-spacing '>
                                        Verified
                                        <span className='text-primary break-normal pl-1 lg:pl-2'>
                                            Buyers
                                        </span>
                                    </div>
                                </h2>
                                <p className='slider-contant-spacing '>
                                    We carefully vet all buyers on our platform
                                    to ensure that you're dealing with reputable
                                    and trustworthy professionals. This gives
                                    you peace of mind and eliminates the risk of
                                    scams or fraudulent transactions
                                </p>
                            </div>
                            <div className='w-full lg:w-6/12 xl:w-7/12'>
                                <img
                                    src='/assets/components/process.png'
                                    className='contant-img'
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className='slider-contant duration-300 delay-150 ease-linear flex flex-col lg:flex-row'
                            style={{
                                transform: `translateX(${Propaty}%)`,
                                // display: SliderHide,
                            }}
                        >
                            <div className='slider-contant-heding w-full lg:w-6/12 xl:w-5/12'>
                                <h2>
                                    <img
                                        src='/assets/slash/red.png'
                                        alt='Logo'
                                        className='slider-contant-heding-img-1'
                                    />
                                    <img
                                        src='/assets/slash/black.png'
                                        alt='Logo'
                                        className='slider-contant-heding-img-2'
                                    />
                                    <div className='slider-contant-spacing '>
                                        Extensive
                                        <span className='text-primary break-normal pl-1 lg:pl-2'>
                                            Inventory
                                        </span>
                                    </div>
                                </h2>
                                <p className='slider-contant-spacing '>
                                    We offer a wide range of vehicles, catering
                                    to all your business needs. Whether you're
                                    looking for a fleet of sedans or heavy-duty
                                    trucks, we have you covered. Our inventory
                                    is constantly updated, ensuring that you
                                    have access to the latest models and options
                                </p>
                            </div>
                            <div className='w-full lg:w-6/12 xl:w-7/12'>
                                <img
                                    src='/assets/components/process.png'
                                    className='contant-img'
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className='slider-contant duration-300 delay-150 ease-linear flex flex-col lg:flex-row'
                            style={{
                                transform: `translateX(${Propaty}%)`,
                                // display: SliderHide,
                            }}
                        >
                            <div className='slider-contant-heding w-full lg:w-6/12 xl:w-5/12'>
                                <h2>
                                    <img
                                        src='/assets/slash/red.png'
                                        alt='Logo'
                                        className='slider-contant-heding-img-1'
                                    />
                                    <img
                                        src='/assets/slash/black.png'
                                        alt='Logo'
                                        className='slider-contant-heding-img-2'
                                    />
                                    <div className='slider-contant-spacing '>
                                        Time &
                                        <span className='text-primary break-normal pl-1 lg:pl-2'>
                                            Cost Savings
                                        </span>
                                    </div>
                                </h2>
                                <p className='slider-contant-spacing '>
                                    By having all buyers and sellers in one
                                    place, you can save valuable time and
                                    resources. You can efficiently compare
                                    prices, negotiate deals, and make informed
                                    decisions without the need for extensive
                                    research or multiple inquiries.
                                </p>
                            </div>
                            <div className='w-full lg:w-6/12 xl:w-7/12'>
                                <img
                                    src='/assets/components/process.png'
                                    className='contant-img'
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className='slider-contant duration-300 delay-150 ease-linear flex flex-col lg:flex-row'
                            style={{
                                transform: `translateX(${Propaty}%)`,
                                // display: SliderHide,
                            }}
                        >
                            <div className='slider-contant-heding w-full lg:w-6/12 xl:w-5/12'>
                                <h2>
                                    <img
                                        src='/assets/slash/red.png'
                                        alt='Logo'
                                        className='slider-contant-heding-img-1'
                                    />
                                    <img
                                        src='/assets/slash/black.png'
                                        alt='Logo'
                                        className='slider-contant-heding-img-2'
                                    />
                                    <div className='slider-contant-spacing '>
                                        Personalized
                                        <span className='text-primary break-normal pl-1 lg:pl-2'>
                                            Experience
                                        </span>
                                    </div>
                                </h2>
                                <p className='slider-contant-spacing '>
                                    Our platform is designed to cater to your
                                    specific requirements. You can filter
                                    vehicles based on your preferences, such as
                                    make, model, price range, and location. This
                                    allows you to find the perfect vehicles that
                                    meet your business needs, saving you time
                                    and effort.
                                </p>
                            </div>
                            <div className='w-full lg:w-6/12 xl:w-7/12'>
                                <img
                                    src='/assets/components/process.png'
                                    className='contant-img'
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </Fragment>
    )
}
