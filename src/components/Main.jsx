import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
const Main = () => {
	return (
		<div id="main">
			<img
				src="https://images.unsplash.com/photo-1712350529844-b953287c6c09?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="background"
				className="w-full h-screen object-cover"
			/>
			<div className="w-full h-screen absolute top-0 left-0 bg-white/50">
				<div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center text-center">
					<h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
						Hey.. I'm Mounia
					</h1>
					<h2 className="flex sm:text-3xl text-2xl font-semibold text-gray-800 p-4">
						I am
					</h2>
					<TypeAnimation
						sequence={[
							"a Frontend Web Developer ",
							4000,
							"an Education professional ",
							2000,
							"an Office Administrator ",
							2000,
						]}
						wrapper="div"
						cursor={false}
						speed={50}
						repeat={Infinity}
						className="sm:text-4xl text-3xl font-semibold text-gray-800"
					/>

					<div className="flex justify-evenly pt-10 max-w-[200px] w-full">
						<a
							href="https://www.linkedin.com/in/mouniabelkheir/"
							target="_blank">
							<FaLinkedin
								className="cursor-pointer"
								size={40}
							/>
						</a>
						<a
							href="https://github.com/MouniaBelkheir"
							target="_blank">
							<FaGithub
								className="cursor-pointer"
								size={40}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
