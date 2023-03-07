import React from "react"
import { ReactComponent as ActiveFormStep } from "../../assets/images/active-form-step.svg"
import { ReactComponent as InactiveFormStep } from "../../assets/images/inactive-form-step.svg"

const FormStep = ({ number, text, isActive }) => {
    return (
        <div className='flex flex-col space-y-[8.39px] items-center justify-center'>
            <div className={`w-[46.85px] h-[46.85px] flex items-center justify-center rounded-full border-[0.84px] ${isActive ? "border-lightBlue" : ""}`}>
                <div className={`bg-[#E5E5E5] flex items-center rounded-full justify-center w-[41.83px] h-[41.83px] ${isActive ? 'bg-lightBlue' : ''}`}>
                    <span className={`font-semibold text-[#8B8B8B] text-[13.42px] ${isActive ? "!text-primary" : ""}`}>
                        {number}
                    </span>
                </div>
            </div>
            <span className={`text-[#8B8B8B] font-semibold text-center text-[11.74px] ${isActive ? "!text-primary" : ""}`}>{text}</span>
        </div>
    )
}

const FormSteps = ({ activeStep }) => {
    return (
        <div className='flex items-center justify-between space-x-[13.41px] max-w-[354px] mx-auto'>
            <FormStep number={1} text="Personal" isActive={activeStep >= 1} />
            <ActiveFormStep className="mt-[-16px]" />
            <FormStep number={2} text="Location" isActive={activeStep >= 2} />
            {activeStep === 3 ? <ActiveFormStep className="mt-[-16px]" /> : <InactiveFormStep className="mt-[-16px]" />}
            <FormStep number={3} text="Occupants" isActive={activeStep === 3} />
        </div>
    )
}

export default FormSteps