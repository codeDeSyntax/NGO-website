const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Environment",
      des: "The big Apple",
      imageLink: "https://html.themefax.com/getfund/images/photo/1.jpg",
    },
    {
      id: 2,
      title: "Fashion",
      des: "The artist capital",
      imageLink: "https://html.themefax.com/getfund/images/photo/2.jpg",
    },
    {
      id: 3,
      title: "Health",
      des: "City of hundred",
      imageLink: "https://html.themefax.com/getfund/images/photo/3.jpg",
    },
    {
      id: 4,
      title: "Non-profit",
      des: "Artist capital",
      imageLink: "https://html.themefax.com/getfund/images/photo/4.jpg",
    },
    {
      id: 5,
      title: "Non-profit",
      des: "Artist capital",
      imageLink: "https://html.themefax.com/getfund/images/photo/5.jpg",
    },
  ];

  return (
    <section className="w-full min-h-screen">
      <div className="w-[90%] m-auto">
        <h1 className="text-2xl text-center md:text-3xl font-bold text-gray-600">
          Categories
        </h1>
        <p className="text-center text-gray-700 text-[1rem] py-2 md:px-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
          distinctio asperiores culpa, quae accusamus quod exercitationem,
          tempora, dignissimos nulla perspiciatis neque ad molestias eum placeat
          temporibus non. Animi, amet mollitia.
        </p>
      </div>
      <div className="w-[90%] gap-x-3 gap-y-[1rem]  m-auto h-16 md:h-20  grid grid-cols-[78%] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[18%,18%,18%,18%,18%] items-center justify-center py-4">
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className={` h-[60vh] bg-gray-100 rounded-lg shadow-md hover:bg-opacity-25 `}
            >
              <img
                src={category.imageLink}
                alt={category.title}
                className="w-full h-[80%] object-cover rounded-md transition-opacity duration-300 hover:opacity-50"
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

export default Categories;
