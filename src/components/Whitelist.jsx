import hero5 from '../assets/img/hero5.png';
import hero6 from '../assets/img/hero6.png';
import hero7 from '../assets/img/hero7.png';


const Whitelist = () => {
  return (
    <>
      <div className='grid justify-center items-center  text-center  md:pb-30 pb-10 md:p-0 px-4 gap-10  bg-[#ebeef7] md:px-29 '>

        <div className='flex justify-between items-center text-[ff8057] pt-20'>
          <img src={hero5} alt="" />
          <span className='text-[#ff8057] text-3xl'>+</span>
          <img src={hero6} alt="" />
          <span className='text-[#ff8057] text-3xl'>+</span>
          <img src={hero7} alt="" />
        </div>
        <div>
          <h2 className='text-[#97adc4] text-md pt-2'>Join our Whitelist For New Content, <br />Update And Giveaways!</h2>
        </div>

        <div className='grid py-10 items-center justify-center'>
          <form action="" className='grid items-center justify-center gap-3'>
          <input type="name" placeholder='Full Name' className=' mt-[10px] md:w-[550px] w-[300px] p-4 text-[17px] text-[#abb4c4] outline-none bg-white rounded-3xl shadow-[0_3px_8px_rgba(0,0,0,0.1)]' /> 
          <input type="name" placeholder='Email adress' className=' mt- [10px] md:w-[550px] w-[300px] p-4 text-[17px] text-[#abb4c4] outline-none bg-white rounded-3xl shadow-[0_3px_8px_rgba(0,0,0,0.1)]' /> 
          <input type="name" placeholder='Phone Number' className=' mt- [10px] md:w-[550px] w-[300px] p-4 text-[17px] text-[#abb4c4] outline-none bg-white rounded-3xl shadow-[0_3px_8px_rgba(0,0,0,0.1)]' /> 
          </form>
         <div className='flex items-center justify-center'> <button className='max-w-[200px] w-full cursor-pointer h-15 rounded-4xl text-xl text-white grid items-center justify-self mt-10 bg-[#ff8057] transition-transform duration-200 hover:-translate-y-1' >Join Now</button></div>
        </div>

      </div>
    </>
  );
}
export default Whitelist;