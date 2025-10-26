import React from 'react';
import Hero from '../assets/img/hero1.png';

const Home = () => {
  return(<>
  
<div className='bg-[#f7f9fe]' id='home'>
    <div className='md:flex justify-between items-center  pb-30 md:p-0 px-4 gap-10   md:px-29 '>
      <div className='gap-4 grid'>
        <h4 className='text-sm text-[#2558ab] font-bold'>Welcome to STOME STORE</h4>
        <h2 className='text[#343a40] text-4xl/13  '>Buy and Sell on your <br /> Modern Ecommerce Store
        <br /> <span className='text-[#2558ab] font-bold'>STOME</span></h2>
        <h3 className='text-[#9da9bb] text-[15px]/7'>Stome is an e-commerce store created specifically to bridge the gap between buyers/sellers, tackle the hassle of products delivery and the digital payment service.</h3>
        <button className='flex items-center justify-center bg-[#ff8057] text-[15px] text-center text-white font-semibold md:w-50 h-15 rounded cursor-pointer hover:scale-105 transition'>Join Whitelist Now →</button>
      </div>
      <div>
        <img src={Hero} className='max-w-400 md:w-150 w-80 md:mt-0 mt-10 mb-20' alt="" />
      </div>
    </div></div>
  </>)
}
export default Home;