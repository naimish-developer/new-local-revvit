import Logo from '@/components/Logo'
import React from 'react'

const Mission = () => {
    return (
        <div className='mission-root '>
            <div className='main-container-root'>
                <div className='mission-root-inner'>
                    <div className='mission-part-one '>
                        <div className='mission-contant-wraper '>
                            <h4 className='features-title'>
                                <Logo />
                                Our{' '}
                                <span className='features-title-color'>
                                    Mission
                                </span>
                            </h4>
                            <p className='features-details'>
                                Our mission is to connect dealers seamlessly and
                                facilitate hassle-free transactions through a
                                secure and intelligent platform. We firmly
                                believe that technology should work for you, not
                                the other way around. With REVVIT, you can leave
                                behind the complexities of conventional
                                wholesale channels and embrace a simplified,
                                efficient, and profitable way of conducting
                                business.
                            </p>
                        </div>
                        <div className='mission-contant-wraper'>
                            <div className='compo-list-section flex-between'>
                                <div className='compo-img-wraper'>
                                    <div className='compo-card flex-center'>
                                        <img
                                            src='/assets/components/compo_1.png'
                                            alt='image'
                                            className='compo-card-img '
                                        />
                                    </div>
                                    <span className='compo-card-text'>
                                        Streamlined Process
                                    </span>
                                </div>
                                <div className='compo-img-wraper'>
                                    <div className='compo-card flex-center'>
                                        <img
                                            src='/assets/components/compo_2.png'
                                            alt='image'
                                            className='compo-card-img'
                                        />
                                    </div>
                                    <span className='compo-card-text'>
                                        Verified Buyers
                                    </span>
                                </div>
                                <div className='compo-img-wraper'>
                                    <div className='compo-card flex-center'>
                                        <img
                                            src='/assets/components/compo_3.png'
                                            alt='image'
                                            className='compo-card-img'
                                        />
                                    </div>
                                    <span className='compo-card-text'>
                                        Extensive Inventory
                                    </span>
                                </div>
                                <div className='compo-img-wraper'>
                                    <div className='compo-card flex-center'>
                                        <img
                                            src='/assets/components/compo_4.png'
                                            alt='image'
                                            className='compo-card-img'
                                        />
                                    </div>
                                    <span className='compo-card-text'>
                                        Time & Cost Savings
                                    </span>
                                </div>
                                <div className='compo-img-wraper'>
                                    <div className='compo-card flex-center'>
                                        <img
                                            src='/assets/components/compo_5.png'
                                            alt='image'
                                            className='compo-card-img'
                                        />
                                    </div>
                                    <span className='compo-card-text'>
                                        Personalized Experience
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mission-part-two '>
                        <div className='mission-contant-wraper'>
                            <h4 className='features-title'>
                                <Logo />
                                Auto Industry{' '}
                                <span className='features-title-color'>
                                    Challenges
                                </span>
                            </h4>
                            <p className='features-details'>
                                At REVVIT, we understand the challenges faced by
                                dealers in the automotive industry. The
                                traditional wholesale process can be
                                time-consuming, fraught with uncertainties, and
                                often lacks the advanced technology needed to
                                make informed decisions. That's why we set out
                                to create a transformative solution that
                                streamlines the entire process and empowers
                                dealers with the latest AI-driven tools.
                            </p>
                        </div>
                        <div className='mission-contant-wraper'>
                            <h4 className='features-title'>
                                <Logo />
                                Cutting-Edge{' '}
                                <span className='features-title-color'>
                                    Plateform
                                </span>
                            </h4>
                            <p className='features-details'>
                                Welcome to REVVIT, North America's cutting-edge
                                wholesale platform that is revolutionizing the
                                way dealers buy and sell used cars. Our platform
                                harnesses the power of Artificial Intelligence
                                to create an unparalleled experience for
                                automotive professionals seeking efficiency,
                                transparency, and profitability in the wholesale
                                market.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission
