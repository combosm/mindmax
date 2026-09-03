import { Hero } from "@/components/hero";
import { MindMaxDifference } from "@/components/mindmax-difference";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <MindMaxDifference />
      </main>
    </div>
  );
}
