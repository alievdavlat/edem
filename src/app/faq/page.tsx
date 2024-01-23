"use client";
import { ContactForm } from "@/components";
import FaqSection from "@/components/faqSection/FaqSection";
import FaqHero from "@/components/hero/faqHero/FaqHero";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="faqs">
      <FaqHero />
      <FaqSection/>
      <ContactForm/>
    </div>
  );
};

export default page;
