import log from './img/image 14 (1).svg'
import log1 from './img/chevron_down.svg'
import log2 from './img/chevron_up.svg'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Services = () => {
  const api = "http://localhost:3000/products"
  const [open, setOpen] = useState(false);
  const [REFINE, setREFINE] = useState(false);
  const [SIZE, setSIZE] = useState(false);
  const [SIZE2, setSIZE2] = useState(false);
  const [Gender, setGender] = useState(false);
  const [Price, setPrice] = useState(false);
  const [products, setProducts] = useState([]);
   const navigate = useNavigate();

  async function getProducts() {
    try {
      const response = await axios.get(api);
      setProducts(response.data);
    } catch (error) {
      alert("Error fetching products: " + error.message);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <>
      <div className='flex justify-center  pt-[140px]'>
        <div className="w-full max-w-[1320px] h-[395px] rounded-3xl overflow-hidden relative bg-black">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
          <img
            src={log}
            alt="shoe"
            className="absolute right-0 top-1/2 -translate-y-1/2 h-[120%] object-contain"
          />
          <div className="relative z-20 p-10 text-white max-w-[500px]">
            <p className="pt-[100px] text-sm text-gray-300 mb-2">Limited time only</p>
            <h1 className="text-5xl font-bold mb-4">
              Get 30% off
            </h1>
            <p className="text-gray-400">
              Sneakers made with your comfort in mind so you can put all of your focus into your next session
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-between ml-[101px] mr-[101px] mt-[32px]'>
        <div>
          <h1 className='font-semibold text-[36px]'>Life Style Shoes</h1>
          <p className='font-semibold opacity-80'>122 items</p>
        </div>
        <div className='w-[184px] h-[56px] rounded-[16px] items-center  justify-center bg-white flex gap-[46px] '>
          <h1 className='font-semibold'>Trending</h1>
          <img className='w-[24px] h-[24px]' src={log1} alt="" />
        </div>
      </div>
      <div className='ml-[101px] mt-[32px] flex gap-[18.5px]'>
        <div>
          <p className='text-[24px] font-semibold'>Filters</p>
          <div onClick={() => setREFINE(!REFINE)} className='flex w-[315px] justify-between mt-[24px]'>
            <p className='font-semibold'>REFINE BY</p>
            <img className='w-[24px] h-[24px]' src={REFINE ? log2 : log1} alt="xxxxxxxxxxxxxxxxx" />
          </div>
          {REFINE && (
            <div className='flex  gap-[16px] mt-[16px]'>
              <button className='bg-[#4A69E2] rounded-[12px] '><p className='font-semibold text-white py-[12px] px-[16px]  '>Mens</p> </button>
              <button className='bg-[#4A69E2] rounded-[12px] '><p className='font-semibold text-white py-[12px] px-[16px]  '>Casual</p> </button>
            </div>
          )}
          <div onClick={() => setSIZE(!SIZE)} className='flex w-[315px] justify-between mt-[24px]'>
            <p className='font-semibold'>SIZE</p>
            <img className='w-[24px] h-[24px]' src={SIZE ? log2 : log1} alt="xxxxxxxxxxxxxxxxx" />
          </div>
          {
            SIZE && (
              <div className='mt-[16px] gap-[16px]  flex w-[315px] flex-wrap'>
                <button className='font-medium text-white text-[14px] bg-black w-[50px] h-[48px] rounded-[8px]'>38</button>
                <button className='font-medium text-[#8F8C91] text-[14px] bg-[#D2D1D3] w-[50px] h-[48px] rounded-[8px]'>39</button>
                <button className='font-medium text-[#8F8C91] text-[14px] bg-[#D2D1D3] w-[50px] h-[48px] rounded-[8px]'>40</button>
                <button className='font-medium text-black text-[14px] bg-white w-[50px] h-[48px] rounded-[8px]'>41</button>
                <button className='font-medium text-black text-[14px] bg-white w-[50px] h-[48px] rounded-[8px]'>42</button>
                <button className='font-medium text-black text-[14px] bg-white w-[50px] h-[48px] rounded-[8px]'>43</button>
                <button className='font-medium text-black text-[14px] bg-white w-[50px] h-[48px] rounded-[8px]'>44</button>
                <button className='font-medium text-black text-[14px] bg-white w-[50px] h-[48px] rounded-[8px]'>45</button>
                <button className='font-medium text-black text-[14px] bg-white w-[50px] h-[48px] rounded-[8px]'>46</button>
                <button className='font-medium text-black text-[14px] bg-white w-[50px] h-[48px] rounded-[8px]'>47</button>
              </div>
            )
          }
          <div className="w-[304px]">
            <div
              onClick={() => setOpen(!open)}
              className="flex w-[315px] justify-between mt-[24px]"
            >
              <p className='font-semibold'>Price</p>
              <img className='w-[24px] h-[24px]' src={open ? log2 : log1} alt="xxxxxxxxxxxxxxxxx" />
            </div>
            {open && (
              <div className="pt-[16px] gap-[18.75px] flex w-[315px] flex-wrap">
                <button className='w-[48px] h-[48px] rounded-[8px] bg-[#4A69E2]'></button>
                <button className='w-[48px] h-[48px] rounded-[8px] bg-[#FFA52F]'></button>
                <button className='w-[48px] h-[48px] rounded-[8px] bg-[#232321]'></button>
                <button className='w-[48px] h-[48px] rounded-[8px] bg-[#234D41]'></button>
                <button className='w-[48px] h-[48px] rounded-[8px] bg-[#353336]'></button>
                <button className='w-[48px] h-[48px] rounded-[8px] bg-[#F08155]'></button>
                <button className='w-[48px] h-[48px] rounded-[8px] bg-[#C9CCC6]'></button>
                <button className='w-[48px] h-[48px] rounded-[8px] bg-[#677282]'></button>
                <button className='w-[48px] h-[48px] rounded-[8px] bg-[#925513]'></button>
                <button className='w-[48px] h-[48px] rounded-[8px] bg-[#BB8056]'></button>
              </div>
            )}
          </div>
          <div onClick={() => setSIZE2(!SIZE2)} className='flex w-[315px] justify-between mt-[24px]'>
            <p className='font-semibold'>SIZE</p>
            <img className='w-[24px] h-[24px]' src={SIZE2 ? log2 : log1} alt="xxxxxxxxxxxxxxxxx" />
          </div>
          {SIZE2 && (
            <div className='mt-[17px]'>
              <div className='gap-[16px] flex'>
                <input className='w-[16px] ' type="checkbox" />
                <p className='font-semibold'>Casual shoes</p>
              </div>
              <div className='gap-[16px] flex mt-[8px]'>
                <input className='w-[16px] ' type="checkbox" />
                <p className='font-semibold'>Runners</p>
              </div>
              <div className='gap-[16px] flex mt-[8px]'>
                <input className='w-[16px] ' type="checkbox" />
                <p className='font-semibold'>Hiking</p>
              </div>
              <div className='gap-[16px] flex mt-[8px]'>
                <input className='w-[16px] ' type="checkbox" />
                <p className='font-semibold'>Sneaker</p>
              </div>
              <div className='gap-[16px] flex mt-[8px]'>
                <input className='w-[16px] ' type="checkbox" />
                <p className='font-semibold'>Basketball</p>
              </div>
              <div className='gap-[16px] flex mt-[8px]'>
                <input className='w-[16px] ' type="checkbox" />
                <p className='font-semibold'>Golf</p>
              </div>
              <div className='gap-[16px] flex mt-[8px]'>
                <input className='w-[16px] ' type="checkbox" />
                <p className='font-semibold'>Outdoor</p>
              </div>
            </div>
          )}
          <div onClick={() => setGender(!Gender)} className='flex w-[315px] justify-between mt-[24px]'>
            <p className='font-semibold'>GENDER</p>
            <img className='w-[24px] h-[24px]' src={Gender ? log2 : log1} alt="xxxxxxxxxxxxxxxxx" />
          </div>
          {Gender && (
            <div>
              <div className='gap-[16px] flex mt-[16px]'>
                <input className='w-[16px] ' type="checkbox" />
                <p className='font-semibold'>Men</p>
              </div>
              <div className='gap-[16px] flex mt-[8px]'>
                <input className='w-[16px]' type="checkbox" />
                <p className='font-semibold'>Women</p>
              </div>
            </div>
          )}
          <div onClick={() => setPrice(!Price)} className='flex w-[315px] justify-between mt-[24px]'>
            <p className='font-semibold'>Price</p>
            <img className='w-[24px] h-[24px]' src={Price ? log2 : log1} alt="xxxxxxxxxxxxxxxxx" />
          </div>
          {Price && (
            <div>
              <input className='border w-[315px] mt-[16px]' type="range" />
              <div className='mt-[5px] flex justify-between w-[315px]'>
                <p className='opacity-80'>$0</p>
                <p className='opacity-80'>$1000</p>
              </div>
            </div>
          )}
        </div>
        <div className='flex gap-[16px] flex-wrap'>
          {products.map((product) => (
            <div >
              <div key={product.id} className="w-[318px] h-[350px] flex justify-center  bg-white rounded-[24px]">
                <div className="w-[302px] h-[334px] mt-[8px]">
                  <div className="w-[58px] h-[38px] flex items-center justify-center gap-[10px] 
                            rounded-tl-[24px] rounded-br-[24px] 
                            pt-[12px] pr-[16px] pb-[12px] pl-[16px] bg-[#FFA52F] absolute">
                    <h1 className="text-[12px]  font-bold ">New</h1>
                  </div>
                  <img className="w-[302px] h-[334px] " src={product.img} alt="" />
                </div>
              </div>
              <h1 className="text-[24px] font-bold pt-[16px] h-[100px] w-[318px]">{product.nameProduct} </h1>
              <button
                onClick={() => navigate(`/product/${product.id}`)}
                className="w-[318px] h-[48px] bg-[#232321] rounded-[8px] text-white text-[14px] font-medium mt-[16px]">View Product - $ {product.price}</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Services
