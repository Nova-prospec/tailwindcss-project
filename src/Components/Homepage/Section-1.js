import { DollarCircle, Eye, House, Stacks, Shield, Sun1 } from "iconsax-react"

const Section1 = () => {
    return (

        <section className="bg-white pl-20 pt-10 pb-10 lg:px-5">
            <h2 className="text-xl font-bold text-black lg:text-center font-inter"><span className="underline decoration-2  underline-offset-4 decoration-primary_green">Minimum Living Cost</span> Takes Care Of Everything</h2>
            <div className="flex lg:flex-col lg:items-center">
                <div className="-ml-6"><img src="images/outdoor.svg" loading="lazy" alt="Outdoor Image" /></div>
                <div className="mt-10 grid grid-cols-3 grid-rows-4 gap-2">
                    <div className="font-bold text-dark_text font-inter md:text-sm">
                        <div className="flex mb-2 justify-center  items-center w-12 h-12 drop-shadow-lg rounded-md bg-white"><DollarCircle size="32" color="#F4511E" /></div>
                        Pay As Little As Possible!
                    </div>
                    <div className="font-bold text-dark_text font-inter md:text-sm">
                        <div className="flex mb-2 justify-center items-center w-12 h-12 drop-shadow-lg rounded-md bg-white"><House size="32" color="#F4511E" /></div>
                        Enjoy Wisdom of Community!
                    </div>
                    <div className="font-bold text-dark_text font-inter md:text-sm">
                        <div className="flex mb-2 justify-center items-center w-12 h-12 drop-shadow-lg rounded-md bg-white"><Stacks size="32" color="#F4511E" /></div>
                        Let Someone Else Take Care of Landlord!
                    </div>
                    <div className="font-bold text-dark_text font-inter md:text-sm">
                        <div className="flex mb-2 justify-center items-center w-12 h-12 drop-shadow-lg rounded-md bg-white"><Sun1 size="32" color="#F4511E" /></div>
                        Enjoy Peaceful Environment!
                    </div>
                    <div className="font-bold text-dark_text font-inter md:text-sm">
                        <div className="flex mb-2 justify-center items-center w-12 h-12 drop-shadow-lg rounded-md bg-white"><Shield size="32" color="#F4511E" /></div>
                        Stay Safe!
                        Save Money!
                    </div>
                    <div className="font-bold text-dark_text font-inter md:text-sm">
                        <div className="flex mb-2 justify-center items-center w-12 h-12 drop-shadow-lg rounded-md bg-white"><Eye size="32" color="#F4511E" /></div>
                        Pay For What You Use!
                    </div>

                </div>
            </div>

        </section>
    );
}

export default Section1;