import ProjectItem from "./ProjectItem";

const Projects = () => {
	const projects = [
		{
			image: "/disney.png",
			title: "Disney Clone",
			website: "https://disney-clone-one-psi.vercel.app/",
			details: "Vite js - React js - TailwindCSS - TMDB",
		},
		{
			image: "/best-eats.jpeg",
			title: "Best Eats",
			website: "https://best-eats-xi.vercel.app/",
			details: "React js - TailwindCSS - Vite js",
		},
		{
			image: "/website.png",
			title: "Portfolio website",
			website: "https://mouniabelkheir.vercel.app/",
			details: "React js - TailwindCSS - Vite js",
		},
				{
			image: "/studentStore.png",
			title: "Student store",
			website: "https://studentsstore.vercel.app/",
			details: "Next js - TailwindCSS - DaisyUI - Firebase - i18n",
		},
		{
			image: "/sougna.png",
			title: "Sougna",
			website: "https://sougna.vercel.app/",
			details: "Next js - TailwindCSS - FireStore - Stripe",
		},
		{
			image: "/weather-app.jpeg",
			title: "Weather App",
			website: "https://weather-app-brown-rho.vercel.app/",
			details: "React js - TailwindCSS - OpenWeather API - Axios - Vite js",
		},
		{
			image: "/calculator.jpeg",
			title: "Simple Calculator",
			website: "https://calculator-two-sable-14.vercel.app/",
			details: "JavaScript - HTML - CSS - Vite js",
		},
		{
			image: "/simple-omelette-recipe.png",
			title: " Recipe page",
			website: "https://recipe-five-rouge.vercel.app/",
			details: "HTML - TailwindCSS",
		},
		{
			image: "/theMenu.png",
			title: "The Menu",
			website: "https://the-menu-tau.vercel.app/",
			details: "HTML - TailwindCSS",
		},
		{
			image: "/theBlog.png",
			title: "The Blog",
			website: "https://mouniabelkheir.github.io/theBlog/",
			details: "Vite js - React js - TailwindCSS",
		},
	];
	return (
		<div
			id="projects"
			className="max-w-[1040] m-auto md:px-32 pb-16 text-gray-700">
			<h1 className="text-4xl font-bold text-center pb-20 ">Projects</h1>
			<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
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
