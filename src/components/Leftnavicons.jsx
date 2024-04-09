import PropTypes from "prop-types";

const Leftnavicons = ({ Icon, href }) => {
	return (
		<a
			href={href}
			className="rounded-full shadow-lg shadow-pink-600  bg-white m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
			<Icon size={25} />
		</a>
	);
};
Leftnavicons.propTypes = {
	href: PropTypes.string,
	Icon: PropTypes.elementType,
};

export default Leftnavicons;
