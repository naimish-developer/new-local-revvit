'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import data from '../../config/data.json'
import Link from 'next/link'

const BuySell = () => {
    const url = usePathname()

    return (
        <div className='buy-sell-root '>
            <div className='buy-sell-root-inner '>
                <div className='buy-sell-wraper '>
                    <div className='buy-root '>
                        <img
                            src='/assets/car/buyer-car.png'
                            alt='Logo'
                            className='buy-main-img'
                        />
                        <div className='buyers-details'>
                            <div className='slash-title'>
                                <img
                                    src='/assets/slash/white.png'
                                    alt='Logo'
                                    className='slash-img '
                                />
                                <h2>Buyers</h2>
                            </div>
                            <ul>
                                <li>
                                    REAL-TIME UPDATES ON PRICING & AVAILABILITY
                                </li>
                                <li>
                                    DETAILED VEHICLE INFORMATION, INCLUDING
                                    HISTORY REPORTS AND PHOTOS
                                </li>
                                <li>
                                    CUSTOMIZED SEARCH FILTERS TO FIND THE RIGHT
                                    VEHICLES
                                </li>
                                <li>
                                    MARKET REPORTS AND ANALYTICS TO HELP ADJUST
                                    PRICES AND IMPROVE INVENTORY SELECTION AND
                                    MANAGEMENT
                                </li>
                                {url == '/pricing' ? (
                                    <li className='buy-sell-price'>
                                        $199 /
                                        <span className='text-lg '>
                                            BUY FREE
                                        </span>
                                    </li>
                                ) : null}
                            </ul>
                            <Link href={data.APP_URL}>
                                <button> Get Started Today!</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='sell-root '>
                    <div className='buy-root'>
                        <div className='sellers-details'>
                            <div className='slash-title'>
                                <img
                                    src='/assets/slash/white.png'
                                    alt='Logo'
                                    className='slash-img'
                                />
                                <h2>Sellers</h2>
                            </div>
                            <ul>
                                <li>
                                    REAL-TIME UPDATES ON PRICING & AVAILABILITY
                                </li>
                                <li>
                                    DETAILED VEHICLE INFORMATION, INCLUDING
                                    HISTORY REPORTS AND PHOTOS
                                </li>
                                <li>
                                    CUSTOMIZED SEARCH FILTERS TO FIND THE RIGHT
                                    VEHICLES
                                </li>
                                <li>
                                    MARKET REPORTS AND ANALYTICS TO HELP ADJUST
                                    PRICES AND IMPROVE INVENTORY SELECTION AND
                                    MANAGEMENT
                                </li>
                                {url == '/pricing' ? (
                                    <li className='buy-sell-price'> FREE </li>
                                ) : null}
                            </ul>
                            <Link href={data.APP_URL}>
                                <button> Get Started Today!</button>
                            </Link>
                        </div>
                        <img
                            src='/assets/car/seller-car.png'
                            alt='Logo'
                            className='sell-main-img'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuySell
