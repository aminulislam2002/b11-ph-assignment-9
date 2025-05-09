const HeroSection = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto">
      <div className="py-20 flex justify-center items-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-black">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Find Your Dream Job with <span className="text-[#83B348]">Job Hunter</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-800">
              Discover thousands of job opportunities tailored to your skills. Apply with ease and take the next step in your
              career journey today!
            </p>
          </div>
          <div className="ml-8 hidden sm:block">
            <img
              src="https://plus.unsplash.com/premium_photo-1664297543985-a0cef55975fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww"
              alt="Hero Image"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
