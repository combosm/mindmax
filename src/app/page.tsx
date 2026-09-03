import { Hero } from "@/components/hero";
import { MindMaxDifference } from "@/components/mindmax-difference";
import { Programs } from "@/components/programs";
import { Results } from "@/components/results";
import { SiteHeader } from "@/components/site-header";
import { WhatStudentsLearn } from "@/components/what-students-learn";

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <MindMaxDifference />
        <Programs />
        <WhatStudentsLearn />
        <Results />
      </main>
    </div>
  );
}
