import PropTypes from "prop-types";
import { FaGlobe } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const ProjectItem = ({ image, title, website, github, details }) => {
	return (
		<div className=" relative flex items-center justify-center h-auto w-auto shadow-md mx-auto rounded-lg group hover:bg-gradient-to-r from-pink-50 to-pink-300 ">
			<img
				src={image}
				alt={title}
				className="rounded-lg group-hover:opacity-10 w-72 h-52  "
			/>
			<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
				<h3 className="text-xl font-bold text-center tracking-wider">
					{title}
				</h3>
				<p className=" text-stone-600 pb-4 text-xs font-semibold pt-2 text-center">
					{details}
				</p>
				<div className="flex justify-around items-center">
					<a href={website} target="_blank">
						<FaGlobe size={25} className="cursor-pointer" />
					</a>
					<a href={github} target="_blank">
						<IoLogoGithub size={30} className="cursor-pointer" />
					</a>
				</div>
			</div>
		</div>
	);
};
ProjectItem.propTypes = {
	image: PropTypes.elementType,
	title: PropTypes.string,
	website: PropTypes.string,
	github: PropTypes.string,
	details: PropTypes.string,
};
export default ProjectItem;
