import React from "react";
import { ReactComponent as GrowthArrow } from "assets/icons/admin/growth-arrow.svg"
import { ReactComponent as DecliningArrow } from "assets/icons/admin/declining-arrow.svg"
import { ReactComponent as Users } from "assets/icons/admin/users.svg"
import { ReactComponent as Estate } from "assets/icons/admin/estate.svg"

const Summary = () => {
    return (
        <div className="w-full flex space-x-5">
            <div className="min-w-[281px] h-[151px] flex flex-col space-y-[5px] bg-black rounded-10 p-[30px]">
                <h6 className="text-offWhite font-semibold text-15 leading-[20.49px]">Total Estates</h6>
                <h3 className="font-bold text-[30px] leading-[40.98px] text-white">0</h3>
                <div className="flex items-center space-x-[6.74px]">
                    <GrowthArrow />
                    <span className="text-green text-15 font-semibold leading-[20.49px]">0.00%</span>
                </div>
            </div>
            <div className="min-w-[218px] shadow-large rounded-10 bg-white flex space-x-5 h-[151px] px-5 py-[30px]">
                <div className="flex flex-col space-y-[5px]">
                    <h6 className="text-15 leading-[20.49px] font-semibold text-inactive">Houses</h6>
                    <h3 className="font-bold text-[30px] leading-[40.98px]">0</h3>
                </div>
            </div>
            <div className="min-w-[218px] shadow-large rounded-10 bg-white flex space-x-5 h-[151px] px-5 py-[30px]">
                <div className="flex flex-col space-y-[5px]">
                    <h6 className="text-15 leading-[20.49px] font-semibold text-inactive">Residents</h6>
                    <h3 className="font-bold text-[30px] leading-[40.98px]">0</h3>
                    <div className="flex space-x-[4.43px] items-center">
                        <GrowthArrow />
                        <span className="text-green leading-[20.49px] font-semibold text-15">0.00%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary