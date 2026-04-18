import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

import log from "./img/Rectangle 5.png"
import log1 from "./img/heart.svg"
import log2 from "./img/Fill=True.svg"
import log3 from "./img/Bin.svg"

const CartPage = () => {
  let api = "http://localhost:3000/users";
  const [product, setProduct] = useState([]);

  async function getProduct() {
    try {
      let { data } = await axios.get(api)
      setProduct(data)
    }
    catch (error) {
      alert("Error fetching product:");
    }
  }

  useEffect(() => {
    getProduct()
  }, []);

  const getColorName = (hex) => {
    const colors = {
      "#4A69E2": "Blue",
      "#232321": "Black",
      "#234D41": "Green",
      "#F08155": "Orange",
      "#C9CCC6": "Gray",
      "#677282": "Steel",
      "#925513": "Brown",
      "#353336": "Dark Gray",
      "#BB8056": "Beige",
    };

    return colors[hex] || "Unknown";
  };

  return (
    <>
      <div className='pl-[101px]'>
        <h1 className='text-[32px] font-semibold pt-[130px] '>Saving to celebrate </h1>
        <p className='font-semibold text-[14px] text-[#232321d5] pt-[8px]'>Enjoy up to 60% off thousands of styles during the End of Year sale - while suppiles last. No code needed.</p>
        <a href=""><p className='pt-[8px] font-semibold'>Join us  or Sign-in</p></a>
      </div>
      <div className="flex">
        <div className='w-[781.8px] bg-white rounded-2xl p-[24px]'>
          <div>
            <h1 className='text-[32px] font-semibold text-[#232321]'>Your Bag </h1>
            <p className='opacity-80'>Items in your bag not reserved- check out now to make them yours.</p>
          </div>
          <div className='flex  gap-5 mt-[48px]'>
            <img src={log} alt="" />
            <div>
              <div className='flex'>
                <div className='w-[400px]'>
                  <h1 className='font-bold text-[24px]'>DROPSET TRAINER SHOES  </h1>
                </div>
                <div>
                  <p className='text-[24px] font-bold text-[#4A69E2]'>$130.00</p>
                </div>
              </div>
              <div className='mt-[10px] overflow-y-auto w-[300px] h-[50px]'>
                <h1>
                  Инновационные беговые кроссовки, созданные с использованием переработанного океанического пластика. Подошва 4D напечатана на 3D-принтере.
                </h1>
              </div>
              <div clnassName='flex '>
                <div>
                  <p className=' pt-[10px] text-[16px] font-semibold' >
                    Quantity
                    <span className='pl-[10px] text-[18px]'>10</span>
                  </p>
                </div>
                <div>
                  <p className=' text-[16px] font-semibold' >
                    Size
                    <span className='pl-[10px] text-[18px]'>10</span>
                  </p>
                </div>
              </div>
              <span className="mt-[10px] flex items-center gap-2">
                <span
                  className="w-[20px] h-[20px] rounded-full border"
                  style={{ backgroundColor: "#4A69E2" }}
                ></span>
                {getColorName("#4A69E2")}
              </span>
              <div className="flex gap-[10px] mt-[10px]">
                <div>
                  <img src={log1} alt="" />
                </div>
                <div>
                  <img src={log3} alt="" />
                </div>
              </div>
            </div>
          </div>

        </div >
        <div>
          <h1>Order Summary</h1>
        </div>
      </div>
    </>
  );
};

export default CartPage;