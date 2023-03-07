import React from 'react'

const Select = ({ label, placeholder, options }) => {
    return (
        <div className='flex flex-col space-y-[10px]'>
            {label && <span className='text-dark text-base'>{label}</span>}
            <select
                placeholder={placeholder}
                className='border-none outline-none text-base placeholder:text-[#8B8B8B] h-[60px] w-full bg-Select rounded-[5px] px-5' />
        </div>
    )
}

export default Select