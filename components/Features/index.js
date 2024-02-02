import React from 'react'

import Logo from '../Logo/index'

const Features = () => {
    return (
        <div className='features-root'>
            <div className='main-container-root'>
                <div className='features-title-section'>
                    <img
                        src='/assets/logo/revvit-logo-2.png'
                        alt='Logo'
                        className='title--image '
                    />
                    <h2 className='title-text'>
                        Amazing&nbsp;
                        <span className='features-title-color'>Features</span>
                    </h2>
                </div>
                <div className='features-img-section '>
                    <div className='features-img-wraper  '>
                        <div className='features-img-card '>
                            <img
                                src='/assets/components/mobile.png'
                                alt='Logo'
                                className='features-img'
                            />
                        </div>
                        <div className='features-contant-section '>
                            <div className='features-contant-wraper '>
                                <div className='features-contant-box'>
                                    <h4 className='features-title'>
                                        <Logo />
                                        Robust Search Functionality
                                    </h4>
                                    <p className='features-details'>
                                        Strong search functionality feature
                                        helps save time and removes the need for
                                        pre-searching before making
                                        transactions.
                                    </p>
                                </div>
                                <div className='features-contant-box'>
                                    <h4 className='features-title'>
                                        <Logo />
                                        Real-time User Notfications
                                    </h4>
                                    <p className='features-details'>
                                        Users are notified in real-time about
                                        new or modified listings. Sellers can
                                        also get real-time notifications on new
                                        messages from potential buyers.
                                    </p>
                                </div>
                            </div>
                            <div className='features-contant-wraper'>
                                <div className='features-contant-box '>
                                    <h4 className='features-title'>
                                        <Logo />
                                        User Profiles
                                    </h4>
                                    <p className='features-details'>
                                        Buyers and sellers can create
                                        customizable profiles, upload photos,
                                        and detail their interests and
                                        preferences. Potential buyers can review
                                        sellers' feedback and ratings, making it
                                        easier to assess them.
                                    </p>
                                </div>
                                <div className='features-contant-box'>
                                    <h4 className='features-title'>
                                        <Logo />
                                        In-app Messaging
                                    </h4>
                                    <p className='features-details'>
                                        in-app messaging functionality allows
                                        efficient communication between both
                                        parties, and it often reduces the time
                                        taken to communicate back and forth to
                                        finalize the terms of transactions.
                                    </p>
                                </div>
                            </div>
                            <div className='features-contant-wraper '>
                                <div className='features-contant-box'>
                                    <h4 className='features-title'>
                                        <Logo />
                                        Geolocation Features
                                    </h4>
                                    <p className='features-details'>
                                        These features let users view sellers or
                                        buyer's location on the map and enable
                                        search results based on geographical
                                        proximity.
                                    </p>
                                </div>
                                <div className='features-contant-box'>
                                    <h4 className='features-title'>
                                        <Logo />
                                        Analytics
                                    </h4>
                                    <p className='features-details'>
                                        With analytics, sellers can analyze data
                                        trends and make informed strategic
                                        decisions, capitalize on real-time
                                        market changes, and improve sales
                                        performance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
