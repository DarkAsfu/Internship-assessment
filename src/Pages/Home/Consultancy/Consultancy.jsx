const Consultancy = () => {
    return (
        <div className="w-11/12 md:w-10/12 mx-auto border mt-20 bg-[#FF4A17] md:flex items-center rounded-md pb-10 md:pb-0">
            <div className="md:w-[377px] h-[173px] rounded-md">
                <img src="../../../../public/handshake.jpg" alt="" />
            </div>
            <div className="bg-white mt-10 md:mt-0 p-3 ml-4 rounded-full md:-ml-6 w-16 h-16 align-middle items-center flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="30" height="30"><path d="M18.9 24l-.7-.4C14.4 21.5 11 19.1 7.9 16 4.9 13 2.4 9.6.4 5.8L0 5.1 5.1 0l6.2 6.2-2 2.9 5.5 5.5 2.9-2 6.2 6.2-5 5.2zm-9.6-9.3c2.8 2.7 5.8 5 9.2 6.9l2.7-2.7-3.6-3.6-2.9 2-7.9-7.9 2-2.9-3.7-3.7-2.6 2.7c1.9 3.4 4.1 6.4 6.8 9.2z" className="text-[#FF4A17]  bg-white"></path></svg>
            </div>
            <div className="text-[#FFF] md:ml-20 pl-4">
                <h1 className="text-[24px] md:text-[30px] font-serif">Need Consultancy? Call Us +1 800 123 456 789</h1>
                <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nihil totam commodi!</p>
            </div>
        </div>
    );
};

export default Consultancy;