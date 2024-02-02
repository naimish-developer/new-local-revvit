import React from 'react'

import Container from '../Container'
import Logo from '../Logo'

const network = () => {
    return (
        <Container>
            <div className='network-root'>
                <div className='network-root-inner '>
                    <div className='network-section-one '>
                        <h4 className='features-title'>
                            <Logo />
                            Extensive
                            <span className='features-title-color pl-1 sm:pl-2'>
                                Network
                            </span>
                        </h4>
                        <p className='features-details'>
                            At <span className='text-primary'>Revvit</span>, our
                            extensive network of buyers spans across Canada,
                            guaranteeing that you have a wide range of potential
                            buyers for your inventory. With our vast buyer
                            network, you can effectively market your vehicles to
                            a diverse audience, maximizing your chances of
                            finding the right buyer for your specific vehicles.
                        </p>
                        <p className='features-details features-details-extra-css'>
                            Our strong buyer network is a testament to our
                            commitment to providing a comprehensive and
                            efficient platform for business owners like you.
                            With <span className='text-primary'>Revvit</span>,
                            you can confidently showcase your inventory to a
                            vast network of buyers, streamlining the selling
                            process and optimizing your chances of successful
                            transactions.
                        </p>
                    </div>
                    <div className='network-section-one'>
                        <h4 className='features-title'>
                            <Logo />
                            Partner
                            <span className='features-title-color pl-1 sm:pl-2'>
                                Rearch
                            </span>
                        </h4>
                        <p className='features-details'>
                            By teaming up with{' '}
                            <span className='text-primary'>Revvit</span>, you
                            tap into a vast network of buyers across Canada.
                            This widens your reach and boosts your visibility in
                            the market, enabling you to connect with interested
                            buyers from different regions. As a result, you
                            expand your customer base and unlock growth
                            opportunities for your business. With{' '}
                            <span className='text-primary'>Revvit</span>, you
                            have the advantage of accessing a large pool of
                            buyers throughout Canada, enhancing your sales
                            potential and driving success in the market.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default network
