import React from 'react'
import { ReactComponent as LogoBlue } from "assets/icons/logos/oneturf-blue.svg"
import Input from 'components/inputs/Input'
import Button from 'components/general/Button'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const navigate = useNavigate()


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
                        <Input label="Password" type="password" />
                    </div>
                    <div className='mt-9 pb-[17px]'>
                        <Button text="Log in" fullWidth onClick={() => navigate("/administration/dashboard")} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin