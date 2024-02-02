import Link from 'next/link'
import React from 'react'
import data from '../../config/data.json'

const Hero = () => {
    return (
        <div className='seller-hero-root relative z-20'>
            <div className='seller-hero-img-wraper'>
                {/* <img
          src='/assets/hero/seller.png'
          className='seller-hero-img '
        /> */}
            </div>
            <div className='main-container-root relative z-[30]'>
                <div className='seller-hero-contaon-wraper '>
                    <h1 className=' seller-hero-contaon-title'>
                        Revolutionize Your Auto Dealership
                    </h1>
                    <h3 className='seller-hero-contaon-description'>
                        Our user-friendly app offers a range of benefits that
                        can help you streamline your operations and maximize
                        your success
                    </h3>

                    <Link href={data.APP_URL}>
                        <button className='seller-hero-contaon-button'>
                            Get Started Today!
                        </button>
                    </Link>
                </div>
            </div>
            <div class='sm:mb-[40vw]'></div>
            <div className='absolute h-full sm:h-[unset] w-full top-[50%] xl:top-[40%] left-0 z-10'>
                <img
                    src='/assets/hero/seller.png'
                    alt=''
                    className='h-full w-full object-cover object-center'
                />
            </div>
        </div>
    )
}

export default Hero
