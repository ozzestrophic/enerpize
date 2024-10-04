import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="mx-auto mt-10 flex flex-col items-center gap-10 md:mt-20">
      <div className="flex w-full max-w-4xl flex-col items-center gap-8 px-4 text-center">
        <h1 className="text-3xl font-extrabold leading-tight md:text-6xl">
          The <span className="text-primary">ERP system</span> to run your
          entire business
        </h1>
        <p className="text-sm font-medium text-muted-foreground md:text-base">
          Enerpize is a cloud-based all-in-one solution to seamlessly manage
          your Finance, Accounting, Sales, Inventory, Clients Relations,
          Employees, and Operations; all customized per industry
        </p>
        <Button
          variant={"secondary"}
          className="h-auto w-full text-wrap px-4 py-4 text-lg font-bold md:w-fit md:px-20 md:py-10 md:text-2xl"
        >
          Get Started for Free, Enerpize Now!
        </Button>
        <div className="flex w-full flex-col items-start gap-2 text-sm text-muted-foreground md:flex-row md:justify-center md:gap-4">
          <div className="flex gap-2">
            <Image
              src={"./icons/bahai-solid.svg"}
              alt="bahai"
              width={16}
              height={16}
            />
            <p>Free 14-days trial</p>
          </div>
          <div className="flex gap-2">
            <Image
              src={"./icons/bahai-solid.svg"}
              alt="bahai"
              width={16}
              height={16}
            />
            <p>No credit card needed</p>
          </div>
          <div className="flex gap-2">
            <Image
              src={"./icons/bahai-solid.svg"}
              alt="bahai"
              width={16}
              height={16}
            />
            <p>No Setup</p>
          </div>
          <div className="flex gap-2">
            <Image
              src={"./icons/bahai-solid.svg"}
              alt="bahai"
              width={16}
              height={16}
            />
            <p>All apps included</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Image
          src={"/hero-image.png"}
          alt="hero"
          layout="responsive"
          width={100}
          height={100}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    </section>
  );
};
export default Hero;
