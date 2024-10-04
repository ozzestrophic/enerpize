import Hero from "@/components/hero";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import SectionArticle from "@/components/section-article";
import SectionHeading from "@/components/section-heading";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen space-y-10">
      <Hero />

      {/* second section */}
      <MaxWidthWrapper>
        <section className="space-y-10">
          <SectionHeading
            tag="Apps & Plugins"
            title="Flexible Solutions for Every Business Need"
            description="Performing equally effectively, separately and simultaneously - Utilize
        all, activate or deactivate to match your business needs."
          />
          <div className="grid gap-8 md:grid-cols-3">
            <SectionArticle />
            <SectionArticle />
            <SectionArticle />
            <SectionArticle />
            <SectionArticle />
            <SectionArticle />
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
}
