const BoxCard = () => {
  return (
    <>
      <div className="bg-black max-w-[500px] max-h-[700px] w-full relative rounded-lg bg-white/60 shadow-2xl ring-1 ring-gray-900/10 transition-transform duration-300 ease-in-out hover:scale-105 z-10">
        {/* <img src="https://placehold.co/600x400" alt="" /> */}
      </div>
      <div className="max-w-[400px] max-h-[700px] w-full relative rounded-3xl bg-white/60 shadow-2xl ring-1 ring-gray-900/10 transition-transform duration-300 ease-in-out hover:scale-105 z-10">
        <h1 className="uppercase font-medium m-3 lg:m-5 mt-5 text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl text-center leading-none">hello world</h1>
        <p className="text-justify m-6 sm:m-3 md:m-4 sm:mx-8 md:mx-10 text-sm sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-base"></p>
      </div>
    </>
  );
};

export default BoxCard;
