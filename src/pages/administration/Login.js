import React from 'react'
import { ReactComponent as LogoBlue } from "assets/icons/logos/oneturf-blue.svg"
import Input from 'components/inputs/Input'

const AdminLogin = () => {
    return (
        <div className='pt-[64px]'>
            <div className='mx-auto w-[497px] flex flex-col space-y-[62.4px]'>
                <div className='flex items-center justify-center'>
                    <LogoBlue />
                </div>
                <div className='w-full bg-white shadow-shadow p-[37px]'>
                    <h3 className='text-dark font-semibold text-[30px] mb-5'>Log in</h3>
                    <div className='flex flex-col space-y-6'>
                        <Input label="Email Address" placeholder={"sample@oneturf.com"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin