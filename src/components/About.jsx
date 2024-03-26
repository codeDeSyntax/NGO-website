import { FaAirFreshener } from "react-icons/fa";
// import {
//   BiHandHoldingHeart,
//   BiBookOpen,
//   BiHomeHeart,
//   BiGroup,
// } from "react-icons/bi";
const About = () => {
  const icon = <FaAirFreshener />;
  const textsArray = [
    { id: 1, text: "Give Scholarship" },
    { id: 2, text: "Fund Riging" },
    { id: 3, text: "Helping Hand" },
    { id: 4, text: "Save Homeless" },
    { id: 5, text: "Fund Riging" },
    { id: 6, text: "Fund Riging" },
    { id: 7, text: "Helping Hand" },
  ];
  const textArray1 = [
    { id: 8, text: "Give Scholarship" },
    { id: 9, text: "Fund Riging" },
    { id: 10, text: "Helping Hand" },
    { id: 11, text: "Save Homeless" },
    { id: 12, text: "Fund Riging" },
    { id: 13, text: "Give Scholarship" },
    { id: 14, text: "Fund Riging" },
  ];

  const textArray2 = [
    { id: 15, text: "Give Scholarship" },
    { id: 16, text: "Fund Riging" },
    { id: 17, text: "Helping Hand" },
    { id: 18, text: "Save Homeless" },
  ];
  return (
    <section className="w-full min-h-screen m-auto flex  items-center justify-center">
      <div className="w-[95%]  items-center grid grid-cols-[90%] lg:grid-cols-[30%,70%]  justify-center">
        <div className="min-h-[75vh] flex flex-col py-4 gap-4">
          <h1 className="font-bold text-3xl text-center">
            Welcome <span className="text-orange-500 "> About Us ...</span>
          </h1>
          <p className="font-sans text-gray-600">
            Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios
            Suspe ndisse cursus. cons ectetur elit. Vestibulum nec odios Lorem
            ipsum dolor sit amet, cons ectetur elit. Vestibulum nec. Lorem ipsum
            dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse
            cursus.
          </p>
          <div className="flex justify-around flex-row md:flex-row">
            <ul className="">
              {textsArray.map((text) => {
                return (
                  <li
                    key={text.id}
                    className="list-none flex items-center  gap-1 mt-4"
                  >
                    <p className="text-orange-500"> {icon}</p>
                    <p className="text-gray-500 text-[.9rem]"> {text.text}</p>
                  </li>
                );
              })}
            </ul>
            <ul className="">
              {textArray1.map((text) => {
                return (
                  <li
                    key={text.id}
                    className="list-none flex items-center gap-1 mt-4"
                  >
                    <p className="text-orange-500 "> {icon}</p>
                    <p className="text-gray-500 text-[.9rem]"> {text.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="h-[80vh] md:h-[75vh] gap-3  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[45%,45%]  justify-center mb-4">
          {textArray2.map((des) => (
            <div
              key={des.id}
              className="min-h-[20vh] md:h-[40vh] border flex flex-col items-center justify-center p-3"
            >
              <h1 className="font-bold text-xl text-center">{des.text}</h1>
              <p className="text-center text-[.9rem] sm:text-[1rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum sit dolorum voluptatibus, asperiores consequuntur
                libero aperiam culpa saepe iste nemo.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
