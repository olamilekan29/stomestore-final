// import logo from '../assets/img/logo.png';
// const Footer = () => {
//   return(
//     <>

    
//     <div className='md:px-29 flex items-center justify-between md:py-30 py-10'>
//       <div>
//         <img src={logo} alt="" className='w-[150px] pb-15' />
//         <h3 className='text-[#b5becc] text-sm pb-5'>info@farouq.com</h3>
//         <h3 className='text-[#b5becc] text-sm pb-5'>08031112007</h3>

//       </div>


//       <div>
//         <h2 className='text-xl font-bold text-[#343A30] pb-5 '>Services</h2>
//         <ul>
//         <li className='text-[#b5becc] text-sm pb-5 cursor-pointer hover:text-orange-500 hover:translate-x-2 transition-all duration-500'>Ecommerce</li>
//         <li className='text-[#b5becc] text-sm pb-5 cursor-pointer hover:text-orange-500 hover:translate-x-2 transition-all duration-500'>Buy & Sell</li>
//         <li className='text-[#b5becc] text-sm pb-5 cursor-pointer hover:text-orange-500 hover:translate-x-2 transition-all duration-500'>How It Work </li>
//       </ul>
//       </div>
      
      
//       <div>
//         <h2 className='text-xl font-bold text-[#343A30] pb-5 '>About Us</h2>

//         <ul>
//         <li className='text-[#b5becc] text-sm pb-5 cursor-pointer hover:text-orange-500 hover:translate-x-2 transition-all duration-500'>Contact Us</li>
//         <li className='text-[#b5becc] text-sm pb-5 cursor-pointer hover:text-orange-500 hover:translate-x-2 transition-all duration-500'>Join Whitelist</li>
//         <li className='text-[#b5becc] text-sm pb-5 cursor-pointer hover:text-orange-500 hover:translate-x-2 transition-all duration-500'>Privacy Policy</li>
//       </ul>
//       </div>
      
      
      
//       <div>
//         <h2 className='text-xl font-bold text-[#343A30] pb-5 '>Our Address </h2>
//         <ul>
//         <li className='text-[#b5becc] text-sm pb-5 cursor-pointer hover:text-orange-500 hover:translate-x-2 transition-all duration-500'>109, Allen Avenue, ikeja Lagos Nigeria</li>
        
//         </ul>
//       </div>
      
//     </div>
//     </>
//   )
// }
// export default Footer;




import React from 'react';
import logo from '../assets/img/logo.png';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return(
    <footer className='bg-white md:py-20 md:px-29 px-10 py-10 w-full font-sans'>
     
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
        
        <div>
    
          <img src={logo} alt="Logo" className='w-[150px] pb-5' /> 
          <h3 className='text-[#b5becc] text-sm pb-5'>info@farouq.com</h3>
          <h3 className='text-[#b5becc] text-sm pb-5'>08031112007</h3>
        </div>

        <div>
          <h2 className='text-xl font-bold text-[#343A30] pb-5 '>Services</h2>
          <ul>
          <li className='text-[#b5becc] text-sm pb-5 cursor-pointer hover:text-orange-500 hover:translate-x-2 transition-all duration-500'>Ecommerce</li>
          <li className='text-[#b5becc] text-sm pb-5 cursor-pointer hover:text-orange-500 hover:translate-x-2 transition-all duration-500'>Buy & Sell</li>
          <li className='text-[#b5becc] text-sm pb-5 cursor-pointer hover:text-orange-500 hover:translate-x-2 transition-all duration-500'>How It Work </li>
          </ul>
        </div>
        
        
        <div>
          <h2 className='text-xl font-bold text-[#343A30] pb-5 '>About Us</h2>
          <ul>
          <li className='text-[#b5becc] text-sm pb-5 cursor-pointer hover:text-orange-500 hover:translate-x-2 transition-all duration-500'>Contact Us</li>
          <li className='text-[#b5becc] text-sm pb-5 cursor-pointer hover:text-orange-500 hover:translate-x-2 transition-all duration-500'>Join Whitelist</li>
          <li className='text-[#b5becc] text-sm pb-5 cursor-pointer hover:text-orange-500 hover:translate-x-2 transition-all duration-500'>Privacy Policy</li>
          </ul>
        </div>
        
        
        <div>
          <h2 className='text-xl font-bold text-[#343A30] pb-5 '>Our Address </h2>
          <ul>
          <li className='text-[#b5becc] text-sm pb-5 cursor-pointer hover:text-orange-500 hover:translate-x-2 transition-all duration-500'>109, Allen Avenue, ikeja Lagos Nigeria</li>
          <div className='flex mt-4'>
            <FaFacebook className='text-[#b5becc] text-2xl mr-4 cursor-pointer hover:text-orange-500 transition-all duration-500'/>
            <FaInstagram className='text-[#b5becc] text-2xl mr-4 cursor-pointer hover:text-orange-500 transition-all duration-500'/>
            <FaLinkedin className='text-[#b5becc] text-2xl mr-4 cursor-pointer hover:text-orange-500 transition-all duration-500'/>
          </div>
          </ul>
        </div>
      </div>
      <div className='grid text-center items-center justify-center pt-16 text-[#b5becc]'> <h3 >2020 © STOME STORE</h3></div>

    </footer>
  )
}
export default Footer;
