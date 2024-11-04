const FooterContent = () => {
    return (
      <>
        <div className="flex flex-col justify-between h-full md:mx-4 lg:mx-6 xl:mx-8">
          <div className="grid md:grid-cols-2  ">
            {/* Get in Touch */}
            <div className="grid md:grid-cols-3 text-center md:text-start md:mt-20 ">
              {/* Contact Us */}
              <div className="">
                <h1 className="font-medium m-2 sm:m-4 capitalize text-lg sm:text-lg md:text-xl xl:text-2xl 2xl:text-4xl">Contact us</h1>
                <p className="m-2 sm:m-2 md:m-1 lg:m-2 xl:m-3 text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-2xl">
                  Our Email <br />
                  <a
                    className="text-black hover:text-[#0081FB]"
                    href="mailto:prabath@residuesolution.com"
                  >
                    prabath@residuesolution.com
                  </a>
                </p>
                <p className="m-2 sm:m-2 md:m-1 lg:m-2 xl:m-3 text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-2xl">
                  Our Phone Number <br />
                  <a
                    href="tel:(+94) 74 277 7201"
                    className="text-black hover:text-[#0081FB]"
                  >
                    (+94) 74 277 7201
                  </a>
                  <br />
                  <a
                    href="tel:(+94) 74 271 8994"
                    className="text-black hover:text-[#0081FB]"
                  >
                    (+94) 74 271 8994
                  </a>
                </p>
                <address className="not-italic text-black hover:text-[#0081FB] m-2 sm:m-2 md:m-1 lg:m-2 xl:m-3 text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-2xl">
                  <a
                    href="https://maps.app.goo.gl/bnu6oNjbhpJUdtbEA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>No. 323,</p>
                    <p>Colombo Main Road,</p>
                    <p>Colombo 05.</p>
                  </a>
                </address>
              </div>
  
              {/* Follow Us */}
              <div className=" flex flex-col">
                <h1 className="font-medium m-2 sm:m-4 capitalize text-lg sm:text-lg md:text-xl xl:text-2xl 2xl:text-4xl">Follow us</h1>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0081FB] m-2 sm:m-2 md:m-1 lg:m-2 xl:m-3 text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-2xl"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0081FB] m-2 sm:m-2 md:m-1 lg:m-2 xl:m-3 text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-2xl"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0081FB] m-2 sm:m-2 md:m-1 lg:m-2 xl:m-3 text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-2xl"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0081FB] m-2 sm:m-2 md:m-1 lg:m-2 xl:m-3 text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-2xl"
                >
                  TikTok
                </a>
              </div>
  
              {/* Services */}
              <div className=" flex flex-col ">
                <h1 className="font-medium m-2 sm:m-3 capitalize text-lg sm:text-lg md:text-xl xl:text-2xl 2xl:text-4xl">Services</h1>
                <a href="#" className="hover:text-[#0081FB] m-2 sm:m-2 md:m-1 lg:m-2 xl:m-3 text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-2xl">
                  Custom Software Development
                </a>
                <a href="#" className="hover:text-[#0081FB] m-2 sm:m-2 md:m-1 lg:m-2 xl:m-3 text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-2xl">
                  Mobile App Development
                </a>
                <a href="#" className="hover:text-[#0081FB] m-2 sm:m-2 md:m-1 lg:m-2 xl:m-3 text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-2xl">
                  IT Consulting
                </a>
                <a href="#" className="hover:text-[#0081FB] m-2 sm:m-2 md:m-1 lg:m-2 xl:m-3 text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-2xl">
                  Website Maintenance
                </a>
                <a href="#" className="hover:text-[#0081FB] m-2 sm:m-2 md:m-1 lg:m-2 xl:m-3 text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-2xl">
                  Website Analytics
                </a>
                <a href="#" className="hover:text-[#0081FB] m-2 sm:m-2 md:m-1 lg:m-2 xl:m-3 text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-2xl">
                  Cloud Security Services
                </a>
                <a href="#" className="hover:text-[#0081FB] m-2 sm:m-2 md:m-1 lg:m-2 xl:m-3 text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-2xl">
                  Cloud Consulting
                </a>
              </div>
            </div>
  
            {/* Connect Tab */}
            <div className="md:flex justify-end items-center">
            <div className="bg-white  w-[250px] h-fit lg:w-[400px] lg:h-[330px]">
              <div className="m-7">
                <h1 className="text-4xl md:text-5xl font-normal">
                  We’d love to connect!
                </h1>
                <p className="pt-5">
                  Whether you're interested in collaborating <br />
                  or just want to chat, feel <br />
                  free to reach out.
                </p>
                <button className="relative px-4 py-2 rounded-full bg-white text-[#0081FB] isolation-auto z-10 border-2 border-[#0081FB] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-[#0081FB] before:transition-all before:duration-700 before:hover:w-full before:z-[-1] hover:text-white before:hover:rounded-full before:rounded-full overflow-hidden transition-all duration-500 ease-in-out text-base font-inter font-normal my-5">
                  + Become a Client
                </button>
              </div>
            </div>
            </div>
          </div>
  <br/>
  <br/>
  
  
  
          {/* Footer Under Section */}
          <div className="grid md:grid-cols-3 content-between text-center">
            {/* Copyright Section */}
            <div className="border font-medium text-center lg:text-start text-sm sm:text-xs md:text-sm lg:text-sm xl:text-lg 2xl:text-xl">
              <p>
                © Copyright 2024. Powered By
                <a href="#" className="text-[#0081FB]">
                  {" "}
                  Residue Solutions
                </a>
              </p>
            </div>
            {/* Policy Section */}
            <div className="border flex justify-center items-center m-3 md:m-0 gap-8 md:gap-3 xl:gap-16 font-medium text-sm sm:text-sm lg:text-sm xl:text-lg 2xl:text-xl">
              <a href="#">Terms of Use</a>
              <a href="#">Privacy Policy</a>
              <a href="#">About Us</a>
            </div>
            {/* Whatsapp Icon */}
            <div className="border "></div>
          </div>
        </div>
      </>
    );
  };
  
  export default FooterContent;
  