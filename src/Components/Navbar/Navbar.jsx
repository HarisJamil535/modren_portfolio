import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Navlink = [
    {
        id: 1,
        name: "HOME",
        link: "/#home",
    },
    {
        id: 2,
        name: "ABOUT",
        link: "/#about",
    },
    {
        id: 3,
        name: "PROJECTS",
        link: "/#projects",
    },
    {
        id: 4,
        name: "CONTACT US",
        link: "/#contact",
    },
];

const Navbar = () => {

    const [activeIndex, setActiveIndex] = useState(null);
    const handleItemClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="bg-slate-200 shadow-md w-full  fixed">
            <div className="container">
                <div className="flex py-4 items-center justify-between">
                    <div>
                        <span className="text-3xl cursor-pointer font-bold">
                            <a href="/">Portfolio</a>
                        </span>
                    </div>
                    <div className="hidden sm:block">
                        <ul className="flex justify-center items-center gap-2 md:gap-7">
                            {Navlink.map(({ id, name, link }) => (
                                <li
                                    onClick={() => handleItemClick(id)}
                                    className={`font-normal p-2 cursor-pointer transition ease-in duration-100  hover:scale-[1.15] ${activeIndex === id
                                            ? "border-2 border-slate-400 p-2 bg-blue-300 rounded-xl text-white"
                                            : ""
                                        }`}
                                    key={id}
                                >
                                    <a href={link}>{name}</a>
                                </li>
                            ))}
                           
                        </ul>
                    </div>
                    <HiMenuAlt3 className="block sm:hidden size-7 cursor-pointer" />
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;
