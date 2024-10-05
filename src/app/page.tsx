import AccountingSection from "@/components/accounting-section";
import AppsSection from "@/components/apps-section";
import BreakingSection from "@/components/breaking-section";
import Hero from "@/components/hero";
import SalesSection from "@/components/sales-section";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen space-y-10">
      <Hero />

      <AppsSection />

      <BreakingSection />
      <SalesSection />

      <AccountingSection />
    </div>
  );
}
