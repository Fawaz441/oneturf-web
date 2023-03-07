import React from "react"
import home from "assets/images/home.png"
import { ReactComponent as LogoWhite } from "assets/icons/logos/oneturf-white.svg"
import { ReactComponent as PlayStore } from "assets/icons/logos/playstore.svg"
import { ReactComponent as AppStore } from "assets/icons/logos/appstore.svg"
import { ReactComponent as Facebook } from "assets/icons/social/facebook.svg"
import { ReactComponent as Instagram } from "assets/icons/social/instagram.svg"
import { ReactComponent as Twitter } from "assets/icons/social/twitter.svg"
import Button from "components/general/Button"
import { useNavigate } from "react-router-dom"
import { pageRoutes } from "utils/constants"
import Wrapper from "components/general/Wrapper"

const Invitation = () => {
	const navigate = useNavigate()
	return (
		<Wrapper>
			<div className='bg-white flex pt-[11vh] justify-center mb-5'>
				<div className='w-[577px] shadowed bg-white relative'>
					<div className='h-[168px] relative pt-[50px] pl-[47px]'>
						<img src={home} alt="home" className="object-cover absolute h-full w-full left-0 top-0" />
						<div className="absolute h-full w-full left-0 top-0 bg-[#5F5F5F]/[.6]" />
						<LogoWhite />
					</div>
					<div className='pt-[50px] px-[47px] flex flex-col space-y-8 pb-[151px]'>
						<h3 className='font-semibold text-primary text-30'>Dear Sisanmi</h3>
						<p className='text-black'>Oral estate have been invited to join Oneturf<br /><br />
							Click the link below to complete the registeration</p>
						<Button text="Complete registration" className={"w-[318px]"}
							onClick={() => navigate(pageRoutes.registration.default)}
						/>
					</div>
					<div className="absolute w-full px-[51px] bottom-0 left-0 bg-primary h-[72px] rounded-tl-[20px] rounded-tr-[20px] flex items-center justify-between">
						<div className='flex space-x-[43.89px] items-center'>
							<div className="flex items-center space-x-[10px]">
								<PlayStore />
								<div className='flex flex-col'>
									<h4 className='text-[8px]  font-medium text-white'>Download on</h4>
									<h2 className='text-base  font-medium text-white'>Playstore</h2>
								</div>
							</div>
							<div className="flex items-center space-x-[10px]">
								<AppStore />
								<div className='flex flex-col'>
									<h4 className='text-[8px]  font-medium text-white'>Download on</h4>
									<h2 className='text-base  font-medium text-white'>App Store</h2>
								</div>
							</div>
						</div>
						<div className='hidden md:flex items-center space-x-4'>
							<Instagram />
							<Twitter />
							<Facebook />
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export default Invitation