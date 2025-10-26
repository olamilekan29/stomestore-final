import { FaTelegramPlane } from "react-icons/fa";

const Contact = () =>{

  

  return(<>


    <div id="contact" className="grid md:px-29 pb-10">
      <div className="gap-4  pb-15 text-center">
        <h3 className="text-[#343a40] text-2xl mb-4 pt-20">Get in <span className="text-[#ff8057]">Touch</span></h3>
            <p className="text-[#9da9bb] md:m-0 m-5">At stome store, we are always ready and wanting to here from esteem <br  className="hidden md:block"/> customers and users</p>
      </div>


      <div className="md:flex flex-col md:flex-row grid justify-center gap-10 md:pb-20 md:gap-40">

        <div className="grid gap-3">
          <h1 className="text-3xl text-[#343A30] font-bold">Contact Info</h1>
          <h3 className="text-[18px] text-[#9da9bb]">Drop a message for us.</h3>
          <h2 className="text-[20px] text-[#343A30] font-semibold">Address</h2>
          <h3 className="text-[18px] text-[#9da9bb]">1,Ridwan Olaleye Close <br /> Abeokuta, Ogun state</h3>
          <h2 className="text-[20px] text-[#343A30] font-semibold">Phone Number</h2>
          <h3 className="text-[18px] text-[#9da9bb]">08031112007</h3>
        </div>


        <div>
          <form action="">
            <div className="md:flex grid md:gap-10 gap-0.5">
              <div className="grid">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
                <input type="text" placeholder="Your Name" required className="border border-gray-300 text-[#9da9bb] rounded-md p-2 max-w-[500px] w-[300px] mb-4  focus:outline-none focus:border-gray-400"/>
              </div>
              <div className="grid">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Email</label>
                <input type="email" placeholder="Your Email" required className="border border-gray-300 text-[#9da9bb] rounded-md p-2 max-w-[500px] w-[300px] mb-4  focus:outline-none focus:border-gray-400"/>
              </div>
            </div>

            <div className="grid">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">Subject</label>
              <input type="subject" placeholder="Enter Subject" required  className="border border-gray-300 text-[#9da9bb] rounded-md p-2 w-full mb-4  focus:outline-none focus:border-gray-400" />
            </div>

            <div className="grid">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea placeholder="Enter Message" required className="border border-gray-300 text-[#9da9bb] rounded-md p-2 w-full mb-4 focus:outline-none focus:border-gray-400"></textarea>
            </div>

            <div>
              <button type="submit" className="bg-[#ff8057] text-white px-4 py-2 rounded-md h-14 w-45 hover:bg-[#e6734d] flex items-center justify-center gap-3">Send Message  <FaTelegramPlane/></button>
            </div>
          </form>
        </div>




    



      </div>






    </div>



  </>)
}
export default Contact;