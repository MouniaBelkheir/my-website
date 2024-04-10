import PropTypes from "prop-types";

const WorkItem = ({ year, title, duration, details }) => {
	return (
		<ol className="flex flex-col md:flex-row relative border-pink-800">
			<li className="mb-10 ml-4 ">
				<div className="absolute w-3 h-3 bg-pink-700 rounded-full mt-1.5 -left-1.5 border-white" />
				<p className="flex flex-wrap gap-4 flex-row justify-start text-sm">
					<span className="inline-block px-2 py-1 font-semibold text-white bg-pink-600/65 rounded-lg">
						{year}
					</span>
					<span className="text-lg font-semibold text-pink-700">{title}</span>
					<span className="my-1.5 text-sm leading-none text-stone-500">
						{duration}
					</span>
				</p>
				<p className="my-2 text-stone-600">{details}</p>
			</li>
		</ol>
	);
};

WorkItem.propTypes = {
	year: PropTypes.any,
	title: PropTypes.string,
	duration: PropTypes.array,
	details: PropTypes.string,
};

export default WorkItem;
