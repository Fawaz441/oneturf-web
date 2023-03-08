import React from 'react'
import clsx from 'classnames'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Dashboard } from 'assets/icons/admin/dashboard.svg'
import { ReactComponent as Home } from 'assets/icons/admin/home.svg'
import { ReactComponent as Market } from 'assets/icons/admin/market.svg'
import { ReactComponent as Billing } from 'assets/icons/admin/billing.svg'

const routes = [
    { icon: <Dashboard className='fill-current' />, text: "Dashboard", to: "/administration/dashboard" },
    { icon: <Home className='fill-current' />, text: "Estates", to: "/administration/estates" },
    { icon: <Market className='fill-current' />, text: "Market place", to: "/administration/market" },
    { icon: <Dashboard className='fill-current' />, text: "Licensing", to: "/administration/licensing" },
    { icon: <Billing className='fill-current' />, text: "Billing", to: "/administration/billing" },
]

const SideNav = () => {
    return (
        <div className='w-[268px] pt-[78px] bg-white fixed left-0 top-0 h-screen'>
            <div className='flex flex-col space-y-3 pl-[39px] pt-[48px]'>
                {routes.map((route, index) => (
                    <NavLink
                        to={route.to}
                        key={index} className={({ isActive }) => clsx("fill-inactive h-[38px] border-r-[5px] border-r-[transparent] flex items-center text-inactive",
                            { "!fill-primary !text-primary !border-r-primary": isActive })}>
                        <div className='h-6 w-6 mr-5 flex justify-center items-center'>
                            {route.icon}
                        </div>
                        <span className='font-semibold text-base'>{route.text}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default SideNav