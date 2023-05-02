
import { BsFacebook, FaFacebook, FaPhone, FaWhatsapp } from "react-icons/fa";

const VulenteerDetails = ({ vulenter }) => {
    const { img, name, position } = vulenter;

    return (
        // <div className=""
        //     onMouseEnter={handleMouseEnter}
        //     onMouseLeave={handleMouseLeave}>
        //     <figure className='hover:opacity-50 relative' > 
        //         <img className='w-96 h-80 hover:opacity-50 relative' src={img} alt="Vulenteer image" />

        //      </figure>
        //     <div className='  '>
        //         {hovering &&
        //             <div className="absolute z-50">
        //                 <h2 className="card-title">{name}</h2>
        //                 <h2 className="card-title">{position}</h2>
        //                 <BeakerIcon className="h-6 w-6 text-blue-500" />
        //             </div>
        //         } 
        //     </div>

        // </div>
        <div>


            <div >
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-96 w-72">
                        <img className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125" src={img} alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[46%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 lg:">
                        <h1 className="font-dmserif text-3xl font-bold text-white">{name}</h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{position}</p>
                        <div className="flex justify-center">
                            <FaFacebook className="w-6 h-6 text-white mx-2" />
                            <FaWhatsapp className="w-6 h-6 text-white mx-2" />
                            <FaPhone className="w-6 h-6 text-white mx-2"/>
                        </div>


                    </div>
                </div>

                {/* <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-96 w-72">
                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl font-bold text-white">Shooting Star</h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                    </div>
                </div>  */}
            </div>
            {/* <div className="fixed bottom-16">
                <p className="font-com text-2xl font-semibold text-white">All Images are from <a href="https://unsplash.com" className="text-blue-500">Unsplash.com</a></p>
            </div> */}

        </div>


    );
};

export default VulenteerDetails;
{/* classNameName="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-75 rounded-full" */ }