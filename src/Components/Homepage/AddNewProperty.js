import { Fragment } from "react";

const AddNewProperty = () => {
    const inputsArray = [
        {
            inputName: "Name",
            inputPlaceHolder: "Enter Name"
        },
        {
            inputName: "Address",
            inputPlaceHolder: "Enter Address"
        }, {
            inputName: "Unit Number",
            inputPlaceHolder: "Enter Unit"
        }
    ]
    const selectArray = [
        {
            selectName: "City",
            placeholder: "Select City"
        },
        {
            selectName: "State",
            placeholder: "Select State"
        },
        {
            selectName: "Room Type",
            placeholder: "Select Room Type"
        }
    ]

    return (
        <Fragment>
            <section className="flex gap-20 pl-20 py-16 items-center lg:px-5 lg:flex-col-reverse">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-end">
                        <div className="relative w-fit">
                            <img src="images/flexible-leases.png" alt="" />
                            <p className="text-md font-inter absolute top-2 right-1/4 text-white font-semibold">Flexible Leases</p>
                        </div>
                        <div className="relative w-fit">
                            <img src="images/happiness.jpg" alt="" />
                            <p className="text-md absolute font-inter top-2 left-6 text-white font-semibold">7-Day Happiness Guaranteed</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="relative w-fit">
                            <img src="images/cleaning.jpg" alt="" />
                            <p className="absolute text-md font-inter top-4 font-semibold text-white px-2">Monthly House Cleaning</p>
                        </div>
                        <div className="relative w-fit">
                            <img src="images/family.jpg" alt="" />
                            <p className="absolute left-8 px-6 text-md font-inter top-4 font-semibold text-white">Choose Your Own Roommate</p>
                        </div>
                    </div>
                </div>
                <article className="w-96 sm:w-auto lg:flex lg:flex-col lg:items-center">
                    <h2 className="text-2xl font-bold mb-4  text-dark_text font-inter lg:text-center">Flexibility and options to suit your lifestyle.</h2>
                    <p className="text-sm mb-2 text-dark_text font-inter lg:text-center">You need it? We got it. We make finding your next home easy, comfortable , and simple. From our happiness guarantee to our selective roomate finder option. We provide you the flexibility that you most desire.</p>

                    <div><button className="text-white text-xs mt-4 font-md py-2 px-4 rounded-md font-inter bg-primary_green ">Search Rooms</button></div>
                </article>
            </section>
            <section className="text-center flex flex-col px-20 justify-center items-center w-full">
                <h2 className="font-inter font-medium ">Your property with us and be Confident that Your Room will be Filled Out!</h2>
                <div className=" w-10/12 p-10 bg-white my-8 rounded-xl drop-shadow-xl md:w-screen-90">
                    <h2 className="text-primary_green font-bold font-poppins text-xl">Add A New Property</h2>
                    <form className="">
                        <div className="grid grid-cols-3 gap-4 py-4 lg:grid-cols-1" >

                        
                        {
                            inputsArray.map(
                                (item) => {
                                    return (
                                        <div key={item.inputName} className="flex flex-col items-start">
                                            <label htmlFor={item.inputName} className="font-semibold text-sm my-2 font-poppins after:content-['*'] after:text-primary_green after:font-bold after:text-md after:ml-2">{item.inputName}</label>
                                            <input type="text" className="bg-light_grey w-full p-2 rounded focus-visible:outline-none text-xs border font-inter" placeholder={item.inputPlaceHolder} />
                                        </div>
                                    );
                                }
                            )
                        }
                        {
                            selectArray.map(
                                (select) => {
                                    return (
                                        <div key={select.selectName} className="flex flex-col items-start">
                                            <label htmlFor={select.selectName} className="font-semibold text-sm my-2 font-poppins after:content-['*'] after:text-primary_green after:font-bold after:text-md after:ml-2">{select.selectName}</label>
                                            <select className="bg-light_grey w-full p-2 rounded focus-visible:outline-none text-xs text-dark_grey border font-inter" placeholder={select.placeholder}>
                                                <option value={select.placeholder}>{select.placeholder}</option>
                                            </select>
                                        </div>
                                    );
                                }
                            )
                        }
                        <div className="flex flex-col items-start">
                            <label htmlFor="Price" className="font-semibold text-sm my-2 font-poppins after:content-['*'] after:text-primary_green after:font-bold after:text-md after:ml-2">Price</label>
                            <input type="text" className="bg-light_grey w-full p-2 rounded focus-visible:outline-none text-xs border font-inter" placeholder="Enter Price" />
                        </div>
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="Description" className="font-semibold text-sm my-2 font-poppins after:content-['*'] after:text-primary_green after:font-bold after:text-md after:ml-2">Description</label>
                            <textarea type="text" className="bg-light_grey h-32 resize-none w-full p-2 rounded focus-visible:outline-none text-xs border font-inter" placeholder="Enter Description" />
                        </div>
                        <div className="flex relative flex-col w-5/5 h-5/5 items-start">
                            <label htmlFor="Upload Photos" className="font-semibold text-sm my-2 font-poppins">Upload Photos</label>
                            <input type="file" accept="image/jpeg, image/jpg, image/png" className="bg-light_grey flex file:bg-red-600 file:absolute file:top-2/4 file:left-2/4 file:opacity-0   justify-center items-center h-32 border-dashed border-primary_green border-2 resize-none w-full p-2 rounded focus-visible:outline-none text-xs font-inter" placeholder="Enter Description"/>
                            <p className="font-poppins text-sm absolute left-1/3 top-1/3 lg:hidden">Drag your images here or <span className="text-primary_green font-bold font-poppins ">browse</span></p>
                            <p className="text-xs absolute top-2/4 left-1/3 ml-8 font-poppins text-black opacity-50 lg:hidden">Supported: JPG, JPEG, PNG</p>
                        </div>
                        <div>
                            <button className="text-white font-inter bg-primary_green text-sm py-2 px-16 rounded my-8">Add New Property</button>
                        </div>
                    </form>
                </div>
            </section>
        </Fragment>
    );
}

export default AddNewProperty;