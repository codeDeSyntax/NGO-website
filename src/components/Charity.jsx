import { FaMoneyBill } from "react-icons/fa";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
const Charity = () => {
  const categories = [
    {
      id: 1,
      title: "Education for children",
      target: "125676$",
      raised: "2467$",
      icon: <FaMoneyBill className="text-orange-500" />,
      imageLink: "https://charity.w3itexperts.com/xhtml/images/blog/thum1.jpg",
    },
    {
      id: 2,
      title: "Education for children",
      target: "125676 $",
      raised: "2467 $",
      icon: <FaMoneyBill className="text-orange-500" />,
      imageLink: "https://charity.w3itexperts.com/xhtml/images/blog/thum2.jpg",
    },
    {
      id: 3,
      title: "Education for children",
      target: "125676 $",
      raised: "2467 $",
      icon: <FaMoneyBill className="text-orange-500" />,
      imageLink: "https://charity.w3itexperts.com/xhtml/images/blog/thum3.jpg",
    },
    {
      id: 4,
      title: "Education for children",
      target: "125676 $",
      raised: "2467 $",
      icon: <FaMoneyBill className="text-orange-500" />,
      imageLink: "https://charity.w3itexperts.com/xhtml/images/blog/thum3.jpg",
    },
  ];
  return (
    <section className="w-full min-h-screen ">
      <div className="w-[90%] m-auto">
        <h1 className="text-2xl text-center md:text-3xl font-bold text-gray-600">
          Charity cause..
        </h1>
        <p className="text-center text-gray-700 text-[1rem] py-2 md:px-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
          distinctio asperiores culpa, quae accusamus quod exercitationem,
          tempora, dignissimos
        </p>
      </div>
      <div className="w-[90%] gap-x-3 gap-y-[1rem]  m-auto  grid sm:grid-cols-2 md:grid-cols-[35%,35%,35%] items-center justify-center py-4">
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className={` h-[80vh] bg-white rounded-lg shadow-md hover:bg-opacity-25 `}
            >
              <img
                src={category.imageLink}
                alt={category.title}
                className="w-full h-[40%] object-cover rounded-t-md transition-opacity duration-300 hover:opacity-50 border-b-8 border-orange-500"
              />

              <div className="px-4 py-6 ">
                <h2 className="text-xl  font-bold text-gray-700">
                  {category.title}
                </h2>
                <div className="flex text-orange-500 items-center justify-between  pb-4">
                  <p className="flex items-center font-serif text-[.8rem] md:text-[1rem] gap-1">
                    {category.icon} GOAL
                  </p>
                  <p className="text-[.8rem] md:text-[1rem]">
                    {category.target}
                  </p>
                  <p className="text-gray-600 font-serif text-[.8rem] md:text-[1rem] flex">
                    RAISED :
                    <span className="text-orange-500">{category.raised}</span>
                  </p>
                </div>
                <Slider
                  className=" py-1 md:py-4"
                  autoFocus
                  aut
                  color="orange"
                  startPoint={40}
                  count={4}
                  railStyle={{ color: "orange" }}
                />

                <p className="text-center py-6 font-serif">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rerum rem sit esse assumenda maiores ab nihil sapiente
                  nesciunt minus debitis!
                </p>

                <button className="w-[5rem] p-2 bg-orange-500 text-white">
                  Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Charity;
