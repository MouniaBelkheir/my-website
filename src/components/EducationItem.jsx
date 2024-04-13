import PropTypes from "prop-types";

const EducationItem = ({ year, title, duration, degree, school, location }) => {
	return (
		<ol className="flex flex-col md:flex-row relative border-pink-800 px-6">
			<li className="mb-4 ml-4 ">
				<div className="absolute w-3 h-3 bg-pink-700 rounded-full mt-1.5 -left-1.5 border-white" />
				<p className="flex flex-wrap gap-4 flex-row justify-start text-sm pb-2">
					<span className="inline-block px-2 py-1 font-semibold text-white bg-pink-600/65 rounded-lg">
						{year}
					</span>
					<span className="text-lg font-semibold text-pink-700">{title}</span>
				</p>
				<p className="mb-1">
					<span className="my-2 text-stone-700 font-medium ">{school} </span>
					<span className="italic pl-4 text-stone-600">{location}</span>
				</p>
				<p className="pb-4">
					<span>{degree}</span>
					<span className="my-1.5 text-sm leading-none text-stone-500 pl-4">
						{duration}
					</span>
				</p>
			</li>
		</ol>
	);
};

EducationItem.propTypes = {
	year: PropTypes.any,
	title: PropTypes.string,
	degree: PropTypes.string,
	school: PropTypes.string,
	location: PropTypes.array,
	details: PropTypes.string,
	duration: PropTypes.string,
};

export default EducationItem;
