

const servicesData = {
  itServices: [
    {
      title: "IT Support + Helpdesk",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vero quaerat quae velit recusandae deleniti quas? Unde eveniet asperiores consequatur fugit quae perspiciatis dolor neque. Alias quidem minima minus suscipit!",
      imageUrl: "https://placehold.co/500x200/png",
    },
    {
      title: "IT Projects",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vero quaerat quae velit recusandae deleniti quas? Unde eveniet asperiores consequatur fugit quae perspiciatis dolor neque. Alias quidem minima minus suscipit!",
      imageUrl: "https://placehold.co/500x200/png",
    },
    {
      title: "Business Technology Advisory",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vero quaerat quae velit recusandae deleniti quas? Unde eveniet asperiores consequatur fugit quae perspiciatis dolor neque. Alias quidem minima minus suscipit!",
      imageUrl: "https://placehold.co/500x200/png",
    },
  ],
  webServices: [
    {
      title: "Beautiful + Affordable Websites",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vero quaerat quae velit recusandae deleniti quas? Unde eveniet asperiores consequatur fugit quae perspiciatis dolor neque. Alias quidem minima minus suscipit!",
      imageUrl: "https://placehold.co/500x200/png",
    },
    {
      title: "Custom Web and Mobile Applications",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vero quaerat quae velit recusandae deleniti quas? Unde eveniet asperiores consequatur fugit quae perspiciatis dolor neque. Alias quidem minima minus suscipit!",
      imageUrl: "https://placehold.co/500x200/png",
    },
    {
      title: "Custom Web and Mobile Applications",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vero quaerat quae velit recusandae deleniti quas? Unde eveniet asperiores consequatur fugit quae perspiciatis dolor neque. Alias quidem minima minus suscipit!",
      imageUrl: "https://placehold.co/500x200/png",
    },
  ],
  cloudServices: [
    {
      title: "Cloud Services",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vero quaerat quae velit recusandae deleniti quas? Unde eveniet asperiores consequatur fugit quae perspiciatis dolor neque. Alias quidem minima minus suscipit!",
      imageUrl: "https://placehold.co/500x200/png",
    },
    {
      title: "Cloud Servers",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vero quaerat quae velit recusandae deleniti quas? Unde eveniet asperiores consequatur fugit quae perspiciatis dolor neque. Alias quidem minima minus suscipit!",
      imageUrl: "https://placehold.co/500x200/png",
    },
    {
      title: "Cloud-Hosted Email",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vero quaerat quae velit recusandae deleniti quas? Unde eveniet asperiores consequatur fugit quae perspiciatis dolor neque. Alias quidem minima minus suscipit!",
      imageUrl: "https://placehold.co/500x200/png",
    },
  ],
};

function BoxCard () {
  return (
    <div className="font-inter">
      {/* IT Services Section */}
      <div className="mb-16 md:mb-24 lg:mb-32 2xl:mb-40">
        <div className="text-center w-full h-auto flex justify-center items-center flex-col">
          <h1 className="m-3 p-1 font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#56CCF2] to-[#0081FB] text-5xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[120px] 2xl:text-[140px] leading-none">
            IT Services
          </h1>
          <div className="w-5/6 sm:w-2/3 md:w-5/6 lg:w-2/3 xl:w-2/3 2xl:w-2/3">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-normal capitalize m-1 p-1">
              Whether you're a startup or enterprise, trust us to optimize your
              technology and drive your business forward. Explore our services
              and let us be your trusted digital partner.
            </p>
            
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-5 m-3 justify-items-center">
          {servicesData.itServices.map((service, index) => (
            <div
              key={index}
              className="w-full max-w-[550px] card relative rounded-2xl bg-white/60 p-4 shadow-2xl ring-1 ring-gray-900/10 transition-transform duration-300 ease-in-out z-10 hover:scale-105"
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-auto rounded-t-2xl"
              />
              <h1 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl m-3 text-center leading-none font-medium">
                {service.title}
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg font-normal capitalize text-justify m-3 p-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Web Services Section */}
      <div className="mb-16 md:mb-24 lg:mb-32 2xl:mb-40">
        <div className="text-center w-full h-auto flex justify-center items-center flex-col">
          <h1 className="m-3 p-1 font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#56CCF2] to-[#0081FB] text-5xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[120px] 2xl:text-[140px] leading-none">
            WEB Services
          </h1>
          <div className="w-5/6 sm:w-2/3 md:w-5/6 lg:w-2/3 xl:w-2/3 2xl:w-2/3">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-normal capitalize m-1 p-1">
              Explore Residue Solution's top-notch web services for a powerful
              online presence. From sleek designs to seamless development, we
              tailor solutions to elevate your brand and engage your audience
              effectively.
            </p>
            <div className="flex justify-center items-end">
              <a href="#">
                <FaArrowCircleRight className="text-[#0081FB] m-2 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-5 m-3 justify-items-center">
          {servicesData.webServices.map((service, index) => (
            <div
              key={index}
              className="w-full max-w-[550px] card relative rounded-2xl bg-white/60 p-4 shadow-2xl ring-1 ring-gray-900/10 transition-transform duration-300 ease-in-out z-10 hover:scale-105"
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-auto rounded-t-2xl"
              />
              <h1 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl m-3 text-center leading-none font-medium">
                {service.title}
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg font-normal capitalize text-justify m-3 p-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Cloud Services Section */}
      <div>
        <div className="text-center w-full h-auto flex justify-center items-center flex-col">
          <h1 className="m-3 p-1 font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#56CCF2] to-[#0081FB] text-5xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[120px] 2xl:text-[140px] leading-none">
            Cloud Services
          </h1>
          <div className="w-5/6 sm:w-2/3 md:w-5/6 lg:w-2/3 xl:w-2/3 2xl:w-2/3">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-normal capitalize m-1 p-1">
              Elevate your business with our cloud services. We provide secure
              and scalable cloud solutions tailored to your unique needs,
              ensuring your data and applications are always available and
              protected.
            </p>
            <div className="flex justify-center items-end">
              <a href="#">
                <FaArrowCircleRight className="text-[#0081FB] m-2 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-5 m-3 justify-items-center">
          {servicesData.cloudServices.map((service, index) => (
            <div
              key={index}
              className="w-full max-w-[550px] card relative rounded-2xl bg-white/60 p-4 shadow-2xl ring-1 ring-gray-900/10 transition-transform duration-300 ease-in-out z-10 hover:scale-105"
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-auto rounded-t-2xl"
              />
              <h1 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl m-3 text-center leading-none font-medium">
                {service.title}
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg font-normal capitalize text-justify m-3 p-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BoxCard;
