import React from 'react'

import log from "../imgManifold/Ресурс 1 1.svg"
import log1 from "../imgManifold/6476f21ab8cad4706f751e11_lev 1.svg"
import log2 from "../imgManifold/63c1e4b88ffd31f87447e4ff_sch400 1.svg"
import log3 from "../imgManifold/63c1e4ae1a141592370cc036_ali400 1.svg"
import log4 from "../imgManifold/63c1e496dd3beb601e472dd7_lrp400 1.svg"
import log5 from "../imgManifold/63c1e46417b0ed71a5fcd3d8_pjp400 1.svg"
import log6 from "../imgManifold/63c1e4a319ef310f2e094bec_kfc400 1.svg"
import log7 from "../imgManifold/Ресурс 1 1 (1).svg"
import log8 from "../imgManifold/Frame 12.svg"
import log9 from "../imgManifold/Frame 18.svg"
import log10 from "../imgManifold/Лого.svg"
import log11 from "../imgManifold/Навигация.svg"
import log12 from "../imgManifold/Frame 21.svg"
import log13 from "../imgManifold/Frame 21 (1).svg"
import log14 from "../imgManifold/Vector 1.svg"
import log15 from "../imgManifold/Vector 2.png"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
const Manifold = () => {
    return (
        <>
            <div>
                <div className='pl-[30px] pt-[60px]'>
                    <h1 className='text-[100px] font-bold'><span className='text-[#F5333F]'>BOOST</span> YOUR EMAIL <br /> MARKETING RESULT!</h1>
                    <p className='text-[28px] font-light'>We help B2C brands grow their email-attributed revenue</p>
                    <button className='w-[200px] h-[48px] bg-[#F5333F] mt-[15px] text-[17px] text-white font-medium rounded-[5px] border'>Boost your results</button>
                </div>
                <img className='absolute top-[103px] z-[-1] left-[583px] w-[930px] h-[600px]' src={log} alt="" />
            </div>
            <div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, FreeMode]}
                    className="mt-[160px]"
                >
                    <div >
                        <SwiperSlide><img src={log1} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={log2} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={log3} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={log4} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={log5} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={log6} alt="" /></SwiperSlide>
                    </div>
                </Swiper>
            </div>
            <div>
                <img className='absolute w-[700px] z-[-1]' src={log7} alt="" />
                <div className='flex justify-center pt-[50px]'>
                    <div className='w-[95%] bg-black rounded-[15px] h-[450px]'>
                        <div className='flex items-center justify-center gap-[90px] pt-[60px]'>
                            <h1 className='text-white text-[100px] font-bold'>We are here <br />
                                to
                                <span className='text-[#F5333F]'>
                                    help
                                </span>
                                when:</h1>
                            <img src={log8} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[50px] flex items-center ml-[100px]'>
                <img className='w-[890px]' src={log9} alt="" />
                <div>
                    <img src={log10} />
                    <div className='flex gap-[20px] mt-[30px]'>
                        <h1 className='w-[70px] text-[18px] text-[#F5333F] font-bold'>Result:</h1>
                        <p className='text-[18px] font-medium'>$20K per email campaign</p>
                    </div>
                    <div className='flex gap-[20px] mt-[20px]'>
                        <h1 className='w-[70px] text-[18px] text-[#F5333F] font-bold'>Type:</h1>
                        <p className='text-[18px] font-medium'>Subscription e-commerce</p>
                    </div>
                    <div className='flex gap-[20px] mt-[20px]'>
                        <h1 className='w-[70px] text-[18px] text-[#F5333F] font-bold'>Company:</h1>
                        <p className='text-[18px] font-medium'>Lev Haolam</p>
                    </div>
                    <div className='flex gap-[20px] mt-[20px]'>
                        <h1 className='w-[70px] text-[18px] text-[#F5333F] font-bold'>Product:</h1>
                        <p className='text-[18px] font-medium'>Handmade gifts from Israel</p>
                    </div>
                    <div className='flex gap-[20px] mt-[20px]'>
                        <h1 className='w-[70px] text-[18px] text-[#F5333F] font-bold'>Platform:</h1>
                        <p className='text-[18px] font-medium'>Klaviyo</p>
                    </div>
                    <button className='w-[140px] border-[#F5333F] border-2 font-medium text-[#F5333F] h-[35px] rounded-[5px] mt-[20px]'>Learn more</button>
                    <img className='mt-[60px]' src={log11} />
                </div>
            </div>
            <div className='flex justify-center mt-[100px]'>
                <div className='w-[92%] bg-black h-[650px] rounded-[8px]'>
                    <div className='flex items-center gap-[90px] mt-[40px]   justify-center'>
                        <h1 className='text-[80px] font-bold text-[#FFFFFF]'>WE <span className='text-[#F5333F]'> TAKE CARE</span> <br /> OF ALL YOUR EMAIL <br /> MARKETING ACTIVITIES</h1>
                        <div>
                            <div className='flex items-center gap-[7px]'>
                                <div className='rounded-full w-[8px] h-[8px] bg-[#F5333F]'></div>
                                <h1 className='text-[18px] text-white'>Planning</h1>
                            </div>
                            <div className='mt-[15px] flex items-center gap-[7px]'>
                                <div className='rounded-full w-[8px] h-[8px] bg-[#F5333F]'></div>
                                <h1 className='text-[18px] text-white'>Design</h1>
                            </div>
                            <div className='mt-[15px] flex items-center gap-[7px]'>
                                <div className='rounded-full w-[8px] h-[8px] bg-[#F5333F]'></div>
                                <h1 className='text-[18px] text-white'>Copywriting</h1>
                            </div>
                            <div className='mt-[15px] flex items-center gap-[7px]'>
                                <div className='rounded-full w-[8px] h-[8px] bg-[#F5333F]'></div>
                                <h1 className='text-[18px] text-white'>Analytics</h1>
                            </div>
                            <div className='mt-[15px] flex items-center gap-[7px]'>
                                <div className='rounded-full w-[8px] h-[8px] bg-[#F5333F]'></div>
                                <h1 className='text-[18px] text-white'>Deliverability</h1>
                            </div>
                            <div className='mt-[15px] flex items-center gap-[7px]'>
                                <div className='rounded-full w-[8px] h-[8px] bg-[#F5333F]'></div>
                                <h1 className='text-[18px] text-white'>Automation</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center gap-[50px] mt-[90px]'>
                        <p className='text-[18px] text-white'><span className='text-[#F5333F]'> For midsize businesses </span>, we become your budget-friendly email <br /> marketing team, ensuring revenue from emails at a fraction <br /> of in-house costs. Discover how it works!</p>
                        <div className='bg-[#FFFFFF] w-[1px]'></div>
                        <p className='text-[18px] text-white'><span className='text-[#F5333F]'> For email marketers at larger companies, </span> we enhance your <br /> productivity by handling execution, allowing you to focus on <br /> strategy. Learn why we are your support, not your competition!</p>
                    </div>
                </div>
            </div>
            <div className='ml-[5%] mt-[100px] flex '>
                <div>
                    <h1 className='text-[90px] font-bold'>TESTIMONIALS</h1>
                    <div className=' mt-[40px] w-[650px] border px-7 py-6 shadow-2xl border-[#D1D1D1] rounded-[8px]'>
                        <img src={log12} alt="" />
                    </div>
                    <div className='mt-[60px] w-[650px] border px-7 py-6 shadow-2xl border-[#D1D1D1] rounded-[8px]'>
                        <img src={log13} alt="" />
                    </div>
                </div>
                <div>
                    <img className='left-[55%] z-10 absolute w-[600px]' src={log14} alt="" />
                    <img className=' left-[0px] left-[107px] relative w-[600px]' src={log15} alt="" />
                </div>
            </div>
            <div className='mt-[70px] bg-[#F5F5F5] border border-[#D1D1D1]' >
                <div className='flex justify-center  h-[700px] mx-[5%] pt-[130px] gap-[100px] my-[70px] bg-black rounded-2xl'>
                    <div>
                        <h1 className='text-[90px] text-white font-bold '>Subscribe <br /> to <span className='text-[#F5333F]'> L.U.Y.E</span></h1> <br />
                        <p className='text-[18px] font-bold text-[#F5333F]'> Level Up Your Email Newsletter</p>
                    </div>
                    <div>
                        <p className='text-white'>Our aim is to level up your email marketing to world-class standards. We want <br /> to bring joy to your readers and deliver excellent ROI for your business. <br /> That s why we created our email newsletter. <br /> <br />
                            But here is the thing: it's not just about us promoting our agency servics <br /> (we promise!). In our emails, we share valuable advice and practical tips based <br /> on our own experiences. Our goal is to help you enhance your email marketing <br /> without breaking the bank. <br /> <br />
                            et's join forces and make your emails shine!</p>
                                                        <p className='text-[30px] text-white font-bold'>Subscribe to L.U.Y.E.</p>
                            <div className="flex items-center">
                                <div>
                                <input className="bg-white rounded-tl-[5px] rounded-bl-[5px] w-[500px] mt-[20px] h-[40px] pl-[10px]"  type="text" />
                            </div>
                                <button className='w-[100px] text-[14px] font-bold text-white rounded-tr-[5px] rounded-br-[5px] mt-[20px] bg-[#F5333F] h-[40px]'>SUBSCRIBE</button>
                            </div>
                            <p className='text-[16px] text-[#C2C2C2] pt-[20px]'>Согласие на получение писем?</p>
                            </div>
            </div>
            </div>
                                    </>
    )
}

export default Manifold
