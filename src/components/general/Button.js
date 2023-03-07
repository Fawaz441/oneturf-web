import React from "react"
import clsx from "classnames"

const Button = ({ onClick, type = "button", text, fullWidth = false, className }) => {
	return (
		<button type={type}
			{...onClick && { onClick }}
			className={clsx("h-[54px] rounded-[30px] bg-primary text-white font-medium text-base border-none outline-none", className,
				{ "w-full": fullWidth }
			)}
		>
			{text}
		</button>

	)
}

export default Button