import { MdGroups } from "react-icons/md";
import Hero2 from '../assets/img/hero2.png';
import Hero3 from '../assets/img/hero3.png';
import Hero4 from '../assets/img/hero4.png';
import { CiLaptop } from "react-icons/ci";
import { FaChartLine } from "react-icons/fa6";


const Features = () => {
 
  return(<>

    <div id="features" className="grid md:px-29 ">
    <div className="gap-4  pb-15 text-center">
        <h3 className="text-[#343a40] text-2xl mb-4 pt-20">Our <span className="text-[#ff8057]">Features</span></h3>
            <p className="text-[#9da9bb]">Get to know what makes us stand out</p>
        </div>
      <div className="grid  gap-15 px-4 ">
      <div className="md:flex flex-col md:flex-row grid items-center  gap-10 md:pb-10 md:gap-40">
        <div>
          <img src={Hero2} alt=""  className="md:w-[500px] w-[300px]"/>
        </div>
        <div>
        <div className="bg-[#ff8057] h-[50px] mb-7 w-[50px] leading-10 text-center fill-white rounded-sm text-2xl flex items-center justify-center"> <CiLaptop className=""/></div>
         <h2 className="text-xl text-[#343a40] pb-5">Ecommerce Store</h2>
         <h3 className="text-[15px] text-[#9da9bb] pb-5">User friendly interface.</h3>
         <a className="text-[18px] text-[#ff8057] cursor-pointer">Read More →<span className="ml-2 "></span></a>
        </div>

        
        </div>
        
        
        <div className="md:flex flex-col md:flex-row grid items-center  gap-10 md:pb-10 md:gap-40">
       
        <div className="md:mx-30 ">
        <div className="bg-[#ff8057] h-[50px] mb-7 w-[50px] leading-10 text-center fill-white rounded-sm text-2xl flex items-center justify-center"> <MdGroups className=""/></div>
         <h2 className="text-xl text-[#343a40] pb-5">Reliable Services</h2>
         <h3 className="text-[15px] text-[#9da9bb] pb-5">Sed perspiciatis unde omnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo excepturi sint occaecati cupiditate architecto.</h3>
         <a className="text-[18px] text-[#ff8057] cursor-pointer">Read More →<span className="ml-2 "></span></a>
        </div>
         <div>
          <img src={Hero3} alt=""  className="md:w-[500px] w-[300px]"/>
        </div>

        
        
        </div>
        <div>
        <div className="md:flex flex-col md:flex-row grid items-center  gap-10 md:pb-10 md:gap-40">
        <div>
          <img src={Hero4} alt=""  className="md:w-[500px] w-[300px]"/>
        </div>
        <div>
        <div className="bg-[#ff8057] h-[50px] mb-7 w-[50px] leading-10 text-center fill-white rounded-sm text-2xl flex items-center justify-center"> <FaChartLine className=""/></div>
         <h2 className="text-xl text-[#343a40] pb-5">Linking Buyers to Sellers</h2>
         <h3 className="text-[15px] text-[#9da9bb] pb-5">At vero eos accusamus iusto odio soluta nobis est eligendi optio dignissimos ducimus qui blanditiis praesentium as voluptatum deleniti corrupti quos dolores molestias occaecati..</h3>
         <a className="text-[18px] text-[#ff8057] cursor-pointer">Read More →<span className="ml-2 "></span></a>
        </div>

        
        </div>
        </div>
      </div>
    </div>


  </>)

}
export default Features;