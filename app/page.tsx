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
      <section id="about" style={{ marginTop: "26px" }}>
        <SectionTwo />
      </section>
      <section id="focus" style={{ marginTop: "26px" }}>
        <SectionThree />
      </section>
      <section id="method" style={{ marginTop: "26px" }}>
        <Formula />
      </section>
      <section id="method" style={{ marginTop: "26px" }}>
        <Method />
      </section>
      <section id="portfolio" style={{ marginTop: "26px" }}>
        <Portfolio />
      </section>
      <section id="contact" style={{ marginTop: "26px" }}>
        <ContactForm />
      </section>
    </div>
  );
}
