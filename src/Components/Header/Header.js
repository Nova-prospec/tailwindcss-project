import { useState } from "react"
import { HambergerMenu } from "iconsax-react";
import HiddenNavbar from "../HiddenNavbar/HiddenNavbar";


const Header = () => {
    const handleScreenChange = (e) => {
        setMatch(e.matches)
    }
    const [hamburger, setHamburger] = useState(false)
    const [match, setMatch] = useState(window.matchMedia("(max-width: 900px)").matches)
    window.matchMedia("(max-width: 900px)").addEventListener("change", handleScreenChange)

    const [links, setLinks] = useState([
        {
            link: "Home",
            key: 0
        },
        {
            link: "Landlord",
            key: 1
        },
        {
            link: "Tenants",
            key: 2
        },
        {
            link: "Contact Us",
            key: 3
        }
    ])

    
    return (
        <header className="bg-hero bg-no-repeat bg-cover relative bg-center block h-full lg:h-auto lg:pb-10">
            <nav className="flex items-center justify-between pt-4 pb-4 px-20 lg:px-5">
                <div>
                    <img src="images/logo.svg" className="w-24 h-8 shrink-0" alt="Company Logo" />
                </div>
                <div className="flex gap-5 lg:hidden">
                    {
                        links.map(
                            (link) => {
                                return (
                                    <a href="#" key={`My Key is ${link.key}`} className="hover:underline hover:underline-offset-xxl hover:decoration-2 hover:transition-all font-dm_sans text-sm text-white" >{link.link}</a>
                                )
                            }
                        )
                    }
                </div>
                <div className="opacity-0 lg:hidden">
                    Hello World
                </div>

                <div className="hidden cursor-pointer lg:block">
                    <HambergerMenu color="#ffffff" onClick={ ()=> setHamburger(true) } className="hidden cursor-pointer lg:block" size="32" />
                </div>

            </nav>
            <hr />
            <section className="flex justify-between lg:flex-col pt-10 pl-20 pr-20 items-center">
                <h1 className="text-3xl w-96  text-white font-bold font-inter leading-10 lg:w-auto lg:text-center sm:text-xl">
                    The Most Affordable Place To Stay In The San Francisco Bay Area
                </h1>
                <div className="flex flex-col">
                    <img src="images/map.svg" alt="" />
                    <div className="bg-white rounded w-11/12 sm:ml-0 sm:w-auto flex gap-2 ml-5 p-4">
                        <select className="border rounded text-xs font-poppins focus-visible:outline-none p-1">
                            <option value="All Type">All Type</option>
                        </select>
                        <select className="border rounded text-xs focus-visible:outline-none font-poppins p-1">
                            <option value="Neighbourhood">Neighbourhood</option>
                        </select>
                    </div>
                </div>
            </section>
            {
                hamburger == true ? <HiddenNavbar setHamburger={setHamburger} matchScreen={match}/> : null
            }
        </header>
    );
}

export default Header;