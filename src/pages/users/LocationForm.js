import Button from "components/general/Button"
import Wrapper from "components/general/Wrapper"
import Input from "components/inputs/Input"
import { FormSteps } from "components/users"
import React from "react"
import { useNavigate } from 'react-router-dom'

const LocationForm = () => {
    const navigate = useNavigate()
    return (
        <Wrapper>
            <div className="pt-[54px] md:pt-[64px] mx-auto w-full max-w-[354px] md:max-w-[497px] md:rounded-form">
                <FormSteps activeStep={2} />
                <div className="mt-[41.12px] md:p-[37px] md:shadow-shadow md:mb-6">
                    <h3 className="text-dark font-semibold text-30 mb-[22px]">Registration</h3>
                    <div className="flex flex-col space-y-[25px]">
                        <Input label="House number" placeholder="Number" />
                        <Input label="Street" placeholder="Street" />
                        <Input label="House type" placeholder="Flat" />
                        <Input label="Flat number" placeholder="Flat number" />
                    </div>
                    <div className="pt-[93.31px] flex items-center justify-center">
                        <Button text="Continue" fullWidth
                            onClick={() => navigate("/registration/occupants")}
                        />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default LocationForm