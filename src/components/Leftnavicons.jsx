import PropTypes from "prop-types";

const Leftnavicons = ({ Icon, href, name }) => {
	return (
		<a
			href={href}
			className="group relative flex items-center rounded-full shadow-lg shadow-pink-600 bg-white m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
			<Icon size={20} />
			<span className="absolute left-full ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-800 bg-white shadow-lg px-2 py-1 rounded-md">
				{name}
			</span>
		</a>
	);
};

Leftnavicons.propTypes = {
	href: PropTypes.string,
	Icon: PropTypes.elementType,
	name: PropTypes.string,
};

export default Leftnavicons;
