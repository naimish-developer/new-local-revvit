import React from 'react'

import Section from '@/components/Section'
import Hero from '@/views/Buyers/Hero'
import Inventory from '@/components/Inventory'
import JoinUs from '@/components/Footer/JoinUs'
import Reviews from '@/components/Reviews'

const Buyers = () => {
    return (
        <Section>
            <Hero />
            <Inventory />
            <JoinUs />
            <Reviews />
        </Section>
    )
}

export default Buyers
