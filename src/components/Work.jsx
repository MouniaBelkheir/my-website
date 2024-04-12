import WorkItem from "./WorkItem";
const data = [
	{
		year: 2024,
		title: "Frontend Web Developer",
		duration: "",
		details:
			"New to the frontend web development journey, I'm dedicated to becoming one of the best. Specializing in HTML, CSS, JavaScript, React.js, Next.js, and Tailwind CSS, I craft strategic solutions for seamless digital experiences.",
	},
	{
		year: "Nov 2019 - Present",
		title: "Education Professional",
		duration: "5 years",
		details:
			"Experienced educator dedicated to inclusive teaching, adaptive learning, and community collaboration. Committed to lifelong learning and innovation, I inspire students for success in a dynamic world.",
	},
	{
		year: "Mar 2017 - Nov 2019",
		title: "Founder and Head of School",
		duration: "3 years",
		details:
			"Led institution, overseeing curriculum, administration, and compliance. Built a team for academic excellence and growth, adapted to trends, maintained strong community ties, ensuring transformative student experiences.",
	},
	{
		year: "Sep 2011 - Mar 2017",
		title: "Office administrator",
		duration: "6 years",
		details:
			"I managed documentation, organized meetings, and ensured compliance. Facilitated departmental communication and supported legal standards.",
	},
];
const Work = () => {
	return (
		<div
			id="work"
			className="max-w-[1040px] m-auto md:pl-20 px-9 py-16 text-gray-700">
			<h1 className="text-4xl font-bold text-center pb-10 ">Work experience</h1>
			{data.map((item, index) => (
				<WorkItem
					key={index}
					year={item.year}
					title={item.title}
					duration={item.duration}
					details={item.details}
				/>
			))}
		</div>
	);
};

export default Work;
