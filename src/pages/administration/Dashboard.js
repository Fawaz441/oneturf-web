import { Summary, EstateSignup,Review } from 'components/administration/dashboard'
import React from 'react'
import AdminWrapper from './AdminWrapper'

const signups = [
    { name: "Oral Estate", address: "Onigbongbo Community, Lekki Ajah Expressway, Lagos" },
    { name: "Ogbongbo Estate", address: "Onigbongbo Community, Lekki Ajah Expressway, Lagos" },
]

const Dashboard = () => {
    return (
        <AdminWrapper>
            <div>
                <h2 className='text-dark text-[35px] leading-[52.5px] mb-5 font-bold'>Dashboard</h2>
                <div className='flex flex-col space-y-[30px] 2xl:space-y-0 2xl:flex-row 2xl:space-x-[30px]'>
                    <div className='max-w-[757px]'>
                        <Summary />
                        <div className='w-full py-[27px] px-10 mt-10 h-[302px] rounded-[20px] bg-white shadow-large'>
                            <h5 className='text-black font-semibold text-[19px]'>Revenue this week</h5>
                        </div>
                        <div className='my-10'>
                            <h3 className='text-black text-25 font-bold mb-[27px]'>New Estate Sign ups</h3>
                            <div className='flex flex-col space-y-5'>
                                {signups.map((signup, index) => (
                                    <EstateSignup
                                        name={signup.name}
                                        address={signup.address}
                                        key={index}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='2xl:max-w-[261px] 2xl:mb-0 !mb-5 self-start py-[26px] px-5 bg-white shadow-shadow'>
                        <h4 className="font-bold text-xl text-black mb-[10px]">Reviews</h4>
                        <div className="flex flex-col space-y-5">
                        <Review/>
                        <Review/>
                        <Review/>
                        <Review/>
                        </div>
                    </div>
                </div>
            </div>
        </AdminWrapper>
    )
}

export default Dashboard