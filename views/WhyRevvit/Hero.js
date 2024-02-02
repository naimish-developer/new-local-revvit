import Link from 'next/link'
import React, { Fragment } from 'react'
import data from '../../config/data.json'

const Hero = () => {
    return (
        <Fragment>
            <div className='why-root'>
                <div className='why-root-inner '>
                    <div className='main-container-root'>
                        <div className='why-wraper '>
                            <div className='why-info-text-root '>
                                <div className='why-info-text'>
                                    <h1 className='why-info-title'>
                                        North America’s Cutting-Edge Wholesale
                                        Platform
                                    </h1>
                                    <h3 className='why-info-description'>
                                        bridging the gap between buyers and
                                        sellers throughout north america
                                    </h3>
                                    <Link href={data.APP_URL}>
                                        <button className='why-info-button'>
                                            Get Started Today!
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            <div className='why-info-img-root'>
                                <div className='img-container'>
                                    <img
                                        src='/assets/logo/u589.svg'
                                        alt='image'
                                        className='why-img-first'
                                    />
                                    <img
                                        src='/assets/logo/u588.svg'
                                        alt='image'
                                        className='why-img-second'
                                    />
                                    <img
                                        src='/assets/logo/u590.svg'
                                        alt='image'
                                        className='why-img-third'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Hero
