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
    <section className="w-full min-h-screen mt-10">
      <div className="w-[90%] m-auto">
        <h1 className="text-4xl font-bold text-gray-600">Categories</h1>
      </div>
      <div className="w-[90%] gap-x-3 m-auto h-20  grid grid-cols-1 lg:grid-cols-[18%,18%,18%,18%,18%] items-center justify-center py-4">
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className={` h-[60vh] bg-gray-100 rounded-lg shadow-md  `}
            >
              <img
                src={category.imageLink}
                alt={category.title}
                className="w-full h-full object-cover rounded-md"
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
