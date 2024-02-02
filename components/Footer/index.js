'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    const [activepage, setActivepage] = useState('')
    const params = useParams()

    useEffect(() => {
        setActivepage(window.location.pathname)
    }, [params])

    const year = new Date()
    return (
        <div className='footer-root'>
            <div className='main-container-root footer-root-inner '>
                <div className='footer-list-root'>
                    <div className='footer-list-section'>
                        <Link href='/'>
                            <img
                                src='/assets/logo/revvit-logo-white-v2.png'
                                alt='image'
                                className='footer-list-section-img '
                            />
                        </Link>
                        <ul className='footer-list-first '>
                            <li
                                className={` ${
                                    activepage.includes('/why-revvit') &&
                                    'active-link'
                                }`}
                            >
                                <Link href='/why-revvit'>WHY REVVIT </Link>
                            </li>
                            <li
                                className={` ${
                                    activepage.includes('/buyers') &&
                                    'active-link'
                                }`}
                            >
                                <Link href='/buyers'>BUYERS </Link>
                            </li>
                            <li
                                className={` ${
                                    activepage.includes('/sellers') &&
                                    'active-link'
                                }`}
                            >
                                <Link href='/sellers'>SELLERS </Link>
                            </li>
                            <li
                                className={`${
                                    activepage.includes('/locations') &&
                                    'active-link'
                                }`}
                            >
                                <Link href='/locations'>LOCATIONS </Link>
                            </li>
                            <li
                                className={`${
                                    activepage.includes('/pricing') &&
                                    'active-link'
                                }`}
                            >
                                <Link href='/pricing'>PRICING </Link>
                            </li>
                        </ul>
                        <div className='break-line' />
                        <div className='footer-privacy'>
                            <span>
                                &copy; {year.getFullYear()} REVVIT All Rights
                                Reserved
                            </span>
                            <span className='footer-privacy-devider'>|</span>
                            <ul>
                                <li>
                                    <Link href='/'>Privacy Policy </Link>
                                </li>
                                <li>
                                    <Link href='/'>Terms of use </Link>
                                </li>
                                <li>
                                    <Link href='/'>Accessibility </Link>
                                </li>
                                <li>
                                    <Link href='/'>Sitemap </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer-list-section-two '>
                        <img
                            src='/assets/car/footer_car.png'
                            alt='image'
                            className='footer-list-section-two-img w-full h-full'
                        />
                        <div className='social-icon-section '>
                            <div className='social-ico-wrater flex-center'>
                                <Link href='/'>
                                    <FaFacebookF className='social-icon' />
                                </Link>
                            </div>
                            <div className='social-ico-wrater flex-center'>
                                <Link href='/'>
                                    <FaTwitter className='social-icon' />
                                </Link>
                            </div>
                            <div className='social-ico-wrater flex-center'>
                                <Link href='/'>
                                    <FaLinkedinIn className='social-icon ' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
