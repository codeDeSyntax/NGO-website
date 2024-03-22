import Navbar from "./Navbar";

const Welcomepage = () => {
  return (
    <section className="w-full h-screen bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.7),rgba(28,0,0,0.8)),url('https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] homepage bg-cover bg-no-repeat  ">
      <div className="w-full  md:w-[100%] m-auto  ">
        <Navbar />

        <div className="w-full h-[40rem] flex flex-col items-center justify-center gap-2">
          <h1 className="text-center text-[1.2rem] sm:text-2xl md:text-4xl font-bold font-mono text-white">
            Your contribution can help <br /> achieve a{" "}
            <span className="text-orange-500"> solution</span>
          </h1>
          <p className="text-center text-[.9rem]  text-gray-400">
            This is a website for NGOs and Organisations
          </p>
          <button type="" className="px-5 py-1 bg-orange-500 text-white">
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
};

export default Welcomepage;
