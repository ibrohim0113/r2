import { Link, Outlet } from 'react-router'
import log from "../imgManifold/manifold_logotype.svg"
import log1 from "../imgManifold/Frame 30.svg"
const Leaut = () => {
    return (
        <div className=''>
            <nav className='flex border-2 border-[#C2C2C2] h-[103px] justify-between items-center w-full pl-[30px] pr-[30px]'>
                <div className='flex items-center gap-[50px]'>
                    <Link to={"/"}>
                        <img src={log} alt="" />
                    </Link>
                    <div className='flex items-center gap-[30px]'>
                        <Link className='font-normal text-[17px] ' to={"/Services"}>Service</Link>
                        <p className='text-[17px] '>Portfolio</p>
                        <p className='text-[17px] '>Email Marketing Audit</p>
                    </div>
                </div>
                <div>
                    <button className='w-[170px] h-[43px] bg-[#F5333F] rounded-[5px] text-[20px] text-white font-medium'>CONTACT US</button>
                </div>
            </nav>
            <div>
                <Outlet />
                <div className='bg-black'>
                <div className=' bg-black pb-[50px] flex ml-[78px] pt-[40px]'>
                    <img  src={log} alt="" />
                    <div className='flex  gap-[60px] ml-[100px]'> 
                        <div>
                            <p className='text-white'>Services</p>
                            <p className='text-white'>About Us</p>
                        </div>
                        <div>
                            <p className='text-white'>Email Marketing Audit</p>
                            <p className='text-white'>Portfolio</p>
                        </div>
                        <div>
                            <p className='text-white'>Blog</p>
                            <p className='text-white'>Privacy Policy</p>
                        </div>
                    </div>
                    <img className='ml-[400px]' src={log1} alt="" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Leaut
