import {Facebook,Youtube, Google, Wifi, Instagram } from "iconsax-react";


const Footer = () => {

    const linksArray = [
        {
            link: "about us",
            key: 0
        },
        {
            link: "contact us",
            key: 1
        },
        {
            link: "help",
            key: 2
        },
        {
            link: "privacy policy",
            key: 3
        },
        {
            link: "disclaimer",
            key: 4
        }
    ]

    return (
        <footer className="bg-white pt-32 pb-16 px-16 lg:px-5">
            <hr className="bg-primary_green h-0.5" />
            <div className="flex justify-around items-center py-10 lg:flex-col lg:gap-4">
                <div>Logo</div>
                <div className="w-fit flex flex-col gap-4">
                    <div className="flex gap-2">
                        <img src="images/location.svg" alt="Location Icon" />
                        <span className="text-xs font-assistant">345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</span>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <img src="images/phone.svg" alt="Phone Icon" />
                            <span className="text-xs font-assistant">(123) 456-7890</span>
                        </div>
                        <div className="flex gap-2">
                            <img src="images/printer.svg" alt="Printer Icon" />
                            <span className="text-xs font-assistant">(123) 456-7890</span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-xs font-assistant text-dark_blue opacity-50">Social Media</span>
                        <Facebook className="text-primary_green" variant="Bold" size="18"/>
                        <img src="images/twitter.svg" alt="Twitter Icon" />
                        <img src="images/linkedin.svg" alt="LinkedIn Icon" />
                        <Youtube className="text-primary_green" variant="Bold" size="18"/>
                        <Instagram className="text-primary_green" variant="Bold" size="18"/>
                        <Google className="text-primary_green" variant="Bold" size="18"/>
                        <Wifi className="text-primary_green" variant="Bold" size="18"/>
                    </div>
                </div>
            </div>
            <div className="flex justify-between lg:flex-col lg:text-center">
                <div className="flex gap-4 lg:justify-center">
                {
                    linksArray.map(
                        (link) => {
                            return (
                                <a key={link.key} href="#" className="uppercase font-inter text-xs text-black" >{link.link}</a>
                            )
                        }
                    )
                }
                </div>
                <div>
                    <p className="font-inter text-dark_blue opacity-50 text-xs lg:mt-4">Copyright © 2020 Minimum Living Cost. All rights reserved</p>
                </div>
            </div>
        
        </footer>
    );
}

export default Footer;