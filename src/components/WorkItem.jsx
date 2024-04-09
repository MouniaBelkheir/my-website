import PropTypes from "prop-types";

const WorkItem = ({ year, title, duration, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-pink-800">
      <li>
        <div />
        <p>
          <span>{year}</span>
          <span>{title}</span>
          <span>{duration}</span>
        </p>
        <p>{details}</p>
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
