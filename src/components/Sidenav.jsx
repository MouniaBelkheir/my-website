import { AiOutlineHome, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { GrProjects } from "react-icons/gr";
import { MdOutlineWorkOutline } from "react-icons/md";
import Rightsidenav from "./Rightsidenav";
import Leftnavicons from "./Leftnavicons";
import { PiStudent } from "react-icons/pi";

const Sidenav = () => {
	const navitems = [
		{
			name: "Home",
			href: "#main",
			icon: AiOutlineHome,
		},
		{
			name: "Work",
			href: "#work",
			icon: MdOutlineWorkOutline,
		},
		{
			name: "Projects",
			href: "#projects",
			icon: GrProjects,
		},
		{
			name: "Education",
			href: "#education",
			icon: PiStudent,
		},
		// {
		// 	name: "Resume",
		// 	href: "#resume",
		// 	icon: BsPerson,
		// },
		{
			name: "Contact",
			href: "#contact",
			icon: AiOutlineMail,
		},
	];
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};
	return (
		// On small screen
		<div>
			<AiOutlineMenu
				onClick={handleNav}
				className="fixed top-4 right-4 z-[99] md:hidden"
			/>
			{nav ? (
				<div className="fixed w-full h-screen bg-white flex flex-col justify-center items-center z-20 text-gray-800">
					{navitems.map((item, index) => (
						<Rightsidenav
							key={index}
							name={item.name}
							href={item.href}
							Icon={item.icon}
							handleNav={handleNav}
						/>
					))}
				</div>
			) : (
				""
			)}
			{/* side icons in md and lg screen: */}
			<div className="md:block hidden fixed top-[20%] z-10">
				<div className="flex flex-col">
					{navitems.map((item, index) => (
						<Leftnavicons
							key={index}
							href={item.href}
							Icon={item.icon}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidenav;
