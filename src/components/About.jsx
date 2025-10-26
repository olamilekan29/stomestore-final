const About = () => {
  return (
    <>
      <div id="about" className=" justify-center items-center text-center  pb-30 md:p-0 px-4 gap-10  bg-[#f7f9fe] md:px-29 ">
        <div className="gap-4 grid pb-15">
        <h3 className="text-[#343a40] text-2xl mb-4 md:pt-30 pt-15">About <span className="text-[#ff8057]">Us</span></h3>
            <p className="text-[#9da9bb]">Get to know what makes us stand out</p>
        </div>
        <div className="row md:flex grid items-center justify-center gap-10 md:pb-20 md:gap-40">
          <div className="p-0 m-0">
            <h1 className="text-[30px] leading-10 text-left text-[#343a40]">Passionate About <br className="hidden lg:block"/> Creating Best Online <br className="hidden lg:block"/> Shopping Experience</h1>
          </div>
          <div className="flex gap-10 flex-col md:flex-row text-left">
            <div >
              <h2 className="text-xl mb-5 text-[#343a40]">Our Mission</h2>
              <p className="text-[#9da9bb]">Dedicated to transforming the world of <br className="hidden lg:block"/> online shopping and bridge the gap between <br className="hidden lg:block"/> online buyers and sellers to bring innovation <br className="hidden lg:block"/> to the world of online shopping and <br className="hidden lg:block"/> to bridge the gap between online <br className="hidden lg:block"/> buyers/sellers and provide a better service <br className="hidden lg:block"/> for our customers.</p>
            </div>
            <div >
              <h2 className="text-xl mb-5 text-[#343a40]">Our Vission</h2>
              <p className="text-[#9da9bb]">To create value for both our customers & <br className="hidden lg:block"/> sellers as well as build a network around <br className="hidden lg:block"/> them and build young entrepreneurs and <br className="hidden lg:block"/> attract customers with high valued products <br className="hidden lg:block"/> & services.</p>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}
export default About;