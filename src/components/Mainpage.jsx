import Categories from "./Categories";
import Trust from "./Trust";
import Welcomepage from "./Welcomepage";
// import Events from "./Events";
import Charity from "./Charity";
import DonationForm from "./DonationForm";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import Team from "./Team";
import CharityInfo from "./CharityInfo";
import About from "./About";
const Mainpage = () => {
  return (
    <main className="w-full min-h-screen flex flex-col gap-5">
      <div className=" ">
        <Welcomepage />
      </div>
      <CharityInfo />
      <About/>
      {/* <Events /> */}
      <Trust />
      <Categories />
      <Charity />
      <DonationForm />
      <Team />
      <Testimonial />
      <Footer />

    </main>
  );
  //bg-[#2d2122]
};

export default Mainpage;
