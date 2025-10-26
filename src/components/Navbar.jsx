// import { useState } from "react";
// import { CiMenuBurger } from "react-icons/ci";
// import { RxCross1 } from "react-icons/rx";
// import logo from "../assets/img/logo.png";
// import { NavLink } from "react-router-dom";


// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-liner-to-br bg-[#f7f9fe] py-3 md:px-29 ">
//       <div className="h-18 items-center flex justify-between">
        
//         <img src={logo} className="px-4 w-50"/>

//         {/* Desktop Menu */}
//         <div className="hidden sm:block"> 
//        <NavLink to= '/' className="text-gray-500 text-sm px-4 ">Home</NavLink>
//        <NavLink to= '/services' className="text-gray-500 text-sm px-4">Services</NavLink>
//        <NavLink to= '/about' className="text-gray-500 text-sm px-4">About</NavLink>
//        <NavLink to= '/features' className="text-gray-500 text-sm px-4">Features</NavLink>
//        <NavLink to= '/contact' className="text-gray-500 text-sm px-4">Contact Us</NavLink>
//           <button className="bg-[#ff8057] text-white w-30 h-12 rounded-xl">Signup</button>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setIsOpen(true)}
//           className="block sm:hidden px-4 text-3xl text-black cursor-pointer"
//         >
//           <CiMenuBurger />
//         </button>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={`fixed top-0 right-0 h-full w-full bg-gray-200 transform transition-transform duration-300 ease-in-out sm:hidden 
//           ${isOpen ? "translate-x-0" : "translate-x-full"}`}
//       >
//         {/* Close button */}
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-5 right-5 text-3xl text-gray-700 cursor-pointer"
//         >
//           <RxCross1 />
//         </button>

//         {/* Menu Links */}
//         <div className="flex flex-col items-center justify-center h-full space-y-8">
//           <a href="#Home" onClick={() => setIsOpen(false)} className="text-gray-900 text-sm">Home</a>
//           <a href="#About" onClick={() => setIsOpen(false)} className="text-gray-600 text-sm">Services</a>
//           <a href="#Skills" onClick={() => setIsOpen(false)} className="text-gray-600 text-sm">About</a>
//           <a href="#Projects" onClick={() => setIsOpen(false)} className="text-gray-600 text-sm">Features</a>
//           <a href="#Contact" onClick={() => setIsOpen(false)} className="text-gray-600 text-sm">Contact Us </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;



// import { useState } from "react";
// import { CiMenuBurger } from "react-icons/ci";
// import { RxCross1 } from "react-icons/rx";
// import logo from "../assets/img/logo.png";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-liner-to-br bg-[#f7f9fe] py-3 md:px-29 ">
//       <div className="h-18 items-center flex justify-between">
        
//         <img src={logo} className="px-4 w-50" alt="Logo"/>

//         {/* Desktop Menu */}
//         <div className="hidden sm:block"> 
//           <NavLink to='/' className="text-gray-500 text-sm px-4">Home</NavLink>
//           <NavLink to='/services' className="text-gray-500 text-sm px-4">Services</NavLink>
//           <NavLink to='/about' className="text-gray-500 text-sm px-4">About</NavLink>
//           <NavLink to='/features' className="text-gray-500 text-sm px-4">Features</NavLink>
//           <NavLink to='/contact' className="text-gray-500 text-sm px-4">Contact Us</NavLink>
//           <button className="bg-[#ff8057] text-white w-30 h-12 rounded-xl">Signup</button>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setIsOpen(true)}
//           className="block sm:hidden px-4 text-3xl text-black cursor-pointer"
//         >
//           <CiMenuBurger />
//         </button>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={`fixed top-0 right-0 h-full w-full bg-gray-200 transform transition-transform duration-300 ease-in-out sm:hidden 
//           ${isOpen ? "translate-x-0" : "translate-x-full"}`}
//       >
//         {/* Close button */}
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-5 right-5 text-3xl text-gray-700 cursor-pointer"
//         >
//           <RxCross1 />
//         </button>

//         {/* Menu Links */}
//         <div className="flex flex-col items-center justify-center h-full space-y-8">
//           <NavLink to='/' onClick={() => setIsOpen(false)} className="text-gray-900 text-sm">Home</NavLink>
//           <NavLink to='/services' onClick={() => setIsOpen(false)} className="text-gray-600 text-sm">Services</NavLink>
//           <NavLink to='/about' onClick={() => setIsOpen(false)} className="text-gray-600 text-sm">About</NavLink>
//           <NavLink to='/features' onClick={() => setIsOpen(false)} className="text-gray-600 text-sm">Features</NavLink>
//           <NavLink to='/contact' onClick={() => setIsOpen(false)} className="text-gray-600 text-sm">Contact Us</NavLink>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="bg-liner-to-br bg-[#f7f9fe] py-3 md:px-29 ">
      <div className="h-18 items-center flex justify-between">
        
        <img src={logo} className="px-4 w-50" alt="Logo"/>

        {/* Desktop Menu */}
        <div className="hidden sm:block"> 
          <button onClick={() => scrollToSection('home')} className="text-gray-500 text-sm px-4">Home</button>
          <button onClick={() => scrollToSection('services')} className="text-gray-500 text-sm px-4">Services</button>
          <button onClick={() => scrollToSection('about')} className="text-gray-500 text-sm px-4">About</button>
          <button onClick={() => scrollToSection('features')} className="text-gray-500 text-sm px-4">Features</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-500 text-sm px-4">Contact Us</button>
          <button className="bg-[#ff8057] text-white w-30 h-12 rounded-xl">Signup</button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(true)}
          className="block sm:hidden px-4 text-3xl text-black cursor-pointer"
        >
          <CiMenuBurger />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-gray-200 transform transition-transform duration-300 ease-in-out sm:hidden 
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-3xl text-gray-700 cursor-pointer"
        >
          <RxCross1 />
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <button onClick={() => scrollToSection('home')} className="text-gray-900 text-sm">Home</button>
          <button onClick={() => scrollToSection('services')} className="text-gray-600 text-sm">Services</button>
          <button onClick={() => scrollToSection('about')} className="text-gray-600 text-sm">About</button>
          <button onClick={() => scrollToSection('features')} className="text-gray-600 text-sm">Features</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-600 text-sm">Contact Us</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;