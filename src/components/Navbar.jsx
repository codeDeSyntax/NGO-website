import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [displaySideBar, setDisplaySidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const linkStyle =
    "text-white text-[.8rem]  sm:text-[.9rem] lg:text-[1rem] hover:text-orange-500 transition";
  const links = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Pages",
      link: "/",
    },
    {
      id: 3,
      title: "Events",
      link: "/",
    },
    {
      id: 4,
      title: "Gallery",
      link: "/",
    },
    {
      id: 5,
      title: "Blog",
      link: "/",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full">
      <nav
        className={`w-full mx-auto flex items-center justify-between py-3 px-8  fixed  ${
          scrolled ? "bg-[rgba(0,0,0,0.9)]" : "bg-transparent"
        }`}
      >
        <div className={`flex  gap-2`}>
          <img
            src="https://ideogram.ai/api/images/direct/K-wrBNdvQdSazhpwVyZ22A.png "
            alt=""
            className="rounded-full size-10"
          />
          <h2 className=" font-mono tracking-widest text-white text-2xl">
            NGO
          </h2>
        </div>
        {/* hamburger and close buttons */}
        <div
          className="sm:hidden"
          onClick={(e) => {
            e.preventDefault();
            setDisplaySidebar(!displaySideBar);
          }}
        >
          {displaySideBar ? (
            <FaTimes className="text-orange-500 font-mono font-bold text-2xl" />
          ) : (
            <FaBars className="text-orange-500 font-mono font-bold text-2xl" />
          )}
        </div>

        {/* Navigation links */}
        <ul className="hidden sm:flex items-center gap-6 md:gap-10 lg:gap-12  ">
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.link} className={linkStyle}>
                {link.title}
              </a>
            </li>
          ))}
          <button
            type=""
            className="font-mono py-1 px-4 bg-orange-500 text-white"
          >
            {" "}
            Donate now
          </button>
        </ul>
      </nav>
      {/* SIDEBAR  FOR MOBILE VIEWPORT */}
      {displaySideBar && (
        <div className="fixed sm:hidden top-0 h-full w-1/2 flex-col flex gap-6 items-center  bg-[rgba(0,0,0,0.9)] left-0 py-4 px-2 z-20">
          {links.map((link) => (
            <li
              key={link.id}
              className="text-white list-none py-2 border-b w-[50%] text-center"
            >
              <a href={link.link} className="">
                {link.title}
              </a>
            </li>
          ))}
          <button
            type=""
            className="font-mono py-1 px-4 bg-orange-500 text-white"
          >
            {" "}
            Donate now
          </button>

          <img
            src="https://ideogram.ai/api/images/direct/FQT6NVfxQmysS12lCbhy2g.jpg"
            alt=""
            className="sixe-20 rounded-md "
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
