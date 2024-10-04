import AppsSection from "@/components/apps-section";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen space-y-10">
      <Hero />

      <AppsSection />
    </div>
  );
}
