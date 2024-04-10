import PropTypes from "prop-types";

const ProjectItem = ({ image, title, website, details }) => {
	return (
		<div className=" relative flex items-center justify-center h-auto w-full sha">
			<img
				src={image}
				alt={title}
			/>
			<div>

			<h3>
				{title}
			</h3>
			</div>
			<p className="my-2 text-stone-600">{details}</p>
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
