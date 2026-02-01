"use client";
import About from "@components/About";
import Home from "@components/home";
import Portfolio from "@components/Portfolio";
import Resume from "@components/Resume";
import Footer from "@components/Footer";
import ScrollNav from "@components/ScrollNav";

export default function Page() {
  return (
    <>
      <ScrollNav />
      <div className="scroll-container">
        <section id="home" className="scroll-section">
          <Home />
        </section>
        <section id="about" className="scroll-section">
          <About />
        </section>
        <section id="resume" className="scroll-section scrollable">
          <Resume />
        </section>
        <section id="portfolio" className="scroll-section scrollable">
          <Portfolio />
        </section>
        <section id="contact" className="scroll-section">
          <Footer />
        </section>
      </div>
    </>
  );
}
