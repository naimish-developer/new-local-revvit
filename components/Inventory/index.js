import React from 'react'
import Logo from '../Logo'

const Inventory = () => {
    return (
        <section>
            <div className='dealership-root max-xl:!pt-0 2xl:!pt-[450px] bg-lightBlue-100'>
                <div className='main-container-root relative z-10'>
                    <div className='dealership-root-inner'>
                        <div className='dealership-wraper '>
                            <div className='dealership-heading '>
                                <img
                                    src='/assets/logo/revvit-logo-2.png'
                                    className='dealership-heading-img '
                                />
                                <h2 className='inventory-title lg:text-left'>
                                    Next Level
                                    <span className='features-title-color block'>
                                        Inventory Management
                                    </span>
                                </h2>
                            </div>
                            <div className='dealership-contant'>
                                <div className='dealership-contant-section-one '>
                                    <div className=' dealership-contant-wraper dealership-contant-wraper '>
                                        <div className='dealership-contant-box '>
                                            <h4 className='inventory-card-title'>
                                                <Logo />
                                                Wide Range of Options
                                            </h4>
                                            <p>
                                                With{' '}
                                                <span className='features-title-color'>
                                                    Revvit
                                                </span>
                                                , you'll have access to an
                                                extensive range of top-quality
                                                vehicles, making it easy to find
                                                the perfect fit for your
                                                customers. Our inventory
                                                includes everything from sedans
                                                to SUVs, trucks to minivans,
                                                catering to a variety of tastes.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='dealership-contant-wraper'>
                                        <div className='dealership-contant-box'>
                                            <h4 className='inventory-card-title'>
                                                <Logo />
                                                Quality You Can Trust
                                            </h4>
                                            <p>
                                                Every vehicle in our inventory
                                                undergoes a comprehensive
                                                inspection process, ensuring
                                                that it meets our strict quality
                                                standards. With Revvit, you can
                                                trust that you're purchasing
                                                top-quality vehicles that will
                                                satisfy your customers and
                                                provide long-lasting
                                                reliability.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='dealership-contant-section-two '>
                                    <div className='dealership-contant-wraper'>
                                        <div className='dealership-contant-box'>
                                            <h4 className='inventory-card-title'>
                                                <Logo />
                                                Inventory Management
                                            </h4>
                                            <p>
                                                We understand how managing
                                                inventory can be a daunting
                                                task, especially for
                                                wholesalers. With&nbsp;
                                                <span className='features-title-color'>
                                                    Revvit
                                                </span>
                                                , you can easily manage your
                                                inventory through our platform,
                                                streamlining the process from
                                                purchasing to management. Having
                                                everything in one place
                                                eliminates the need to use
                                                multiple platforms or waste time
                                                and money attending physical
                                                auctions.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='dealership-contant-wraper'>
                                        <div className='dealership-contant-box'>
                                            <h4 className='inventory-card-title'>
                                                <Logo />
                                                Competitive Pricing
                                            </h4>
                                            <p>
                                                We offer competitive pricing on
                                                all our vehicles, ensuring that
                                                you can maximize your profit
                                                potential without sacrificing
                                                quality. With&nbsp;
                                                <span className='features-title-color'>
                                                    Revvit
                                                </span>
                                                , you can buy and sell vehicles
                                                with confidence, knowing that
                                                you're getting a fair and
                                                competitive price.
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

export default Inventory
