import { Hero } from "@/components/hero";
import { Faq } from "@/components/faq";
import { HowItWorks } from "@/components/how-it-works";
import { Locations } from "@/components/locations";
import { MindMaxDifference } from "@/components/mindmax-difference";
import { ParentProgress } from "@/components/parent-progress";
import { Programs } from "@/components/programs";
import { Results } from "@/components/results";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Testimonials } from "@/components/testimonials";
import { WhatStudentsLearn } from "@/components/what-students-learn";

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <Results />
        <Programs />
        <WhatStudentsLearn />
        <MindMaxDifference />
        <HowItWorks />
        <ParentProgress />
        <Testimonials />
        <Locations />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  );
}
