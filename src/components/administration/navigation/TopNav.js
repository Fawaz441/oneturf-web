import React from 'react'
import { ReactComponent as LogoBlue } from "assets/icons/logos/oneturf-blue.svg"


const TopNav = () => {
    return (
        <div className='h-[78px] fixed top-0 w-full z-[3] bg-white flex items-center justify-between pl-[39px] pr-[68px]'>
            <LogoBlue />
            <div className='flex items-center space-x-3'>
                <span className='font-semibold text-black text-base'>User's name</span>
                <div className='h-[60px] w-[60px] rounded-full bg-[grey]' />
            </div>
        </div>
    )
}

export default TopNav