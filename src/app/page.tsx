import AppsSection from "@/components/apps-section";
import Hero from "@/components/hero";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import SalesSection from "@/components/sales-section";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen space-y-10">
      <Hero />

      <AppsSection />

      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-between gap-8 rounded-xl bg-gradient-to-tr from-[#F4F7FA] to-[#F7F8FB] px-4 py-10 text-center md:flex-row md:px-12 md:py-20 md:text-left">
          <div className="space-y-4">
            <h3 className="text-3xl font-extrabold md:text-4xl">
              Customised for more than 50 industries
            </h3>
            <p className="font-medium text-muted-foreground">
              Find out your industry, find out how Enerpize fits your business
              for free.
            </p>
          </div>
          <Button className="h-fit px-8 py-6 text-xl font-bold">
            Customize Your Experience
          </Button>
        </div>
      </MaxWidthWrapper>

      <SalesSection />
    </div>
  );
}
