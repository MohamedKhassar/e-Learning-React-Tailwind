import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion"
import { useState } from "react";
import { BiX } from "react-icons/bi";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const NavbarMenu = [
        {
            id: 1,
            title: "Home",
            path: "#home",
        },
        {
            id: 2,
            title: "Services",
            link: "#",
        },
        {
            id: 3,
            title: "About Us",
            link: "#",
        },
        {
            id: 4,
            title: "Our Team",
            link: "#",
        },
        {
            id: 5,
            title: "Contact Us",
            link: "#",
        },
    ];
    return (
        <nav className="relative z-30">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                className="container py-10 flex justify-between items-center">
                {/* logo section */}
                <div className="">
                    <h1 className="font-bold text-2xl">Med-Learning</h1>
                </div>
                {/* menu section */}
                <div className="relative">
                    <div onClick={() => setIsMenuOpen(prev => !prev)} className="lg:hidden">
                        {
                            !isMenuOpen ?
                                <MdMenu className="text-4xl cursor-pointer" />
                                : <BiX className="text-4xl cursor-pointer" />
                        }
                    </div>
                        <ul className={`${isMenuOpen?"":"hidden"} lg:flex absolute lg:static items-center lg:gap-3 gap-7 bg-dark/10 to-transparent backdrop-blur-3xl rounded-2xl p-5 right-2 w-max `}>
                            {NavbarMenu.map((item) => (
                                <li key={item.id}>

                                    <a href={item.path} className="inline-block py-2 px-3 hover:text-secondary relative group cursor-pointer">
                                        <span className="absolute top-full opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-[_opacity,_visibility] left-1/2 rounded-full  bg-secondary mr-2 w-2 h-2 duration-500">

                                        </span>
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                            <button className="primary-btn">Sign In</button>
                        </ul>
                </div>

            </motion.div>
        </nav>
    )
}

export default Navbar