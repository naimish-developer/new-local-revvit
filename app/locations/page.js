import React from 'react'

import Section from '@/components/Section'
import Hero from '@/views/Locations/Hero'
import Network from '@/components/Network'
import JoinUs from '@/components/Footer/JoinUs'
import Partner from '@/components/PartnerMap/Partner'
import Reviews from '@/components/Reviews'
const Locations = () => {
    return (
        <Section>
            <Hero />
            <Network />
            <Partner />
            <JoinUs />
            <Reviews />
        </Section>
    )
}

export default Locations
