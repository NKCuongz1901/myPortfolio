import { FaGithub } from "react-icons/fa";
import project1 from "../assets/img/avt.jpg";
import Reveal from "./reveal";

const Portfolio = () => {
    const projects = [
        {
            img: project1,
            title: 'Project #01',
            description: 'Lorem is numbs',
            links: {
                site: "#",
                github: "#"

            }
        },
        {
            img: project1,
            title: 'Project #01',
            description: 'Lorem is numbs',
            links: {
                site: "#",
                github: "#"

            }
        },
        {
            img: project1,
            title: 'Project #01',
            description: 'Lorem is numbs',
            links: {
                site: "#",
                github: "#"

            }
        },
        {
            img: project1,
            title: 'Project #01',
            description: 'Lorem is numbs',
            links: {
                site: "#",
                github: "#"

            }
        },
    ]
    return (
        <div className="max-w-[1000px] mx-auto p-5 md:my-20" id="portfolio">
            <h2 className="font-bold text-center text-gray-200 text-3xl mb-4">Portfolio</h2>
            {projects.map((item, index) => (
                <Reveal>
                    <div key={index} className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                        <div className="w-full md:w-1/2 p-4">
                            <img src={item.img}
                                className="w-full h-full object-cover rounded-lg shadow-lg" />
                        </div>
                        <div className=" w-full md:w-1/2 flex flex-col justify-center p-4">
                            <h3 className="text-3xl text-gray-200">{item.title}</h3>
                            <p className="text-3xl text-gray-300 mb-4">{item.description}</p>
                            <div className="flex space-x-4">
                                <a href={item.links.site} className="px-4 py-2 bg-slate-600 text-gray-300 rounded-lg hover:bg-slate-700 transition duration-500">View site</a>
                                <a href={item.links.github} className="px-4 py-2 bg-slate-600 text-gray-300 rounded-lg hover:bg-slate-700 transition duration-500"><FaGithub /></a>
                            </div>
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
    )
}
export default Portfolio