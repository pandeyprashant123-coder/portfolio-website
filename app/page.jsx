import About from "@components/About";
import Home from "@components/home";
import Nav from "@components/Nav";
import Portfolio from "@components/Portfolio";
import Resume from "@components/Resume";
import Footer from "@components/Footer";
import Testimonial from "@components/Testimonials";

export default function Page() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      {/* <Testimonial /> */}
      <Footer />
    </>
  );
}
