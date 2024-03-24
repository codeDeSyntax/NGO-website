const Events = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  return (
    <section className="w-full my-10 ">
      <div className="w-[90%] m-auto flex flex-col md:flex-row items-center gap-4">
        <div className="w-[90%] md:w-[60%] h-24 rounded-bl-[3rem] rounded shadow-sm hover:scale-105 duration-300 flex justify-center items-center hover border-2 p-2 md:bg-gray-100 md:skew-y-3">
          <p className="text-center font-mono underline">
            Get our promotional products and help humanity
          </p>
        </div>
        {/* gradient gradient */}
        <div className="w-[90%] md:w-[60%] h-24 rounded shadow-sm md:border-2 p-2 flex justify-center items-center hover:scale-105 duration flex-col bg-[#2d2122]">
          <p className="text-white">
            Our upcoming{" "}
            <a href="" className="underline p-1 text-orange-500 ">
              {" "}
              events
            </a>{" "}
            :
          </p>
          <p className="text-white">
            Events date: 3rd 0{month},{year}
          </p>
          <p></p>
          <p>Location</p>
        </div>
        <div className="w-[90%] md:w-[60%] h-24 rounded-br-[3rem] rounded shadow-sm border-2 p-2 md:bg-gray-100 md:-skew-y-3 hover:scale-105 flex-col flex justify-center items-center">
          <p>Our latest Achievement</p>
          <p>
            <a href="" className="underline text-orange-500">
              Funds
            </a>
            $498,789,302
          </p>
          <p>
            <a href="" className="underline text-orange-500">
              Members
            </a>
            1,000,000
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;
