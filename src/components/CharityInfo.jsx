const CharityInfo = () => {
  return (
    <section className="w-[95%] m-auto grid grid-cols-1 md:grid-cols-[35%,65%] ">
      <div className="h-[48vh]  flex flex-col items-center justify-center  sm:p-4  gap-4 sm:gap-2  md:gap-3 bg-[linear-gradient(rgba(230,94,21,0.8),rgba(230,94,21,0.8)),url('https://media.istockphoto.com/id/1498170916/photo/a-couple-is-taking-a-bag-of-food-at-the-food-and-clothes-bank.jpg?s=612x612&w=0&k=20&c=0fnD_g46lvoZ5NdzX5zYOSM4PzM95ezfs5uMe9D1QKs=')] rounded-t-md md:rounded-e-none bg-cover bg-no-repeat ">
        <h1 className="font-bold text-[1.2rem] md:text-xl lg:text-3xl text-center md:text-left text-white">
          Welcome to NGO Info
        </h1>
        <h2 className="text-[1rem] md:  font-sans text-center md:text-left">
          Charity Theme simply dummy text of the printing
        </h2>
        <p className="text-white text-center text-[.9rem] md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          magnam possimus quisquam distinctio, beatae doloremque eligendi.
          Asperiores obcaecati quam vel.
        </p>
        <button className="p-2 w-20 bg-[#251111] text-white rounded-3xl">
          Button
        </button>
      </div>

      <div className="h-[48vh]  flex flex-col items-center justify-center  p-4 sm:p-4  gap-4 sm:gap-4 md:gap-8 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.7),rgba(28,0,0,0.8)),url('https://media.istockphoto.com/id/1498170916/photo/a-couple-is-taking-a-bag-of-food-at-the-food-and-clothes-bank.jpg?s=612x612&w=0&k=20&c=0fnD_g46lvoZ5NdzX5zYOSM4PzM95ezfs5uMe9D1QKs=')] lg:rounded-r-full rounded-b-md bg-cover bg-no-repeat">
        <h1 className="font-bold text-[1.2rem] md:text-3xl text-white">
          Welcome to NGO Info
        </h1>
        <h2 className=" font-sans text-orange-500 text-center">
          Charity Theme simply dummy text of the printing
        </h2>

        <div className="h-2 w-[90%] bg-white">
          <div className="h-full w-1/2 bg-orange-500"></div>
        </div>

        <div className="flex gap-10 text-white">
          <p className="font-bold">Raised : $5960</p>
          <p className="font-bold">Goal : $5960</p>
        </div>

        <button className="p-2 w-20 bg-[#251111] text-white rounded-3xl">
          Button
        </button>
      </div>
    </section>
  );
};

export default CharityInfo;
