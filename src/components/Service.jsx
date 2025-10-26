import { FaHeadset } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { FcSelfServiceKiosk } from "react-icons/fc";
import { IoTrophyOutline } from "react-icons/io5";
import { IoBulbOutline } from "react-icons/io5";
import { FcPositiveDynamic } from "react-icons/fc";






const Service = () => {

  
  const ServiceCard = ({ icon, title, description }) => {
    return (
      <div className="group bg-white p-8 rounded-xl shadow-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-orange-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/30">
        {icon}
        <h3 className="text-xl font-bold text-gray-800 mb-2 transition-colors duration-300 ease-in-out group-hover:text-white">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed transition-colors duration-300 ease-in-out group-hover:text-orange-100">
          {description}
        </p>
        <a href="#" className="text-orange-500 font-semibold text-2xl transition-colors duration-300 ease-in-out group-hover:text-white">
          →
        </a>
      </div>
    );
  };
  
  const services = [
    {
      icon: <FaHeadset className=" mb-4 transition-all duration-300 ease-in-out stroke-orange-500 group-hover:stroke-white group-hover:fill-white"/>,
      title: 'Modern Store',
      description: 'Et harum quidem rerum facilis expedita distinctio nam libero tempore cum quibusdam nobis.'
    },
    {
      icon: <BsTools className=" mb-4 transition-all duration-300 ease-in-out stroke-orange-500 group-hover:stroke-white group-hover:fill-white"/>,
      title: 'Buy and Sell',
      description: 'Distinctio nam libero tempore cum quibusdam nobis et harum quidem rerum facilis expedita.'
    },
    {
      icon: <FcSelfServiceKiosk className=" mb-4 transition-all duration-300 ease-in-out stroke-orange-500 group-hover:stroke-white group-hover:fill-white"/>,
      title: 'Quick Delivery',
      description: 'Nam libero tempore cum quibusdam nobis. Et harum quidem rerum facilis expedita distinctio.'
    },
    {
      icon: <IoTrophyOutline className=" mb-4 transition-all duration-300 ease-in-out stroke-orange-500 group-hover:stroke-white group-hover:fill-white"/>,
      title: 'Best Customer Service',
      description: 'Nam libero tempore cum quibusdam nobis. Et harum quidem rerum facilis expedita distinctio.'
    },
    {
      icon: <IoBulbOutline  className=" mb-4 transition-all duration-300 ease-in-out stroke-orange-500 group-hover:stroke-white group-hover:fill-white"/>,
      title: 'Branding Identity',
      description: 'Nam libero tempore cum quibusdam nobis. Et harum quidem rerum facilis expedita distinctio.'
    },
    {
      icon: <FcPositiveDynamic className=" mb-4 transition-all duration-300 ease-in-out stroke-orange-500 group-hover:stroke-white group-hover:fill-white"/>,
      title: 'Dynamic Growth',
      description: 'Nam libero tempore cum quibusdam nobis. Et harum quidem rerum facilis expedita distinctio.'
    }
  ];
  




  return(<>
    <div className="mt-20 md:px-29 pb-40"  id="services" >
      <div className="justify-center row items-center">
        <div className="col-md-8 col-lg-6">
          <div className="title text-center mb-5">
            <h3 className="text-[#343a40] text-2xl mb-4">Our <span className="text-[#ff8057]">Service</span></h3>
            <p className="box-border text-sm text-[#9da9bb] md:p-0 p-5">Stome is an e-commerce store created specifically to bridge the gap between <br className="hidden lg:block"/> buyers/sellers, tackle the hassle of products delivery and the digital payment <br /> service.</p>
          </div>
        </div>
      </div>
      <div>
      <div className=" min-h-screen font-sans flex items-center justify-center p-4">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
      </div>




    </div>
  
  </>)
}
export default Service;