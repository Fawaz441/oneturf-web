import React from 'react'
import {ReactComponent as Star} from 'assets/icons/admin/star.svg'

const Review = () => {
    return(
        <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-4">
                <div className="h-[34px] w-[34px] rounded-full flex items-center justify-center bg-[#ECE0FD]">
                    <span className="font-bold text-[18px] leading-[24.59px] text-[#981CEB]">K</span>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-15 font-bold leading-[22.5px] text-black">Kehinde Matthew</h3>
                    <div className="flex items-center space-x-[1.57px]">
                        <Star className="fill-gold"/>
                        <Star className="fill-gold"/>
                        <Star className="fill-gold"/>
                        <Star className="fill-gold"/>
                        <Star className="fill-empty"/>
                    </div>
                </div>
            </div>
            <p className="max-w-[400px] 2xl:max-w-[221px] text-black text-[9px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate rutrum nunc,
                 at hendrerit felis tincidunt ac. Donec rutrum euismod quam, nec sagittis tellus venenatis tempor.
            </p>
        </div>
    )
}

export default Review