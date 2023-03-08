import Button from 'components/general/Button'
import React from 'react'

const EstateSignup = ({ name, address }) => {
    return (
        <div className='shadow-small bg-white rounded-10 p-[30px] flex items-center justify-between'>
            <div className="flex flex-col space-y-[5px]">
                <h4 className='text-xl font-semibold text-black'>{name}</h4>
                <p className='text-[12px] font-medium text-[#565656]'>{address}</p>
            </div>
            <div className='flex items-center space-x-[10px]'>
                <Button text={"Accept"} className="min-w-[116px]" />
                <Button text={"Delete"} className="min-w-[124px] !bg-[#2651EA]/[.17] !text-primary" />
            </div>
        </div>
    )
}

export default EstateSignup