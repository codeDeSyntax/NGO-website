import Categories from "./Categories";
import Trust from "./Trust";
import Welcomepage from "./Welcomepage";
import Events from "./Events";
import Charity from "./Charity";
import DonationForm from "./DonationForm";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
const Mainpage = () => {
  return (
    <main className="w-full min-h-screen">
      <div className=" bg-[#2d2122]">
        <Welcomepage />
      </div>
      <Events />
      <Trust />
      <Categories />
      <Charity />
      <DonationForm />
      <Testimonial/>
      <Footer/>
    </main>
  );
};

export default Mainpage;
