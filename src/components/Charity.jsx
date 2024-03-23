import { FaMoneyBill } from "react-icons/fa";
const Charity = () => {
  const categories = [
    {
      id: 1,
      title: "Education for children",
      target: "125676$",
      raised: "2467$",
      icon: <FaMoneyBill />,
      imageLink: "https://charity.w3itexperts.com/xhtml/images/blog/thum1.jpg",
    },
    {
      id: 2,
      title: "Education for children",
      target: "125676$",
      raised: "2467$",
      imageLink: "https://charity.w3itexperts.com/xhtml/images/blog/thum2.jpg",
    },
    {
      id: 3,
      title: "Education for children",
      target: "125676$",
      raised: "2467$",
      imageLink: "https://charity.w3itexperts.com/xhtml/images/blog/thum3.jpg",
    },
  ];
  return (
    <section className="w-full  mt-[300vh]">
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
      <div className="w-[90%] gap-x-3 gap-y-[1rem]  m-auto h-16 md:h-20 grid grid-cols-[35%,35%,35%] items-center justify-center py-4">
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className={` h-[80vh] bg-gray-100 rounded-lg shadow-md hover:bg-opacity-25 `}
            >
              <img
                src={category.imageLink}
                alt={category.title}
                className="w-full h-[40%] object-cover rounded-md transition-opacity duration-300 hover:opacity-50"
              />

              <div className="p-4 ">
                <h2 className="text-xl font-bold">{category.title}</h2>
                <p className="text-gray-600">{category.des}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Charity;
