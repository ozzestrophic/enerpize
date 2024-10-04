import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="mx-auto mt-20 flex flex-col items-center gap-10">
      <div className="flex max-w-4xl flex-col items-center gap-8 px-16 text-center">
        <h1 className="text-6xl font-extrabold leading-tight">
          The <span className="text-primary">ERP system</span> to run your
          entire business
        </h1>
        <p className="text-muted-foreground">
          Enerpize is a cloud-based all-in-one solution to seamlessly manage
          your Finance, Accounting, Sales, Inventory, Clients Relations,
          Employees, and Operations; all customized per industry
        </p>
        <Button
          variant={"secondary"}
          className="px-20 py-10 text-2xl font-bold"
        >
          Get Started for Free, Enerpize Now!
        </Button>
        <div className="flex flex-col gap-4 md:flex-row">
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
            <p>Free 14-days trial</p>
          </div>
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
            <p>Free 14-days trial</p>
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
