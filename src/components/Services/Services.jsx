import { BiSupport } from "react-icons/bi";
import { CiMobile3 } from "react-icons/ci";
import { IoMdHappy } from "react-icons/io";
import { IoPulseOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion"
import { FadeUp } from "../Hero/Hero";

const ServicesData = [
    {
        id: 1,
        title: "Web Development",
        link: "#",
        icon: <TbWorldWww className="text-sky-700" />,
        delay: 0.2,
    },
    {
        id: 2,
        title: "Mobile development",
        link: "#",
        icon: <CiMobile3 className="text-zinc-500" />,
        delay: 0.3,
    },
    {
        id: 3,
        title: "Software development",
        link: "#",
        icon: <RiComputerLine
            className="text-cyan-700" />,
        delay: 0.4,
    },
    {
        id: 4,
        title: "Satisfied clients",
        link: "#",
        icon: <IoMdHappy className="text-yellow-600" />,
        delay: 0.5,
    },
    {
        id: 5,
        title: "SEO optimization",
        link: "#",
        icon: <IoPulseOutline className="text-red-700" />,
        delay: 0.6,
    },
    {
        id: 6,
        title: "24/7 support",
        link: "#",
        icon: <BiSupport className="text-blue-500" />,
        delay: 0.7,
    },
];

export const SlideLeft = (delay) => {
    return {
        initial: {
            x: 50,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                ease: "easeInOut",
                delay,
                duration: 0.3
            }
        }
    }
}
const Services = () => {
    return (
        <section className="bg-white">
            <div className="container pb-14 pt-16">
                <motion.h1
                    variants={FadeUp(.6)}
                    initial="initial"
                    animate="animate"
                    className="text-4xl font-bold text-left pb-10 capitalize">Services we provide</motion.h1>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] mx-3 gap-8">
                    {ServicesData.map((service) => (
                        <motion.div
                            variants={SlideLeft(service.delay)}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{ once: true }}

                            key={service.id} className="rounded-2xl bg-zinc-100 py-7 flex flex-col items-center gap-3 justify-center hover:bg-zinc-200 transition-[background-color_transform] duration-500 hover:scale-105 cursor-pointer hover:shadow-2xl">
                            <div className="text-4xl">
                                {service.icon}
                            </div>
                            <h1 className="capitalize mx-3  font-semibold text-center">{service.title}</h1>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services