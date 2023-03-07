import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import clsx from 'classnames'
import Button from "components/general/Button"
import Wrapper from "components/general/Wrapper"
import Input from "components/inputs/Input"
import { FormSteps, SelectedOccupants } from "components/users"

const OccupantsForm = () => {
    const [occupants, setOccupants] = useState([{ name: "Jane", relationship: "Daughter" }])
    const hasOccupants = occupants.length > 0
    const navigate = useNavigate()
    return (
        <Wrapper>
            <div className="pt-[54px] md:pt-[64px] mx-auto w-full max-w-[354px] lg:max-w-[866px] md:rounded-form">
                <FormSteps activeStep={3} />
                <div className="mt-[41.12px] md:p-[37px] md:shadow-shadow md:mb-6">
                    <h3 className={clsx("text-dark font-semibold text-30 mb-[26.03px] lg:mb-[23px]",
                        { "!lg:mb-[40px]": hasOccupants }
                    )}>Add Occupants</h3>
                    {hasOccupants && <div className="mb-9 lg:mb-[23px]">
                        <SelectedOccupants occupants={occupants} />
                    </div>}
                    <div className="flex flex-col space-y-[25px] lg:flex-row lg:space-y-0 lg:space-x-[10px]">
                        <Input label="First name" placeholder="First name" />
                        <Input label="Last name" placeholder="Last name" />
                        <Input label="Relationship" placeholder="Daughter" />
                    </div>
                    <div className="pt-[93.31px] lg:pt-10 flex items-center justify-center">
                        <Button text="Submit" fullWidth className={"lg:!w-[410px]"}
                            onClick={() => navigate("/registration/successful-registration")}
                        />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default OccupantsForm