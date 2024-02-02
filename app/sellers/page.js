import React from 'react'

import Section from '@/components/Section'
import Hero from '@/views/Sellers/Hero'
import Dealership from '@/components/Dealership'
import JoinUs from '@/components/Footer/JoinUs'
import Reviews from '@/components/Reviews'

const Sellers = () => {
    return (
        <Section>
            <Hero />
            <Dealership />
            <JoinUs />
            <Reviews />
        </Section>
    )
}

export default Sellers
