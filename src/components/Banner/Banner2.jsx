import BannerPng from "/assets/banner.png"
import { motion } from "framer-motion"
const Banner2 = () => {
    return (
        <section>
            <div className="container py-14 md:py-24 grid md:grid-cols-2 grid-cols-1 gap-6
         space-y-6 md:space-y-0">
                {/* banner text */}
                <motion.div
                initial={{opacity: 0,x:-50}}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center">
                    <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
                        <h1 className="text-3xl md:text-4xl font-bold !leading-snug">
                            Join Our Community to Start your Journey
                        </h1>
                        <p className="text-dark2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
                            incidunt!
                        </p>
                        <button className="primary-btn  !mt-8">Join now</button>
                    </div>
                </motion.div>
                {/* banner img */}
                <div className="flex justify-center items-center">
                    <motion.img
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .5, ease: "easeInOut" }} src={BannerPng} className="w-[350px] md:max-w-[450px] object-cover" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Banner2