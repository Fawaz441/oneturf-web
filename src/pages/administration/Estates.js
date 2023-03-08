import { Summary } from 'components/administration/estates'
import React from 'react'
import { ReactComponent as Search } from 'assets/icons/admin/search.svg'
import { ReactComponent as Empty } from 'assets/images/empty.svg'
import AdminWrapper from './AdminWrapper'
import Button from 'components/general/Button'

const Estates = () => {
    return (
        <AdminWrapper>
            <div>
                <h2 className='text-dark text-[35px] leading-[52.5px] mb-5 font-bold'>Estates</h2>
                <div className='flex flex-col space-y-[30px] 2xl:space-y-0 2xl:flex-row 2xl:space-x-[30px]'>
                    <div className='max-w-[757px]'>
                        <Summary />
                    </div>
                </div>
                <div className="mt-10 flex items-center justify-between">
                    <h2 className="text-25 text-black font-bold">All estates</h2>
                    <div className='py-[15px] flex items-center space-x-[12.2px] px-[23px] border-[1.5px] border-[#A0A4A8] rounded-[20px]'>
                        <Search />
                        <input className="border-none bg-transparent flex-1 outline-none text-sm text-black placeholder:text-[#A0A4A8]"
                            placeholder="Search Estate"
                        />
                        <div>
                        </div>
                    </div>
                </div>
                <div className='my-[48.17px] flex items-center justify-center'>
                    <div className='flex flex-col space-y-[29.67px]'>
                        <div className='flex items-center justify-center'>
                            <Empty />
                        </div>
                        <p className='text-center text-[#565656] font-semibold text-base'>No estates available</p>
                        <Button className={"min-w-[254.52px]"} text="Add estate" />
                    </div>
                </div>
            </div>
        </AdminWrapper>
    )
}

export default Estates