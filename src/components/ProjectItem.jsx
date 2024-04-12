import PropTypes from "prop-types";

const ProjectItem = ({ image, title, website, details }) => {
	return (
		<div className=" relative flex items-center justify-center h-auto w-[80%] shadow-md mx-auto shadow-pink-500 rounded-xl group hover:bg-gradient-to-r from-pink-50 to-pink-300 ">
			<img
				src={image}
				alt={title}
				className="rounded-xl group-hover:opacity-10 w-72 h-52  "
			/>
			<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
				<h3 className="text-xl font-bold text-center tracking-wider">
					{title}
				</h3>
				<p className=" text-stone-600 pb-4 text-xs pt-2 text-center">
					{details}
				</p>
				<a
					href={website}
					target="_blank">
					<p className="text-center p-3 bg-white rounded-lg text-gray-700 font-bold cursor-pointer text-md">
						Website
					</p>
				</a>
			</div>
		</div>
	);
};
ProjectItem.propTypes = {
	image: PropTypes.any,
	title: PropTypes.string,
	website: PropTypes.string,
	details: PropTypes.string,
};
export default ProjectItem;
