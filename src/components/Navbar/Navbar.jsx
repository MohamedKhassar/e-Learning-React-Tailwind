import { MdMenu } from "react-icons/md";

const Navbar = () => {
    const NavbarMenu = [
        {
            id: 1,
            title: "Home",
            path: "/",
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
        <nav className="">
            <div className="container py-10 flex justify-between items-center max-w-full">
                {/* logo section */}
                <div className="">
                    <h1 className="font-bold text-2xl">MED-learning</h1>
                </div>
                {/* menu section */}
                <div className="hidden lg:block">
                    <ul className="flex items-center gap-3">
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
                {/* mobile hamburger section */}
                <div className="lg:hidden">
                    <MdMenu className="text-4xl " />
                </div>
            </div>
        </nav>
    )
}

export default Navbar