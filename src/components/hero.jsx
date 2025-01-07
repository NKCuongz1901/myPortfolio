import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ShinyEffect from "./shinyEffect";
import avatarPic from "../assets/img/avt.jpg";
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { DiCss3, DiHtml5, DiNodejs } from "react-icons/di";
import { FaReact, FaSass } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
const Hero = () => {
    return (
        <div className="mt-24 max-w-[1200px] mx-auto relative ">
            <div className="grid md:grid-cols-2 place-items-center gap-8">
                <motion.div
                    initial={{ opacity: 0.8, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <TypeAnimation
                        sequence={[
                            'Frontend Developer', 1000,
                            'Backend Developer', 1000
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-gray-400 text-xl md:text-5xl mb-4 italic"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4 "
                    >
                        Hello I am <br />
                        <span className="text-purple-500 ">Nguyen Khac Cuong</span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6 "
                    >
                        As a passionate and detail-oriented Frontend Developer, I aim to craft user-friendly, visually appealing, and responsive web interfaces that enhance user experiences.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="flex flex-row items-center gap-6"
                    >
                        <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                            className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                                     border-purple-400 rounded-xl"
                        >
                            Download CV
                        </motion.button>
                        <div className="flex flex-row items-center gap-4 md:text-6xl text-purple-400">
                            <motion.a href="https://github.com/NKCuongz1901" target="_blank" whileHover={{ scale: 1.25 }} >
                                <AiOutlineGithub />
                            </motion.a>
                            <motion.a href="https://www.facebook.com/nkcuong1901/" target="_blank" whileHover={{ scale: 1.25 }} ><AiOutlineFacebook /></motion.a>
                            <motion.a href="#" whileHover={{ scale: 1.25 }}  ><AiOutlineLinkedin /></motion.a>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.img
                    initial={{ opacity: 0.8, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    src={avatarPic}
                    className="w-[300px] md:w-[350px] rounded-2xl"
                />

            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 2 }}
                className="flex flex-row text-7xl  items-center justify-center px-12 md:px-0 w-full py-24 z-10"
            >
                <p className="text-gray-400 mr-6">My Tech Stack</p>
                <DiHtml5 className="text-orange-500 mx-2" />
                <DiCss3 className="text-blue-500 mx-2" />
                <FaReact className="text-blue-500 mx-2" />
                <DiNodejs className="text-green-500 mx-2" />
                <RiTailwindCssFill className="text-blue-500 mx-2" />
                <FaSass className="text-pink-600 mx-2" />
                <RiJavascriptFill className="text-yellow-500 mx-2" />
                <SiTypescript className="text-blue-600 mx-2" />
            </motion.div>

            <div className="absolute inset-0 hidden md:block z-0 pointer-events-none">
                <ShinyEffect left={0} top={0} size={1200} />
            </div>
        </div>
    )
}
export default Hero;