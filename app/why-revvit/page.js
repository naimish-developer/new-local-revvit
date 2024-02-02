import React from 'react'

import Section from '@/components/Section'
import Hero from '@/views/WhyRevvit/Hero'
import Mission from '@/views/WhyRevvit/Mission'
import Features from '@/components/Features'
import JoinUs from '@/components/Footer/JoinUs'
import Reviews from '@/components/Reviews'

const WhyRevvit = () => {
    return (
        <Section>
            <Hero />
            <Mission />
            <Features />
            <JoinUs />
            <Reviews />
        </Section>
    )
}

export default WhyRevvit
