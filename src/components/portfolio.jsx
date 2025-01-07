import { FaGithub } from "react-icons/fa";
import project1 from "../assets/img/pj1.png";
import project2 from "../assets/img/pj2.png";
import project3 from "../assets/img/pj3.png";
import Reveal from "./reveal";

const Portfolio = () => {
    const projects = [
        {
            img: project1,
            title: 'Supermarket management system',
            description: 'A Supermarket Management System streamlines inventory, billing, and sales, improving efficiency and ensuring a seamless customer experience.',
            links: {
                site: "https://c-mart-shop-fe.vercel.app/",
                github: "https://github.com/NKCuongz1901/CMartShopFE.git"

            }
        },
        {
            img: project2,
            title: 'ChatApp',
            description: 'This project using reactjs with javascript and shadcn',
            links: {
                site: "https://github.com/NKCuongz1901/ChatAppFE.git",
                github: "https://github.com/NKCuongz1901/ChatAppFE.git"

            }
        },
        {
            img: project3,
            title: 'Book E-commerce',
            description: 'This project using reactjs with typescript and antd',
            links: {
                site: "https://github.com/NKCuongz1901/bookEcom.git",
                github: "https://github.com/NKCuongz1901/bookEcom.git"

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
                                className="w-full h-full object-contain rounded-lg shadow-lg border border-purple-600" />
                        </div>
                        <div className=" w-full md:w-1/2 flex flex-col justify-center p-4">
                            <h3 className="text-2xl text-gray-200">{item.title}</h3>
                            <p className="text-2xl text-gray-300 mb-4">{item.description}</p>
                            <div className="flex space-x-4">
                                <a href={item.links.site} target="_blank" className="px-4 py-2 bg-slate-600 text-gray-300 rounded-lg hover:bg-slate-700 transition duration-500">View site</a>
                                <a href={item.links.github} target="_blank" className="px-4 py-2 bg-slate-600 text-gray-300 rounded-lg hover:bg-slate-700 transition duration-500 flex items-center"><FaGithub /></a>
                            </div>
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
    )
}
export default Portfolio