import Link from 'next/link'
import React from 'react'
import data from '../../config/data.json'

const Hero = () => {
    return (
        <div className='hero-root'>
            <div className='main-container-root lg:pb-[8rem] xl:pb-[10rem]'>
                <div className='hero-root-inner'>
                    <div className='hero-Warper grid grid-cols-2 relative'>
                        <div className='hero-warper-inner '>
                            <div className='hero-section-contant '>
                                <div className='hero-section-contant-inner '>
                                    <div className='hero-content-wrapper'>
                                        <h1 className=' hero-contant-title'>
                                            Wide Range of Potential Buyers For
                                            Your Inventory
                                        </h1>
                                        <h3 className=' hero-contant-description'>
                                            Access to a large pool of buyers
                                            located throughout Canada,
                                            increasing your reach and exposure
                                            in the market
                                        </h3>
                                        <Link href={data.APP_URL}>
                                            <button className='hero-contant-button'>
                                                Get Started Today!
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
