import React from 'react'

import Hero from '@/views/Home/Hero'
import Features from '@/components/Features'
import BuySell from '@/components/BuySell'
import Section from '@/components/Section'
import Process from '@/components/Process'
import Reviews from '@/components/Reviews'

const Home = () => {
    return (
        <Section>
            <Hero />
            <Process />
            <Features />
            <BuySell />
            <Reviews />
        </Section>
    )
}

export default Home
