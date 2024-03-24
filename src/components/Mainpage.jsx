import Categories from "./Categories";
import Trust from "./Trust";
import Welcomepage from "./Welcomepage";
import Events from "./Events";
import Charity from "./Charity";
import DonationForm from "./DonationForm";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import Team from "./Team";
const Mainpage = () => {
  return (
    <main className="w-full min-h-screen">
      <div className=" bg-[#4b2b1d]">
        <Welcomepage />
      </div>
      <Events />
      <Trust />
      <Categories />
      <Charity />
      <DonationForm />
      <Team/>
      <Testimonial />
      <Footer />
    </main>
  );
  //bg-[#2d2122]
};

export default Mainpage;
