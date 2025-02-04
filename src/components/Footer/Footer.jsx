import { BsInstagram, BsWhatsapp, BsYoutube } from "react-icons/bs"
import { TbWorldWww } from "react-icons/tb"
import { motion } from "framer-motion"
import { FadeUp } from "../Hero/Hero"
import { SlideLeft } from "../Services/Services"
const Footer = () => {
    return (
        <footer className="bg-[#f7f7f7]">
            <div className="container py-24 md:py-28  flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <motion.h1
                    variants={FadeUp(.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}}

                     className="text-2xl font-bold">The Coding Journey</motion.h1>
                        <motion.p
                    variants={FadeUp(.3)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}} className="text-dark2  max-w-[340px]">TCJ is a platform dedicated to empowering aspiring developers. From beginner tutorials to advanced programming concepts, we provide a comprehensive learning experience designed to help you master coding skills, build projects, and launch your tech career.</motion.p>
                    </div>
                    <div className="grid grid-cols-2 gap-24">
                        <div className="space-y-6">
                            <motion.h1
                    variants={FadeUp(.3)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}}
                     className="text-2xl font-bold">Courses</motion.h1>
                            <ul className="space-y-6 text-dark2">
                                <motion.li
                    variants={FadeUp(.5)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}} className="cursor-pointer hover:text-secondary">Web Development</motion.li>
                                <motion.li
                    variants={FadeUp(.6)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}} className="cursor-pointer hover:text-secondary">Software Development</motion.li>
                                <motion.li
                    variants={FadeUp(.7)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}} className="cursor-pointer hover:text-secondary">Apps Development</motion.li>
                                <motion.li
                    variants={FadeUp(.8)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}} className="cursor-pointer hover:text-secondary">E-learning</motion.li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <motion.h1
                    variants={FadeUp(.4)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}} className="text-2xl font-bold">Links</motion.h1>
                            <ul className="space-y-6 text-dark2">
                                <motion.li
                    variants={FadeUp(.5)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}} className="cursor-pointer hover:text-secondary">Home</motion.li>
                                <motion.li
                    variants={FadeUp(.6)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}} className="cursor-pointer hover:text-secondary">Services</motion.li>
                                <motion.li
                    variants={FadeUp(.7)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}} className="cursor-pointer hover:text-secondary">About</motion.li>
                                <motion.li
                    variants={FadeUp(.8)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}} className="cursor-pointer hover:text-secondary">Contact</motion.li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <motion.h1
                    variants={FadeUp(.3)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}} className="text-2xl font-bold">Get In Touch</motion.h1>
                        <motion.div
                    variants={FadeUp(.3)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}} className="w-fit grid grid-cols-2">
                            <input type="text" className="py-4 px-3 bg-white shadow-2xl rounded-l-xl outline-0"  placeholder="Enter your email" name="" id="" />
                            <button className="primary-btn w-fit !rounded-l-none">GO</button>
                        </motion.div>
                        <ul className="flex gap-x-6">
                            <motion.li
                    variants={SlideLeft(.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}}><a href=""><BsWhatsapp className="hover:text-green-700 transition-colors duration-300" /></a></motion.li>
                            <motion.li
                    variants={SlideLeft(.3)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}}><a href=""><BsInstagram className="hover:text-pink-700 transition-colors duration-300" /></a></motion.li>
                            <motion.li
                    variants={SlideLeft(.4)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}}><a href=""> <TbWorldWww className="hover:text-sky-700 transition-colors duration-300" /></a></motion.li>
                            <motion.li
                    variants={SlideLeft(.5)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}}><a href=""><BsYoutube className="hover:text-red-700 transition-colors duration-300" /></a></motion.li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer