import Categories from "./Categories";
import Trust from "./Trust";
import Welcomepage from "./Welcomepage";
import Events from "./Events";
import Charity from "./Charity";
const Mainpage = () => {
  return (
    <main className="w-full min-h-screen ">
      <div className=" bg-[#2d2122]">
        <Welcomepage />
      </div>
      <Events />
      <Trust />
      <Categories />
      <Charity />
    </main>
  );
};

export default Mainpage;
