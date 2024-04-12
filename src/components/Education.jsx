import EducationItem from "./EducationItem";

const data = [
	{
		year: "June - December 2023",
		title: "Frontend Web Development",
		degree: "Certificate",
		school: "Re:Coded - New York",
		location: "Remote",
		duration: "6 months",
	},
	{
		year: "2014 - 2016",
		title: "French as a Foreign Language and Didactics of Languages-Cultures",
		degree: "Master degree",
		school: "Mohamed Khider University of Biskra",
		location: "On Site",
        duration: "2 years",
		details: "",
	},
	{
		year: "2011 - 2014",
		title: "French Language",
		degree: "Bachelor degree",
		school: "Mohamed Khider University of Biskra",
		location: "On Site",
        duration: "3 years",
		details: "",
	},
];
const Education = () => {
	return (
		<div
			id="education"
			className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 text-gray-700">
            <h1 className="text-4xl font-bold text-center pb-14
             ">Education</h1>
			{data.map((item, index) => (
				<EducationItem
					key={index}
					year={item.year}
					school={item.school}
					title={item.title}
					degree={item.degree}
                    duration={item.duration}
                    location={item.location}
					details={item.details}
				/>
			))}
		</div>
	);
};

export default Education;
