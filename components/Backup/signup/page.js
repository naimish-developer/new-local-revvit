'use client'

import Link from 'next/link'

const Page = () => {
    return (
        <div className='login-root'>
            <div className='login-root-inner'>
                <div className='login-Form-wraper'>
                    <div className='form-logo-wraper'>
                        <img
                            src='/assets/logo/revvit-logo-2.png'
                            alt='Logo'
                            className='title--image'
                        />
                        <h1>Welcome</h1>
                    </div>

                    <div className='form-title'>
                        <span>Sign in to continue </span>
                        <Link href='/login'>
                            <span>Login Here</span>
                        </Link>
                    </div>

                    <div className='form-fild-wraper'>
                        <input
                            className='form-fild  form-email'
                            type='email'
                            placeholder='email address'
                        />
                        <input
                            className='form-fild form-password'
                            type='password'
                            placeholder='password'
                        />
                    </div>
                    <Link href='https://app-revvit.vercel.app/' target='_blank'>
                        <div className='btn-wraper flex-between'>
                            <button className='login-btn'> Login </button>
                        </div>
                    </Link>

                    <div className='devider-wraper'>
                        <hr className='devider-line' />
                        <span className='devider-contant'> or </span>
                        <hr className='devider-line' />
                    </div>

                    <div className='social-lodin-wraper'>
                        <span>Social Media Login </span>
                        <div className='social-media-icon-wraper'>
                            <Link href='/signup'>
                                <img
                                    src='/assets/Form/goolge.webp'
                                    alt='social-meddia-login'
                                    className='social-login-icon'
                                />
                            </Link>
                            <Link href='/signup'>
                                <img
                                    src='/assets/Form/facebook.webp'
                                    alt='social-meddia-login'
                                    className='social-login-icon'
                                />
                            </Link>
                            <Link href='/signup'>
                                <img
                                    src='/assets/Form/apple.webp'
                                    alt='social-meddia-login'
                                    className='social-login-icon'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
