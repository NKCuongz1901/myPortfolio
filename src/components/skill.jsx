import { DiCss3, DiHtml5, DiNodejs, DiReact, DiSass } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiTypescript } from "react-icons/si";


const Skill = () => {
    const skills = [
        {
            category: 'Frontend',
            technologies:
                [
                    { name: 'HTML', icon: <DiHtml5 className="text-orange-500" /> },
                    { name: 'CSS', icon: <DiCss3 className="text-blue-500" /> },
                    { name: 'Sass', icon: <DiSass className="text-pink-500" /> },
                    { name: 'Tailwind', icon: <RiTailwindCssFill className="text-blue-500" /> },
                    { name: 'ReactJS', icon: <DiReact className="text-blue-500" /> },
                    { name: 'Javascript', icon: <SiJavascript className="text-yellow-500" /> },
                    { name: 'Typescript', icon: <SiTypescript className="text-blue-500" /> },

                ],
        },
        {
            category: 'Backend',
            technologies:
                [
                    { name: 'Javascript', icon: <SiJavascript className="text-yellow-500" /> },
                    { name: 'Typescript', icon: <SiTypescript className="text-blue-500" /> },
                    { name: 'Nodejs', icon: <FaNodeJs className="text-green-500" /> },

                ],
        },
    ]


    return (
        <div className="flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skill">
            <h2 className="font-bold text-gray-200 text-center text-3xl mb-4">Skills</h2>
            <p className="text-center mb-8">This is some of my personal project i had done. <a href="#">Lets check them</a></p>
            <div className="flex flex-col md:flex-row justify-center mx-auto space-y-8 md:space-y-0 md:space-x-8 max-w-[1000px]">
                {skills.map((skill, index) => (
                    <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2 ">
                        <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {skill.technologies.map((tech, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                    <span>{tech.icon}</span>
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Skill;