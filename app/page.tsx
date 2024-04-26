import React from "react";
import Hero from "@/components/hero";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";

import Method from "@/components/Method";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/ContactForm";
import Formula from "@/components/Formula";

export default function Home() {
  return (
    <div className="page-container">
      {/* Each section is given an id that matches the href in the navbar */}
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <SectionTwo />
      </section>
      <section id="focus">
        <SectionThree />
      </section>
      <section id="method">
        <Formula />
      </section>
      <section id="method">
        <Method />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </div>
  );
}
