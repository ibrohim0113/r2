import log6 from "./img/Rectangle 1.svg"
import log7 from "./img/Rectangle 5.svg"
import log8 from "./img/Frame 23.svg"
import log9 from "./img/Frame 25 (1).svg"
import log10 from "./img/Ellipse 1.svg"
import log11 from "./img/Frame 1443.svg"
import log12 from "./img/image 38.svg"
import log3 from "./img/Frame 9.svg"
import log4 from "./img/image 14.svg"
import log5 from "./img/Rectangle 2.svg"
import { Link } from "react-router"

const Manifold = () => {
    return (
        <>
            <div className="">

                <h1 className="pt-[40px] text-[223px] font-bold text-center">DO IT  <span className="text-[#4A69E2]"> RIGHT</span>
                </h1>

                <div className="flex justify-center">
                    <div
                        style={{
                            backgroundImage: `url(${log4})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            width: "1320px",
                            height: "750px",
                            borderRadius: "24px",
                            marginBottom: "100px"
                        }}
                    >

                        <img className="mt-[80px]" src={log3} />

                        <div className="flex justify-between pl-[48px] pr-[32px] mt-[64px]">
                            <div>
                                <h1 className="pt-[60px] text-[74px] font-semibold text-white">NIKE AIR MAX</h1>
                                <p className="text-[24px] font-semibold text-[#E7E7E3]">Nike introducing the new air max for <br /> everyone's comfort</p>
                                <button className="bg-[#4A69E2] w-[138px] h-[48px]  rounded-[8px] text-white text-[14px] font-semibold mt-[24px]">Shop now</button>
                            </div>
                            <div>
                                <img src={log5} />
                                <img className="pt-[16px]" src={log6} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between pl-[60px] pr-[60px]">
                    <p className="font-semibold text-[74px] leading-[95%] uppercase">DON'T MISS OUT <br /> NEW DROPS </p>
                    <Link to={"/product"}>
                        <button className="mt-[90px] w-[189px] h-[48px]  text-white text-[14px] font-medium rounded-[8px] bg-[#4A69E2]">Shop New Drops</button>
                    </Link>
                </div>
                <div className="gap-[44px] flex ml-[60px] mt-[32px] mb-[120px]"  >
                    <div>
                        <div className="w-[318px] h-[350px] flex justify-center  bg-white rounded-[24px]">
                            <div className="w-[302px] h-[334px] mt-[8px]">
                                <div className="w-[58px] h-[38px] flex items-center justify-center gap-[10px] 
                  rounded-tl-[24px] rounded-br-[24px] 
                  pt-[12px] pr-[16px] pb-[12px] pl-[16px] bg-[#4A69E2] absolute">
                                    <h1 className="text-[12px] text-white font-semibold">New</h1>
                                </div>
                                <img className="w-[302px] h-[334px] " src={log7} alt="" />
                            </div>
                        </div>
                        <h1 className="text-[24px] font-semibold pt-[16px] w-[318px]">ADIDAS 4DFWD X PARLEY RUNNING SHOES </h1>
                        <button className="w-[318px] h-[48px] bg-[#232321] rounded-[8px] text-white text-[14px] font-medium mt-[16px]">View Product - <span className="text-[#FFA52F]"> $125</span></button>
                    </div>
                    <div>
                        <div className="w-[318px] h-[350px] flex justify-center  bg-white rounded-[24px]">
                            <div className="w-[302px] h-[334px] mt-[8px]">
                                <div className="w-[58px] h-[38px] flex items-center justify-center gap-[10px] 
                  rounded-tl-[24px] rounded-br-[24px] 
                  pt-[12px] pr-[16px] pb-[12px] pl-[16px] bg-[#4A69E2] absolute">
                                    <h1 className="text-[12px] text-white font-semibold">New</h1>
                                </div>
                                <img className="w-[302px] h-[334px] " src={log7} alt="" />
                            </div>
                        </div>
                        <h1 className="text-[24px] font-semibold pt-[16px] w-[318px]">ADIDAS 4DFWD X PARLEY RUNNING SHOES </h1>
                        <button className="w-[318px] h-[48px] bg-[#232321] rounded-[8px] text-white text-[14px] font-medium mt-[16px]">View Product - <span className="text-[#FFA52F]"> $125</span></button>
                    </div>
                    <div>
                        <div className="w-[318px] h-[350px] flex justify-center  bg-white rounded-[24px]">
                            <div className="w-[302px] h-[334px] mt-[8px]">
                                <div className="w-[58px] h-[38px] flex items-center justify-center gap-[10px] 
                  rounded-tl-[24px] rounded-br-[24px] 
                  pt-[12px] pr-[16px] pb-[12px] pl-[16px] bg-[#4A69E2] absolute">
                                    <h1 className="text-[12px] text-white font-semibold">New</h1>
                                </div>
                                <img className="w-[302px] h-[334px] " src={log7} alt="" />
                            </div>
                        </div>
                        <h1 className="text-[24px] font-semibold pt-[16px] w-[318px]">ADIDAS 4DFWD X PARLEY RUNNING SHOES </h1>
                        <button className="w-[318px] h-[48px] bg-[#232321] rounded-[8px] text-white text-[14px] font-medium mt-[16px]">View Product - <span className="text-[#FFA52F]"> $125</span></button>
                    </div>
                    <div>
                        <div className="w-[318px] h-[350px] flex justify-center  bg-white rounded-[24px]">
                            <div className="w-[302px] h-[334px] mt-[8px]">
                                <div className="w-[58px] h-[38px] flex items-center justify-center gap-[10px] 
                  rounded-tl-[24px] rounded-br-[24px] 
                  pt-[12px] pr-[16px] pb-[12px] pl-[16px] bg-[#4A69E2] absolute">
                                    <h1 className="text-[12px] text-white font-semibold">New</h1>
                                </div>
                                <img className="w-[302px] h-[334px] " src={log7} alt="" />
                            </div>
                        </div>
                        <h1 className="text-[24px] font-semibold pt-[16px] w-[318px]">ADIDAS 4DFWD X PARLEY RUNNING SHOES </h1>
                        <button className="w-[318px] h-[48px] bg-[#232321] rounded-[8px] text-white text-[14px] font-medium mt-[16px]">View Product - <span className="text-[#FFA52F]"> $125</span></button>
                    </div>
                </div>
                <div className="bg-black pt-[90px] pl-[60px] h-[824px] pr-[60px] mb-[128px]">
                    <div className="flex justify-between">
                        <p className="text-white text-[74px] font-semibold">CATEGORIES</p>
                        <img className="mt-[30px] " src={log8} />
                    </div>
                    <div>
                        <img className="ml-20 mt-[23px]" src={log9} alt="" />
                    </div>
                </div>
                <div className="flex justify-between pl-[60px] pr-[60px]">
                    <p className="font-semibold text-[74px] leading-[95%] uppercase">Reviews</p>
                    <button className="mt-[20px] w-[121px] h-[48px]  text-white text-[14px] font-medium rounded-[8px] bg-[#4A69E2]">SEE ALL</button>
                </div>
                <div className="gap-[56px] flex ml-[60px]">
                    <div className="w-[430px] h-[500px] bg-white rounded-4xl mt-[48px]" >
                        <div className="p-[32px] pb-[8px] flex justify-between items-center ">
                            <div>
                                <p className="text-[24px] font-semibold">Good Quality </p>
                                <p className="">I highly recommend shopping from <br /> kicks</p>
                            </div>
                            <img src={log10} />
                        </div>
                        <img className="ml-[32px]" src={log11} alt="" />
                        <img className="rounded-b-[32px] mt-[26px] w-[430px] h-[326px]" src={log12} />
                    </div>
                    <div className="w-[430px] h-[500px] bg-white rounded-4xl mt-[48px]" >
                        <div className="p-[32px] pb-[8px] flex justify-between items-center ">
                            <div>
                                <p className="text-[24px] font-semibold">Good Quality </p>
                                <p className="">I highly recommend shopping from <br /> kicks</p>
                            </div>
                            <img src={log10} />
                        </div>
                        <img className="ml-[32px]" src={log11} alt="" />
                        <img className="rounded-b-[32px] mt-[26px] w-[430px] h-[326px]" src={log12} />
                    </div>
                    <div className="w-[430px] h-[500px] bg-white rounded-4xl mt-[48px]" >
                        <div className="p-[32px] pb-[8px] flex justify-between items-center ">
                            <div>
                                <p className="text-[24px] font-semibold">Good Quality </p>
                                <p className="">I highly recommend shopping from <br /> kicks</p>
                            </div>
                            <img src={log10} />
                        </div>
                        <img className="ml-[32px]" src={log11} alt="" />
                        <img className="rounded-b-[32px] mt-[26px] w-[430px] h-[326px]" src={log12} />
                    </div>
                </div>

            </div>
            <input type="text" />
        </>
    )
}

export default Manifold
