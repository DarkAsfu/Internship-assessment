import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const Team = () => {
    return (
        <div className="mt-20">
            <div className="w-11/12 md:w-10/12 mx-auto md:flex p-0 md:p-20 py-8 shadow-lg">
                <div className="w-[361px] h-[200px] md:w-[535px] md:h-[500px] text-center">
                    <img className="w-[361px] h-[200px]  md:w-[535px] md:h-[500px] rounded-md ml-3.5" src="https://i.ibb.co/xYKxjVb/team3.jpg" alt="" />
                </div>
                <div>
                    <div className="bg-[#14212B] md:px-24 px-6 mx-12 md:mx-0 text-center py-3 mt-10 md:py-8 rounded-md md:-ml-10 md:mt-10">
                        <h1 style={{fontFamily: 'Amiri, serif'}} className="text-white text-[30px]">Marry Clarins</h1>
                        <h3 className="text-[#FF4A17] text-[14.4px] font-medium">CHIEF CUSTOMER OFFICER</h3>
                    </div>
                    <div className="ml-12 md:ml-20 mt-10 text-[18px] text-[#616161]">
                        <ul className="leading-10">
                            <li><span className="font-bold">Position: </span>Chief Customer Officer</li>
                            <li><span className="font-bold">Responsibility: </span>Brand Development</li>
                            <li><span className="font-bold">Experience: </span>10 Years</li>
                            <li><span className="font-bold">Email: </span>support@mobirise.com</li>
                            <li><span className="font-bold">Phone: </span>+1 (800) 123 456 789</li>
                        </ul>
                        <span className="flex gap-5 mt-5 text-white">
                                <FaFacebookF style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '8px', width: '40px', height: '40px', borderRadius: '20px' }} className="text-blue-600 border-1 border-gray-500 bg-gray-300 "></FaFacebookF>
                                <FaTwitter style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '8px', width: '40px', height: '40px', borderRadius: '20px' }} className="text-black border-1 border-gray-500 bg-gray-300 "></FaTwitter>
                                <FaLinkedinIn style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '8px', width: '40px', height: '40px', borderRadius: '20px' }} className="text-blue-600 border-1 border-gray-500 bg-gray-300"></FaLinkedinIn>
                                <FaInstagram style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '8px', width: '40px', height: '40px', borderRadius: '20px' }} className="text-pink-700 border-1 border-gray-500 bg-gray-300"></FaInstagram>
                            </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;