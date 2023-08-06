import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="bg-[#fff] border-b">
            <header >
                <div className="relative z-20 md:w-full mx-auto">
                    <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-4">
                        <div className="flex items-center justify-between">
                            <div className="relative z-20">
                                <Link to="/">
                                    <img className="w-[160px]" src="https://i.ibb.co/b1qwDSm/managent-logo2.png" alt="logo" />
                                </Link>
                            </div>

                            <div className="flex items-center justify-end border-l lg:border-l-0 ">
                                <input type="checkbox" name="hamburger" id="hamburger" className="peer" hidden />
                                <label htmlFor="hamburger" className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden ">
                                    <div aria-hidden="true" className="m-auto h-0.5 w-6 rounded bg-[#FF4A17] transition duration-300"></div>
                                    <div aria-hidden="true" className="m-auto mt-2 h-0.5 w-6 rounded bg-[#FF4A17] transition duration-300"></div>
                                </label>

                                <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%]  border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0 bg-[#fff]">
                                    <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                                        <ul style={{paddingRight: '290px', fontFamily: 'Nunito Sans'}} className="px-6 pt-32 text-[#222222] font-semibold uppercase space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0 text-[14.4px]">
                                            <li>
                                                <Link to='/' className="whitespace-nowrap group relative before:absolute before:inset-x-0 before:top-6 before:h-0.5 before:origin-right before:scale-x-0 before:bg-[#FF4A17] before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                                                    <span className="relative ">Home</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="whitespace-nowrap group relative before:absolute before:inset-x-0 before:top-6 before:h-0.5 before:origin-right before:scale-x-0 before:bg-[#FF4A17] before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                                                    <span className="relative ">Live Demo</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="whitespace-nowrap group relative before:absolute before:inset-x-0 before:top-6 before:h-0.5 before:origin-right before:scale-x-0 before:bg-[#FF4A17] before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                                                    <span className="relative ">Live Demo Blocks</span>
                                                </Link>
                                            </li>
                                        </ul>

                                        <div className="border-t py-8 px-6 md:px-12 md:py-16 lg:border-t-0  lg:py-0 lg:pr-0 lg:pl-6">
                                            <Link to="/login" style={{fontFamily: 'Nunito Sans, sans-serif', border: '1px solid #FF4A17', borderRadius: '5px'}} className="text-[14.4px] uppercase font-semibold block px-10 py-5 text-center text-[#222222]">
                                                Buy Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default NavBar;

{/* <li><Link to='/'>Home</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/contact">Contact</Link></li>
<li><Link to="/faqs">Faqs</Link></li> */}