import React from "react"
import { Outlet } from "react-router-dom"

const UsersOutlet = () => {
	return (
		<div className='min-h-screen bg-white'>
			<div className='mx-auto px-[30px]'>
				<Outlet />
			</div>
		</div>
	)
}

export default UsersOutlet