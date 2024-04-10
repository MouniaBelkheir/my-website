import PropTypes from "prop-types";
const Rightsidenav = ({ name, href, Icon }) => {
	return (
		
			<a
				href={href}
				className="w-[75%] flex justify-center items-center rounded-full shadow-pink-600 shadow-md bg-pink-100/5 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
				<Icon size={20} />
				<span className="pl-4 ">{name}</span>
			</a>
		
	);
};
Rightsidenav.propTypes = {
	name: PropTypes.string,
	href: PropTypes.string,
	Icon: PropTypes.elementType
};

export default Rightsidenav;
