import { AiOutlineHome, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { MdOutlineWorkOutline } from "react-icons/md";

const Sidenav = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};
	return (
		// On small screen
		<div>
			<AiOutlineMenu
				onClick={handleNav}
				className="absolute top-4 right-4 z-[99] md:hidden"
			/>
			{nav ? (
				<div className="fixed w-full h-screen bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-sky-950 via-purple-300 to-violet-900] flex flex-col justify-center items-center z-20 text-white">
					<a
						href="#main"
						className="w-[75%] flex justify-center items-center rounded-full shadow-white shadow-inner m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
						<AiOutlineHome size={25} />
						<span className="pl-4 ">Home</span>
					</a>
					<a
						href="#work"
						className="w-[75%] flex justify-center items-center rounded-full shadow-white shadow-inner m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
						<MdOutlineWorkOutline size={25} />
						<span className="pl-4 ">Work</span>
					</a>
					<a
						href="#projects"
						className="w-[75%] flex justify-center items-center rounded-full shadow-white shadow-inner m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
						<GrProjects size={20} />
						<span className="pl-4 ">Projects</span>
					</a>
					<a
						href="#resume"
						className="w-[75%] flex justify-center items-center rounded-full shadow-white shadow-inner m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
						<BsPerson size={25} />
						<span className="pl-4 ">Resume</span>
					</a>
					<a
						href="#contact"
						className="w-[75%] flex justify-center items-center rounded-full shadow-white shadow-inner m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
						<AiOutlineMail size={25} />
						<span className="pl-4 ">Contact</span>
					</a>
				</div>
			) : (
				""
			)}
			{/* side icons in md and lg screen: */}
			<div className="md:block hidden fixed top-[25%] z-10">
				<div className="flex flex-col">
					<a href="#main" className="rounded-full shadow-lg shadow-pink-800  bg-white m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
						<AiOutlineHome size={25} />
					</a>
					<a href="#work" className="rounded-full shadow-lg shadow-pink-800  bg-white m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
					<MdOutlineWorkOutline size={25} />
					</a>
					<a href="#projects" className="rounded-full shadow-lg shadow-pink-800  bg-white m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
					<GrProjects size={20} />
					</a>
					<a href="#resume" className="rounded-full shadow-lg shadow-pink-800  bg-white m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
					<BsPerson size={25} />
					</a>
					<a href="#contact" className="rounded-full shadow-lg shadow-pink-800  bg-white m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
					<AiOutlineMail size={25} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Sidenav;
