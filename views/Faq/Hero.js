'use client'

import Logo from '@/components/Logo'
import React from 'react'
const Hero = () => {
    const [activeindex, setactiveindex] = React.useState(0)

    const AccoradianHendler = (index) => {
        if (activeindex == index) {
            setactiveindex(10)
        } else {
            setactiveindex(index)
        }
    }

    const list = [
        {
            id: 1,
            head: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam odio mi, lobortis vel aliquam?',
            description:
                '1=>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam odio mi, lobortis vel aliquamLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam odio mi, lobortis velorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam o aliquamLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam odio mi, lobortis vel aliquam',
        },
        {
            id: 2,
            head: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam odio mi, lobortis vel aliquam?',
            description:
                '1=>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam odio mi, lobortis orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam oorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ovel aliquamLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam odio mi, lobortis vel aliquamLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam odio mi, lobortis vel aliquam',
        },
        {
            id: 3,
            head: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam odio mi, lobortis vel aliquam?',
            description:
                '1=>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam odio mi, lobortis vel aliquamLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam odio mi, lobortis vel aliquamLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam odio mi, lobortis vel aliquam',
        },
        {
            id: 4,
            head: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam odio mi,Lorem ipsum dolor sing elit.?',
            description:
                '1=>Lorem ipsum dolor sing elit. Aliquam odio mi, lobortis vel aliquam, Aliquam odio mi, lobortis vel aliquam  Aliquam odio mi, lobortis vel aliquam  Aliquam odio mi, lobortis vel aliquam  Aliquam odio mi, lobortis vel aliquam     ',
        },
    ]

    return (
        <div className='faq-root'>
            <div className='main-container-root'>
                <div className='faq-root-inner'>
                    <div className='contact-info-root'>
                        <div className='contact-root-of-info'>
                            <div className='custom-suport-section'>
                                <div className='custom-suport-section-title'>
                                    <h4 className='inventory-card-title'>
                                        <Logo />
                                        Custom Suport
                                    </h4>
                                </div>
                                <div className='custom-suport-data'>
                                    <a href='tel:1 888 123 1234'>
                                        1 888 123 1234
                                    </a>
                                    <div className='custom-suport-data-one'>
                                        <span>Monday – Friday</span>
                                        <span>7:00 a.m. – 8:00 p.m. ET</span>
                                    </div>
                                    <div className='custom-suport-data-two'>
                                        <span>Saturday</span>
                                        <span>9:00 a.m. – 6:00 p.m. ET </span>
                                    </div>
                                    <button className='online-chat-btn'>
                                        Online Chat
                                    </button>
                                </div>
                            </div>
                            <div className='border-devider'></div>
                            <div className='location-section'>
                                <div className='location-section-title'>
                                    <h4 className='inventory-card-title'>
                                        <Logo />
                                        Location
                                    </h4>
                                </div>
                                <div className='custom-suport-data-three'>
                                    <span>1 Commonwealth Ave</span>
                                    <span>Mt. Pearl, NL </span>
                                    <span>A1N 1W3, Canada </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='faq-s-root'>
                        <div className='faqs-section'>
                            <div className='help-center-title'>
                                <img
                                    src='/assets/slash/red.png'
                                    className='help-center-slash-img '
                                />
                                <h4>FAQ'S </h4>
                            </div>
                            {list?.map((val, index) => {
                                return (
                                    <div key={index} className='content'>
                                        <input
                                            type='radio'
                                            name='Accordian'
                                            id={`${index}list`}
                                            className='radio-hide'
                                            checked={index === activeindex}
                                            onChange={() =>
                                                AccoradianHendler(index)
                                            }
                                            onClick={() =>
                                                AccoradianHendler(index)
                                            }
                                        />
                                        <label
                                            htmlFor={`${index}list`}
                                            className='accordion-label'
                                        >
                                            <img
                                                src='/assets/arrow/right.png'
                                                className='accordion-label-icon'
                                            />
                                            {val.head}
                                        </label>
                                        <div
                                            className='expandable'
                                            id={`${index}+nave`}
                                        >
                                            <p className='m-2 ml-10'>
                                                {' '}
                                                {val.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='faq-help-center-section'>
                            <div className='help-center-title'>
                                <img
                                    src='/assets/slash/red.png'
                                    className='help-center-slash-img '
                                />
                                <h4>Help Centre</h4>
                            </div>
                            <div className='help-center-contain-wraper'>
                                <span>
                                    At{' '}
                                    <span className='features-title-color'>
                                        Revvit
                                    </span>
                                    , we strive to offer the best-in-class
                                    experience for our customers. Our Help
                                    Center is designed to provide comprehensive
                                    support on our inventory and services.
                                </span>
                                <div className='help-center-contain'>
                                    <p className='help-center-contain-data'>
                                        For additional support or inquiries,
                                        please feel free to contact our customer
                                        support or chat with one of our online
                                        support representatives. Remember, we
                                        are always here to assist you in any way
                                        we can.
                                    </p>
                                    <div className='help-center-button-wraper '>
                                        <button className='help-center-btn'>
                                            Visit Help Centre
                                        </button>
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

export default Hero
