import React from 'react'

const CustomCard = () => {
    return (
        <div>
            <div className='py-[130px] bg-[#faf9f5]'>
                <div className='max-w-screen-2xl mx-auto'>
                    <div className='grid grid-cols-3'>
                        <div className='col-span-1'>
                            <img
                                src='/assets/logo/revvit-logo-2.png'
                                className='h-[34px] w-[45px]'
                            />
                            <div className='inventory-title'>
                                <span>
                                    Next Level
                                    <span className='text-primary'>
                                        {' '}
                                        Inventory Management
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className='col-span-2'>
                            <div className='grid grid-cols-2 gap-10'>
                                <div className='col-span-1'>
                                    <div className='inventory-card'>
                                        <h4 className='inventory-card-title'>
                                            <Logo />
                                            Wide Range of Options
                                        </h4>
                                        <span className='text-[#797979]'>
                                            With{' '}
                                            <span className='text-primary'>
                                                Revvit
                                            </span>
                                            , you'll have access to an extensive
                                            range of top-quality vehicles,
                                            making it easy to find the perfect
                                            fit for your customers. Our
                                            inventory includes everything from
                                            sedans to SUVs, trucks to minivans,
                                            catering to a variety of tastes.
                                        </span>
                                    </div>
                                </div>
                                <div className='col-span-1'>
                                    <div className='inventory-card'>
                                        <h4 className='inventory-card-title'>
                                            <Logo />
                                            Quality You Can Trust
                                        </h4>
                                        <span className='text-[#797979]'>
                                            Every vehicle in our inventory
                                            undergoes a comprehensive inspection
                                            process, ensuring that it meets our
                                            strict quality standards. With
                                            Revvit, you can trust that you're
                                            purchasing top-quality vehicles that
                                            will satisfy your customers and
                                            provide long-lasting reliability.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-10 mt-12 h-full'>
                                <div className='col-span-1 h-full'>
                                    <div className='inventory-card'>
                                        <h4 className='inventory-card-title'>
                                            <Logo />
                                            Inventory Management
                                        </h4>
                                        <span className='text-[#797979]'>
                                            We understand how managing inventory
                                            can be a daunting task, especially
                                            for wholesalers. With&nbsp;
                                            <span className='text-primary'>
                                                Revvit
                                            </span>
                                            , you can easily manage your
                                            inventory through our platform,
                                            streamlining the process from
                                            purchasing to management. Having
                                            everything in one place eliminates
                                            the need to use multiple platforms
                                            or waste time and money attending
                                            physical auctions.
                                        </span>
                                    </div>
                                </div>
                                <div className='col-span-1 h-full'>
                                    <div className='inventory-card'>
                                        <h4 className='inventory-card-title'>
                                            <Logo />
                                            Competitive Pricing
                                        </h4>
                                        <span className='text-[#797979]'>
                                            We offer competitive pricing on all
                                            our vehicles, ensuring that you can
                                            maximize your profit potential
                                            without sacrificing quality.
                                            With&nbsp;
                                            <span className='text-primary'>
                                                Revvit
                                            </span>
                                            , you can buy and sell vehicles with
                                            confidence, knowing that you're
                                            getting a fair and competitive
                                            price.
                                        </span>
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

export default CustomCard
