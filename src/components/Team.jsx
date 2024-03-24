import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Team = () => {
  const iconStyle =
    "text-orange-500 font-bold text-2xl opacity-0 group-hover:opacity-100 transition";
  const workers = [
    {
      id: 1,
      Image: "",
      icon: <FaFacebook />,
      divStyle:
        "w-[70%] md:w-[30%] h-[50vh] bg-[url('https://charity.w3itexperts.com/xhtml/images/our-team/pic5.jpg')] bg-cover bg-center m-auto bg-no-repeat flex items-center justify-center group",
    },
    {
      id: 2,
      Image: "",
      icon: <FaFacebook />,
      divStyle:
        "w-[70%] md:w-[30%] h-[50vh] bg-[url('https://charity.w3itexperts.com/xhtml/images/our-team/pic6.jpg')] bg-cover bg-center m-auto bg-no-repeat flex items-center justify-center group",
    },
    {
      id: 3,
      Image: "",
      icon: <FaFacebook />,
      divStyle:
        "w-[70%] md:w-[30%] h-[50vh] bg-[url('https://charity.w3itexperts.com/xhtml/images/our-team/pic5.jpg')] bg-cover bg-center m-auto bg-no-repeat flex items-center justify-center group",
    },
    {
      id: 4,
      Image: "",
      icon: <FaFacebook />,
      divStyle:
        "w-[70%] md:w-[30%] h-[50vh] bg-[url('https://charity.w3itexperts.com/xhtml/images/our-team/pic6.jpg')] bg-cover bg-center m-auto bg-no-repeat flex items-center justify-center group",
    },
  ];
  return (
    <section className="w-full ">
      <div className="w-[90%] m-auto py-5">
        <h1 className="text-2xl text-center md:text-3xl font-bold text-gray-600">
          Meet your Team
        </h1>
        <p className="text-center text-gray-700 text-[1rem] py-2 md:px-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
          distinctio asperiores culpa, quae accusamus quod exercitationem,
          tempora, dignissimos
        </p>
      </div>

      <div className="w-[90%] m-auto  grid grid-cols-1 sm:grid-cols-2 md:flex flex-col md:flex-row gap-3 items-center justify-center">
        {workers.map((worker) => (
          <div key={worker.id} className={worker.divStyle}>
            <div className="flex gap-10">
              <a href="" className={iconStyle}>
                <FaFacebook />
              </a>
              <a href="" className={iconStyle}>
                <FaInstagram />
              </a>
              <a href="" className={iconStyle}>
                <FaTwitter />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
