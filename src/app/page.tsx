import { Hero } from "@/components/hero";
import { MindMaxDifference } from "@/components/mindmax-difference";
import { Programs } from "@/components/programs";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <MindMaxDifference />
        <Programs />
      </main>
    </div>
  );
}
