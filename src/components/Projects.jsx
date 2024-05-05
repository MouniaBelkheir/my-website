import ProjectItem from "./ProjectItem";

const Projects = () => {
	const projects = [
		{
			image: "/the-movie.jpeg",
			title: "The Movie",
			website: "https://the-movie-mouniabelkheir.vercel.app/",
			github: "https://github.com/MouniaBelkheir/The-Movie",
			details: "Vite js - React js - TailwindCSS - TMDB-API",
		},
		{
			image: "/best-eats.jpeg",
			title: "Best Eats",
			website: "https://best-eats-xi.vercel.app/",
			github: "https://github.com/MouniaBelkheir/BestEat",
			details: "React js - TailwindCSS - Vite js",
		},
		{
			image: "/website.png",
			title: "Portfolio website",
			website: "https://mouniabelkheir.vercel.app/",
			github: "https://github.com/MouniaBelkheir/my-website",
			details: "React js - TailwindCSS - Vite js",
		},
		{
			image: "/studentStore.png",
			title: "Student store",
			website: "https://studentsstore.vercel.app/",
			github: "https://github.com/202306-NEA-DZ-FEW/StudentStore",
			details: "Next js - TailwindCSS - DaisyUI - Firebase - i18n",
		},
		{
			image: "/sougna.png",
			title: "Sougna",
			website: "https://sougna.vercel.app/",
			github: "https://github.com/202306-NEA-DZ-FEW/e-commerce-project-buy-or-die",
			details: "Next js - TailwindCSS - FireStore - Stripe",
		},
		{
			image: "/weather-app.jpeg",
			title: "Weather App",
			website: "https://weather-app-brown-rho.vercel.app/",
			github: "https://github.com/MouniaBelkheir/weather-app-react",
			details: "React js - TailwindCSS - OpenWeather API - Axios - Vite js",
		},
		{
			image: "/calculator.jpeg",
			title: "Simple Calculator",
			website: "https://calculator-two-sable-14.vercel.app/",
			github: "https://github.com/MouniaBelkheir/calculator",
			details: "JavaScript - HTML - CSS - Vite js",
		},
		{
			image: "/simple-omelette-recipe.png",
			title: " Recipe page",
			website: "https://recipe-five-rouge.vercel.app/",
			github: "https://github.com/MouniaBelkheir/recipe",
			details: "HTML - TailwindCSS",
		},
		{
			image: "/theMenu.png",
			title: "The Menu",
			website: "https://the-menu-tau.vercel.app/",
			github: "https://github.com/MouniaBelkheir/The-Menu",
			details: "HTML - TailwindCSS",
		},
		{
			image: "/theBlog.png",
			title: "The Blog",
			website: "https://mouniabelkheir.github.io/theBlog/",
			github: "https://github.com/MouniaBelkheir/theBlog",
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
						github={item.github}
						details={item.details}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
