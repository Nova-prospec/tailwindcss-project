const Property = () => {
    return (
        <>
            <section className="rounded-md shadow-lg w-52 flex flex-col bg-white">
                <div className="">
                    <img src="images/test-img.png" className="rounded-tr-md rounded-tl-md" alt="" />
                </div>
                <div >
                    <h3 className="p-2 font-bold font-dm_sans">2578 Folsom street, san francisco, CA, 94110</h3>
                    <p className="font-dm_sans text-gray-400 p-2">Private Room</p>
                    <span className="text-lg text-primary_green font-semibold p-2 font-dm_sans">$1200/Month</span>
                </div>
            </section>
        </>

    );
}

export default Property;