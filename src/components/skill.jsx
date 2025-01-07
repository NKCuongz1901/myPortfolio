import { DiCss3, DiHtml5, DiNodejs, DiReact, DiSass } from "react-icons/di";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiPostman, SiTypescript } from "react-icons/si";
import Reveal from "./reveal";
import { VscVscode } from "react-icons/vsc";


const Skill = () => {
    const skills = [
        {
            category: 'Language programming',
            technologies:
                [
                    { name: 'Javascript', icon: <SiJavascript className="text-yellow-500" /> },
                    { name: 'Typescript', icon: <SiTypescript className="text-blue-500" /> },

                ],
        },
        {
            category: 'Frontend',
            technologies:
                [
                    { name: 'HTML', icon: <DiHtml5 className="text-orange-500" /> },
                    { name: 'CSS', icon: <DiCss3 className="text-blue-500" /> },
                    { name: 'Sass', icon: <DiSass className="text-pink-500" /> },
                    { name: 'Tailwind', icon: <RiTailwindCssFill className="text-blue-500" /> },
                    { name: 'ReactJS', icon: <DiReact className="text-blue-500" /> },

                ],
        },
        {
            category: 'Backend',
            technologies:
                [
                    { name: 'Nodejs', icon: <FaNodeJs className="text-green-500" /> },

                ],
        },
        {
            category: 'Tools',
            technologies:
                [
                    { name: 'Vscode', icon: <VscVscode className="text-blue-500" /> },
                    { name: 'Github', icon: <FaGithub className="text-blue-500" /> },
                    { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },

                ],
        },
    ]


    return (
        <div className="flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12 max-w-[650px] mx-auto" id="skill">
            <Reveal>
                <h2 className="font-bold text-gray-200 text-center text-3xl mb-4">Skills</h2>
                <p className="text-center mb-8">This is some of my personal project i had done. <a href="#portfolio" className="text-purple-400">Lets check them</a></p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] backdrop-blur-[12px] "
                        >
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

            </Reveal>
        </div>
    )
}
export default Skill;