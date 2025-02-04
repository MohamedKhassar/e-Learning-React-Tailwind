import { motion } from "framer-motion"
import { FaBell } from "react-icons/fa"
const Subscribe = () => {
    return (
        <section className="bg-[#f7f7f7]">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                 className="container py-24 md:py-28  bg-cover bg-[url(/assets/bg.png)] bg-center bg-no-repeat">
                <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{duration:.6,ease:"easeInOut"}}
                className="flex justify-center flex-col">
                    <div
                        className="text-center space-y-4 lg:max-w-[430px] mx-auto">
                        <h1 className="text-4xl font-bold !leading-snug">
                            450K+ Students are learning from us
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Recusandae iusto minima
                        </p>
                        <a href="" className="primary-btn !inline-flex !mt-8 items-center gap-4 group">
                            Subscribe Now
                            <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Subscribe