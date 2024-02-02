'use client'

import React, { Fragment, useEffect, useMemo, useState } from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSearch } from 'react-icons/fa'
import Link from 'next/link'

import HeaderLogo from '../HeaderLogo'
import Container from '../Container'
import { useParams } from 'next/navigation'
import data from '../../config/data.json'

const Header = () => {
    const params = useParams()

    const [scrolling, setScrolling] = useState(true)
    const [primerymenu, setPrimerymenu] = useState(false)
    const [activepage, setActivepage] = useState('')

    useEffect(() => {
        setActivepage(window.location.pathname)
    }, [params])

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth > 1024) {
                if (window.scrollY > 15) {
                    setScrolling(false)
                    setPrimerymenu(true)
                } else {
                    setPrimerymenu(false)
                    setScrolling(true)
                }
            }
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll)
            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        }
    }, [])

    const handleMenu = () => {
        if (window.innerWidth < 1023) {
            setScrolling(false)
        } else {
            setScrolling(true)
        }
    }

    const MobileHeaderclosehendler = () => {
        if (window.innerWidth < 1024) {
            setScrolling(true)
        }
    }

    return (
        <Fragment>
            <div
                className={`secondary-header  ${
                    scrolling
                        ? 'translate-y-0 lg:-translate-y-full'
                        : '-translate-y-full lg:translate-y-0'
                }`}
            >
                <Container>
                    <div className='secondary-header-wraper'>
                        <Link href='/'>
                            <div>
                                <img
                                    src='/assets/logo/revvit-logo.png'
                                    alt='Logo'
                                    className='secondary-header-main-logo '
                                />
                            </div>
                        </Link>

                        <div className='login-icon-section'>
                            <div className='login-icon-section-inner'>
                                <a
                                    target='_blank'
                                    href={data.APP_LOGIN_URL}
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        src='/assets/header/download.png'
                                        alt='Logo'
                                        className='secondary-heade-LoginIcon'
                                    />
                                    <span>login</span>
                                </a>
                            </div>
                            <div className='white-break' />
                            <HeaderLogo handleMenu={handleMenu} />
                        </div>
                    </div>
                </Container>
            </div>
            <header
                className={`primary-header ${
                    scrolling
                        ? '-translate-y-full lg:translate-y-0'
                        : 'translate-y-0 lg:-translate-y-full'
                }`}
            >
                <div className={`banner-root ${primerymenu && '!hidden'}`}>
                    <Container>
                        <div className='banner-section flex-between'>
                            <div className='banner-icon-section'>
                                <Link href='/'>
                                    <FaFacebookF className='banner-icon-wrapper' />
                                </Link>
                                <Link href='/'>
                                    <FaTwitter className='banner-icon-wrapper' />
                                </Link>
                                <Link href='/'>
                                    <FaLinkedinIn className='banner-icon-wrapper' />
                                </Link>
                            </div>
                            <span className='banner-text hidden lg:flex'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi vestibulum suscipit
                                bibendum.&nbsp;
                                <Link href='/' className='banner-text-link'>
                                    Read More
                                </Link>
                            </span>
                            <div className='search-section'>
                                <input placeholder='search' />
                                <FaSearch className='search-icon' />
                                <div className='break' />
                                <Link
                                    href='/help'
                                    onClick={MobileHeaderclosehendler}
                                >
                                    <span className='nav-list'>HELP</span>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className='primary-header-root'>
                    <img
                        onClick={MobileHeaderclosehendler}
                        src='/close.png'
                        alt='heare-close-icon'
                        className='close-icon   '
                    />

                    <Container>
                        <div className='primary-header-section flex-between'>
                            <Link href='/' onClick={MobileHeaderclosehendler}>
                                <img
                                    src='/assets/logo/revvit-logo.png'
                                    alt='Logo'
                                    className='primary-header-logo'
                                />
                            </Link>

                            <div className='primary-header-inner '>
                                <ul className='primary-header-nav-list  nav-list'>
                                    <li>
                                        <Link
                                            href='/why-revvit'
                                            onClick={MobileHeaderclosehendler}
                                        >
                                            <div
                                                className={`nav-list-inner ${
                                                    activepage.includes(
                                                        '/why-revvit',
                                                    ) && 'active'
                                                }`}
                                            >
                                                <div className='nav-list-inner-img-root'>
                                                    <img
                                                        src='/assets/slash/red.png'
                                                        alt='Logo'
                                                        className='nav-list-inner-img1 '
                                                    />
                                                    <img
                                                        src='/assets/slash/black.png'
                                                        alt='Logo'
                                                        className='nav-list-inner-img2'
                                                    />
                                                </div>
                                            </div>
                                            <span
                                                className={`${
                                                    activepage.includes(
                                                        '/why-revvit',
                                                    ) && 'active-link'
                                                }`}
                                            >
                                                WHY REVVIT
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href='/buyers'
                                            onClick={MobileHeaderclosehendler}
                                        >
                                            <div
                                                className={`nav-list-inner ${
                                                    activepage.includes(
                                                        '/buyers',
                                                    ) && 'active'
                                                }`}
                                            >
                                                <div className='nav-list-inner-img-root '>
                                                    <img
                                                        src='/assets/slash/red.png'
                                                        alt='Logo'
                                                        className='nav-list-inner-img1 '
                                                    />
                                                    <img
                                                        src='/assets/slash/black.png'
                                                        alt='Logo'
                                                        className='nav-list-inner-img2'
                                                    />
                                                </div>
                                            </div>
                                            <span
                                                className={`${
                                                    activepage.includes(
                                                        '/buyers',
                                                    ) && 'active-link'
                                                }`}
                                            >
                                                BUYERS
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href='/sellers'
                                            onClick={MobileHeaderclosehendler}
                                        >
                                            <div
                                                className={`nav-list-inner ${
                                                    activepage.includes(
                                                        '/sellers',
                                                    ) && 'active'
                                                }`}
                                            >
                                                <div className='nav-list-inner-img-root '>
                                                    <img
                                                        src='/assets/slash/red.png'
                                                        alt='Logo'
                                                        className='nav-list-inner-img1 '
                                                    />
                                                    <img
                                                        src='/assets/slash/black.png'
                                                        alt='Logo'
                                                        className='nav-list-inner-img2'
                                                    />
                                                </div>
                                            </div>
                                            <span
                                                className={`${
                                                    activepage.includes(
                                                        '/sellers',
                                                    ) && 'active-link'
                                                }`}
                                            >
                                                SELLERS
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href='/locations'
                                            onClick={MobileHeaderclosehendler}
                                        >
                                            <div
                                                className={`nav-list-inner ${
                                                    activepage.includes(
                                                        '/locations',
                                                    ) && 'active'
                                                }`}
                                            >
                                                <div className='nav-list-inner-img-root '>
                                                    <img
                                                        src='/assets/slash/red.png'
                                                        alt='Logo'
                                                        className='nav-list-inner-img1 '
                                                    />
                                                    <img
                                                        src='/assets/slash/black.png'
                                                        alt='Logo'
                                                        className='nav-list-inner-img2'
                                                    />
                                                </div>
                                            </div>
                                            <span
                                                className={`${
                                                    activepage.includes(
                                                        '/locations',
                                                    ) && 'active-link'
                                                }`}
                                            >
                                                LOCATIONS
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href='/pricing'
                                            onClick={MobileHeaderclosehendler}
                                        >
                                            <div
                                                className={`nav-list-inner ${
                                                    activepage.includes(
                                                        '/pricing',
                                                    ) && 'active'
                                                }`}
                                            >
                                                <div className='nav-list-inner-img-root '>
                                                    <img
                                                        src='/assets/slash/red.png'
                                                        alt='Logo'
                                                        className='nav-list-inner-img1 '
                                                    />
                                                    <img
                                                        src='/assets/slash/black.png'
                                                        alt='Logo'
                                                        className='nav-list-inner-img2'
                                                    />
                                                </div>
                                            </div>
                                            <span
                                                className={`${
                                                    activepage.includes(
                                                        '/pricing',
                                                    ) && 'active-link'
                                                }`}
                                            >
                                                PRICING
                                            </span>
                                        </Link>
                                    </li>
                                    <div className='mobile-search'>
                                        <input placeholder='search' />
                                        <button>
                                            <spa>Search</spa>
                                            <FaSearch className='search-icon' />
                                        </button>
                                    </div>
                                </ul>
                            </div>
                            <div className='primary-header-login-section flex-between'>
                                <a
                                    target='_blank'
                                    href={data.APP_SIGNUP_URL}
                                    rel='noopener noreferrer'
                                >
                                    <button
                                        className='signup-button header-btn'
                                        onClick={MobileHeaderclosehendler}
                                    >
                                        Sign Up
                                    </button>
                                </a>
                                <a
                                    target='_blank'
                                    href={data.APP_LOGIN_URL}
                                    rel='noopener noreferrer'
                                >
                                    <button
                                        className='login-button header-btn'
                                        onClick={MobileHeaderclosehendler}
                                    >
                                        Log in
                                    </button>
                                </a>
                            </div>
                        </div>
                    </Container>
                </div>
            </header>
        </Fragment>
    )
}

export default Header
