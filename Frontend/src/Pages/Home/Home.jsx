function Home() {
  return (
    <>
      <div className="w-full h-auto flex justify-around items-center px-10 mt-10 gap-10 flex-wrap">
      <div className="">
          <img className="h-70 md:h-100" src="/images/homeImage.png" alt="" />
        </div>

        <div className="w-[50%]">
          <h1 className="text-2xl md:text-6xl font-bold">
            Your AI-powered Health Companion for Rural India
          </h1>
          <p className="text-sm font-bold text-[#4e9767] mt-4">
            Accessible, Affordable, and Reliable Healthcare at Your Fingertips.
          </p>
          <div className="flex justify-start items-center gap-4 mt-6">
            <button className="p-3 bg-[#17cf54] rounded-2xl font-medium hover:cursor-pointer">Check Symptoms</button>
            <button className="p-3 bg-[#17cf54] rounded-2xl font-medium hover:cursor-pointer">Consult Doctors</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;
