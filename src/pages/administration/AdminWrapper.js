import { SideNav, TopNav } from 'components/administration/navigation'
import React from 'react'

const AdminWrapper = ({ children }) => {
    return (
        <div className='min-h-screen'>
            <TopNav />
            <SideNav />
            <div className='pt-[124px] pl-[318px] bg-[#F5F5F5] min-h-screen pr-[68px]'>
                {children}
            </div>
        </div>
    )
}

export default AdminWrapper