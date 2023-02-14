import { CloseCircle} from "iconsax-react";
import { useEffect, useState} from "react";

const HiddenNavbar = ({setHamburger, matchScreen}) => {

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

    useEffect(()=>{
        if (matchScreen == false) {
            setHamburger(false)
        }
    },[matchScreen])

    const handleCloseBtn = () => {
        setHamburger(false)
    }
   
    return ( 
        <nav className="fixed flex flex-col px-10 py-4 w-screen h-screen top-0 bg-slate-600 bg-opacity-30 backdrop-filter backdrop-blur-sm ">
        
            <div>
                <CloseCircle className="cursor-pointer absolute right-10 top-4 mt-1" size="32" color="#ffffff" onClick={handleCloseBtn} />
            </div>
            <div className="grid place-items-center mt-auto mb-auto">
               {
                links.map(
                    (link) => {
                        return(
                            <a key={link.key} href="#" className="font-dm_sans transition-transform duration-100
                            hover:scale-105 text-white">{link.link}</a>
                        )
                    }
                )
               }
            </div>
        </nav>
     );
}
 
export default HiddenNavbar;