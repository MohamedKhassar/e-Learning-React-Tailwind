import { FaBookReader } from "react-icons/fa"
import BannerPng from "/assets/education.png"
import { motion } from "framer-motion"
import { FadeUp } from "../Hero/Hero"
import { GrUserExpert } from "react-icons/gr"
import { MdOutlineAccessTime } from "react-icons/md"
const Banner = () => {
    return (
        <section>
            <div className="container py-14 md:py-24 grid md:grid-cols-2 grid-cols-1 gap-8
         space-y-6 md:space-y-0">
                {/* banner img */}
                <div className="flex justify-center items-center">
                    <motion.img 
                    initial={{opacity:0,x:-50}}
                        whileInView={{opacity:1,x:0}}
                        viewport={{ once: true }}
                        transition={{duration:.5,ease:"easeInOut"}} src={BannerPng} className="w-[350px] md:max-w-[450px] object-cover" alt="" />
                </div>
                {/* banner text */}
                <div className="flex flex-col justify-center">
                    <div className="text-center md:text-left space-y-12">
                        <motion.h1
                        initial={{opacity:0,scale:.5}}
                        whileInView={{opacity:1,scale:1}}
                        viewport={{ once: true }}
                        transition={{duration:.5}}
                        className="text-3xl md:text-4xl font-bold !leading-snug">
                            The World&apos;s Leading Online learning Platform
                        </motion.h1>
                        <div className="space-y-6">
                            <motion.div
                                variants={FadeUp(.2)}
                                initial="initial"
                                whileInView={"animate"}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 p-6 bg-zinc-100 rounded-2xl hover:bg-zinc-200  hover:shadow-xl hover:scale-105 transition-[background-color_shadow] cursor-pointer duration-300">
                                <FaBookReader className="text-2xl" />
                                <p className="text-lg">10,000+ Courses</p>

                            </motion.div>
                            <motion.div
                                variants={FadeUp(.4)}
                                initial="initial"
                                whileInView={"animate"}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 p-6 bg-zinc-100 rounded-2xl hover:bg-zinc-200  hover:shadow-xl hover:scale-105 transition-[background-color_shadow] cursor-pointer duration-300 ">
                                <GrUserExpert className="text-2xl" />
                                <p className="text-lg">Lifetime Access</p>

                            </motion.div>
                            <motion.div
                                variants={FadeUp(.6)}
                                initial="initial"
                                whileInView={"animate"}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 p-6 bg-zinc-100 rounded-2xl hover:bg-zinc-200  hover:shadow-xl hover:scale-105 transition-[background-color_shadow] cursor-pointer duration-300 ">
                                <MdOutlineAccessTime className="text-2xl" />
                                <p className="text-lg">Expert Instruction</p>

                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner