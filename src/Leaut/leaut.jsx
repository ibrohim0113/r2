import { Link, Outlet } from 'react-router-dom'
import log14 from "./Group.svg"
import log15 from "./caret_down.svg"
import log2 from "./User.svg"
import log3 from "./Search.svg"
import log4 from "./Frame 1430.svg"

const Leaut = () => {
    return (
        <div className='bg-[#E7E7E3] min-h-screen w-full'>
            <nav className="fixed top-[20px] left-0 w-full flex justify-center z-50 px-4">
                <div className="flex items-center rounded-[24px] w-full max-w-[1320px] h-[96px] bg-white px-[32px] justify-between shadow-sm">


                    <div className="flex items-center gap-[30px] w-[300px] ">
                        <Link to="/product" className="font-bold uppercase text-[14px] flex items-center gap-1">
                            New Drops 🔥
                        </Link>

                        <div className="flex items-center gap-1 cursor-pointer">
                            <p className="font-bold uppercase text-[14px]">Men</p>
                            <img src={log15} alt="" className="w-3" />
                        </div>

                        <div className="flex items-center gap-1 cursor-pointer">
                            <p className="font-bold uppercase text-[14px]">Women</p>
                            <img src={log15} alt="" className="w-3" />
                        </div>
                    </div>
                    <div clnassName="w-[300px]">
                        <Link to="/">
                            <img src={log14} alt="KICKS" className="h-[32px]" />
                        </Link>
                    </div>

                    <div className="flex items-center gap-6 w-[300px] pl-[160px]" >
                        <img src={log3} alt="search and profile" className="h-[24px]" />
                        <img src={log2} alt="search and profile" className="h-[24px]" />
                        <Link to="/basket" className="relative">
                            <div className="bg-[#FFA52F] w-8 h-8 rounded-full flex items-center justify-center font-bold text-[12px]">0</div>
                        </Link>
                    </div>
                </div>
            </nav>

            <Outlet />

            <footer className="px-4 pb-8">
                <div className="h-[400px] max-w-[1320px] relative top-[100px]  mx-auto bg-[#4A69E2] rounded-t-4xl  text-white flex flex-col md:flex-row justify-between pt-[40px] pl-[50px] overflow-hidden relative ">
                    <div className="z-10 max-w-lg ">
                        <h2 className="text-5xl font-bold uppercase leading-tight mb-4 text-white">Join our KicksPlus Club & get 15% off</h2>
                        <p className="text-lg opacity-90 mb-8">Sign up for free! Join the community.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-transparent border border-white rounded-xl px-4 py-3 w-full outline-none placeholder:text-white/70"
                            />
                            <button className="bg-[#232321] px-8 py-3 rounded-xl font-bold uppercase text-white hover:bg-black transition-all">Submit</button>
                        </div>
                    </div>
                    <div className="text-[12rem] font-black opacity-10 absolute right-[-5%] select-none pointer-events-none">
                        KICKS
                    </div>
                </div>

                <div className="max-w-[1320px] z-[10] relative mx-auto bg-[#232321] rounded-[48px] p-12 text-white">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div>
                            <h3 className="text-[#FFA52F] text-2xl font-bold mb-6">About us</h3>
                            <p className="text-gray-400 leading-relaxed">
                                We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#FFA52F] text-2xl font-bold mb-6">Categories</h3>
                            <ul className="space-y-3 text-white font-medium">
                                <li>Runners</li>
                                <li>Sneakers</li>
                                <li>Basketball</li>
                                <li>Outdoor</li>
                                <li>Golf</li>
                                <li>Hiking</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#FFA52F] text-2xl font-bold mb-6">Company</h3>
                            <ul className="space-y-3 text-white font-medium">
                                <li>About</li>
                                <li>Contact</li>
                                <li>Blogs</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#FFA52F] text-2xl font-bold mb-6">Follow us</h3>
                            <div className="flex gap-4">
                                <img src={log4} alt="social media icons" className="h-6 cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-12 border-t border-white/10 text-center">
                        <h1 className="text-[15vw] font-black leading-none select-none opacity-90">KICKS</h1>
                    </div>
                </div>

                <p className="text-center mt-8 text-gray-500 font-medium">
                    © All rights reserved | Made with ❤️ by Visiata Systems International
                </p>
            </footer>
        </div>
    )
}

export default Leaut