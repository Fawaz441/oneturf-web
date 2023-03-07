import React from 'react'

const SelectedOccupant = ({ occupant }) => {
    return (
        <div className='rounded-5 py-[17.28px] px-5 flex items-center lg:w-[416px] justify-between border border-[#D7D7D7]'>
            <div className='flex flex-col space-y-[2.53px] lg:items-center lg:flex-row lg:space-y-0'>
                <h4 className='lg:w-[111px] lg:text-center lg:overflow-hidden lg:text-ellipsis font-medium text-sm text-dark'>{occupant.name}</h4>
                <div className='hidden lg:block mx-5 h-[29.5px] w-[1px] bg-[#A8A8A8]/[.9]' />
                <span className='text-[12px] text-dark'>{occupant.relationship}</span>
            </div>
            <div className='flex items-center space-x-[17px]'>
                <button type="button" className="flex items-center justify-center bg-lightBlue rounded-5 py-[9px] px-5">
                    <span className='text-extraBlue text-13 font-medium'>Edit</span>
                </button>
                <button type="button" className='text-13 font-medium text-extraBlue'>
                    Delete
                </button>
            </div>
        </div>
    )
}

const SelectedOccupants = ({ occupants }) => {
    return (
        <ul className='flex flex-col space-y-1'>
            {occupants.map((occupant, index) => (
                <SelectedOccupant key={index} occupant={occupant} />
            ))}
        </ul>
    )
}

export default SelectedOccupants