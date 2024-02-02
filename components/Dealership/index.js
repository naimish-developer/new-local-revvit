import React, { Fragment } from 'react'
import Logo from '../Logo'

const dealership = () => {
    return (
        <section>
            <div className='dealership-root sm:-mt-[20vw] xl:-mt-[250px] bg-lightBlue-100'>
                <div className='main-container-root relative z-20'>
                    <div className='dealership-root-inner '>
                        <div className='dealership-wraper '>
                            <div className='dealership-heading '>
                                <img
                                    src='/assets/logo/revvit-logo-2.png'
                                    className='dealership-heading-img '
                                />
                                <div className='inventory-title lg:text-left'>
                                    <h2>
                                        Revolutionize Your
                                        <span className='features-title-color block'>
                                            Auto dealership
                                        </span>
                                    </h2>
                                </div>
                            </div>
                            <div className='dealership-contant'>
                                <div className='dealership-contant-section-one '>
                                    <div className=' dealership-contant-wraper dealership-contant-wraper'>
                                        <div className='dealership-contant-box'>
                                            <h4 className='inventory-card-title'>
                                                <Logo />
                                                Innovative Features
                                            </h4>
                                            <p>
                                                <span className='features-title-color'>
                                                    Revvit
                                                </span>{' '}
                                                is proud to offer a wide range
                                                of innovative features designed
                                                to make selling your inventory a
                                                breeze. Our app utilizes
                                                cutting-edge AI technology that
                                                streamlines inventory
                                                optimization, ensuring that your
                                                business stays organized and
                                                efficient. By utilizing Revvit,
                                                you can take advantage of a
                                                comprehensive suite of features
                                                that make the selling process
                                                fast, easy, and hassle-free.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='dealership-contant-wraper'>
                                        <div className='dealership-contant-box'>
                                            <h4 className='inventory-card-title'>
                                                <Logo />
                                                Seamless Selling Process
                                            </h4>
                                            <p>
                                                he{' '}
                                                <span className='features-title-color'>
                                                    Revvit
                                                </span>{' '}
                                                App streamlines the selling
                                                process, making it easy for you
                                                to showcase your vehicles,
                                                provide detailed information,
                                                and manage buyer inquiries. With
                                                a smooth and intuitive
                                                interface, you can offer a
                                                seamless experience to
                                                prospective buyers, increasing
                                                your chances of closing deals.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='dealership-contant-section-two '>
                                    <div className='dealership-contant-wraper'>
                                        <div className='dealership-contant-box'>
                                            <h4 className='inventory-card-title'>
                                                <Logo />
                                                Cost Free Solution
                                            </h4>
                                            <p>
                                                <span className='features-title-color'>
                                                    Revvit
                                                </span>{' '}
                                                sellers can easily showcase
                                                their vehicle inventory on our
                                                app without any cost. There are
                                                no fees associated with
                                                showcasing your inventory on our
                                                platform. This means you can
                                                effectively market your vehicles
                                                to a wide range of potential
                                                buyers without any financial
                                                investment. By taking advantage
                                                of this opportunity, you can
                                                enhance your visibility and
                                                attract interested buyers
                                                without incurring any expenses.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='dealership-contant-wraper'>
                                        <div className='dealership-contant-box'>
                                            <h4 className='inventory-card-title'>
                                                <Logo />
                                                Rigorous Vetting Process
                                            </h4>
                                            <p>
                                                At{' '}
                                                <span className='features-title-color'>
                                                    Revvit
                                                </span>{' '}
                                                we understand that as a auto
                                                dealer, it's essential to deal
                                                with trustworthy and reliable
                                                buyers when it comes to selling
                                                vehicles. That's why we take
                                                pride in our rigorous vetting
                                                process to ensure that our
                                                buyers are fully verified,
                                                giving you the confidence and
                                                peace of mind that you are
                                                dealing with legitimate parties
                                                who are serious about
                                                purchasing.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default dealership
