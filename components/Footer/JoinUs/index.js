import Link from 'next/link'
import React from 'react'
import data from '../../../config/data.json'

const JoinUs = () => {
    return (
        <div className='joinus-root'>
            <div className='joinus-img-section'>
                <img
                    src='/assets/car/left-car.png'
                    alt='Logo'
                    className='joinus-car-img'
                />
            </div>
            <div className='main-container-root'>
                <div className='joinus-root-inner'>
                    <div className='joinus-info-section'>
                        <div className='joinus-title-section'>
                            <img
                                src='/assets/slash/white.png'
                                className='joinus-slash-img '
                            />
                            <h4>JOIN US TODAY</h4>
                        </div>
                        <p>
                            Choose Revvit for an unparalleled vehicle inventory
                            management solution. With our wide range of options,
                            quality assurance, effortless inventory management,
                            and competitive pricing, you can keep your customers
                            happy while growing your business.
                        </p>
                        <div className='joinus-info-second '>
                            <div className='joinus-info-second-inner'>
                                <p className='joinus-btn-text'>
                                    Join us today and experience the benefits of
                                    working with a company that prioritizes your
                                    success.
                                </p>
                            </div>
                            <div className='joinus-info-second-button '>
                                <Link href={data.APP_URL}>
                                    <button className='started-btn'>
                                        Get Started Today!
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinUs
