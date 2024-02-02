import React from 'react'

const HeaderLogo = ({ handleMenu }) => {
    return (
        <div className='handle-menu-root ' onClick={handleMenu}>
            <div className='header-logo-icon'>
                <img
                    src='/assets/slash/red.png'
                    alt='Logo'
                    className=' logo-icon-1'
                />
                <img
                    src='/assets/slash/red.png'
                    alt='Logo'
                    className=' logo-icon-2'
                />
                <img
                    src='/assets/slash/red.png'
                    alt='Logo'
                    className=' logo-icon-3 '
                />
            </div>
            <span>menu</span>
        </div>
    )
}

export default HeaderLogo
