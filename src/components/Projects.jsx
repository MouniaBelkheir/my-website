import ProjectItem from "./ProjectItem";

const Projects = () => {
	const projects = [
		{
			image: "/src/assets/images/website.png",
			title: "Portfolio website",
			website: "",
			details: "React js - TailwindCSS - Vite js",
		},
		{
			image: "/src/assets/images/sougna.png",
			title: "Sougna",
			website: "https://sougna.vercel.app/",
			details: "Next js - TailwindCSS - FireStore - Stripe",
		},
		{
			image: "/src/assets/images/studentStore.png",
			title: "Student store",
			website: "https://studentsstore.vercel.app/",
			details: "Next js - TailwindCSS - DaisyUI - Firebase - i18n",
		},
		{
			image: "/src/assets/images/simple-omelette-recipe.png",
			title: " Recipe page",
			website: "https://recipe-five-rouge.vercel.app/",
			details: "HTML - TailwindCSS",
		},
		{
			image: "/src/assets/images/theBlog.png",
			title: "The Blog",
			website: "https://mouniabelkheir.github.io/theBlog/",
			details: "Vite js - React js - TailwindCSS",
		},
		{
			image: "/src/assets/images/disney.png",
			title: "Disney Clone",
			website: "https://disney-clone-one-psi.vercel.app/",
			details: "Vite js - React js - TailwindCSS",
		},
		{
			image: "/src/assets/images/theMenu.png",
			title: "The Menu",
			website: "https://the-menu-tau.vercel.app/",
			details: "HTML - TailwindCSS",
		},
		
	];
	return (
		<div
			id="projects"
			className="max-w-[1040] m-auto md:px-32 pb-16 text-gray-700">
			<h1 className="text-4xl font-bold text-center pb-20 ">Projects</h1>
			<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 ">
				{projects.map((item, index) => (
					<ProjectItem
						key={index}
						image={item.image}
						title={item.title}
						website={item.website}
						details={item.details}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
