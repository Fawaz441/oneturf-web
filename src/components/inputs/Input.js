import React from 'react'

const Input = ({ label, placeholder }) => {
    return (
        <div className='flex flex-col space-y-[10px]'>
            {label && <span className='text-dark text-base'>{label}</span>}
            <input
                placeholder={placeholder}
                className='border-none outline-none text-base placeholder:text-[#8B8B8B] h-[60px] w-full bg-input rounded-[5px] px-5' />
        </div>
    )
}

export default Input