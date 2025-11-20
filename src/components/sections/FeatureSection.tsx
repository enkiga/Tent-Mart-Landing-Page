import { CloudSunRain, Snowflake } from "lucide-react";
import { forwardRef } from "react";
import SectionWrapper from "../reusables/SectionWrapper";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Image_3 from "@/assets/images/Image 4.png";
import Image_4 from "@/assets/images/Image 13.png";

const FeatureSection = forwardRef<HTMLElement, { className?: string; onScrollToSection?: (key: string) => void }>(
  (props, ref) => {
    const { className, onScrollToSection } = props || {};
    return (
      <SectionWrapper
        ref={ref}
        className={`py-20 flex flex-col ${className || ""}`}
      >
        <section>
          <h2 className="text-center font-secondary text-6xl font-semibold tracking-wide text-sidebar-accent/80">
            Flexible <span className="text-foreground">selection</span>
          </h2>
        </section>
        <section className="w-full flex flex-col-reverse md:flex-row items-start mt-18 gap-7">
          <div className="w-full md:w-3/5 flex flex-col gap-6">
            <Card className="w-full bg-secondary/20 shadow-none px-6 flex flex-col md:flex-row items-start -space-x-20">
              <div className="flex flex-col gap-5 justify-center items-start w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <h3 className="text-4xl font-medium">
                    Cold Weather <br className="md:hidden" /> Tents
                  </h3>
                  <div className="rounded-full bg-background size-11 flex items-center justify-center p-2 md:hidden">
                    <Snowflake className="size-9 text-foreground" />
                  </div>
                </div>

                <Button className="text-foreground uppercase" onClick={() => onScrollToSection?.("products")}> 
                  Explore More
                </Button>
              </div>
              <img
                src={Image_3}
                alt="Feature Image"
                width={600}
                height={384}
                loading="lazy"
                decoding="async"
                className="w-full h-64 object-cover"
              />
              <div className="hidden rounded-full bg-background size-11 md:flex items-center justify-center p-2">
                <Snowflake className="size-9 text-foreground" />
              </div>
            </Card>
            <p>
              Can't decide which tent suits your adventure? Contact Us, we can
              help you find the perfect shelter for your next outdoor
              experience.{" "}
              <span className=" underline uppercase text-primary cursor-pointer">
                Contact Us
              </span>
            </p>
          </div>
          <div className="w-full md:w-2/5">
            <Card className="w-full bg-primary border-0 shadow-none px-6 flex flex-col items-start gap-6">
              <div className="flex flex-row items-start justify-between w-full">
                <h3 className="text-4xl font-medium">
                  4 Seasons <br /> Tent
                </h3>
                <div className="bg-background rounded-full p-2 size-11 flex items-center justify-center">
                  <CloudSunRain className="size-9 text-foreground" />
                </div>
              </div>
              <Button className="text-foreground uppercase bg-background hover:bg-background/90" onClick={() => onScrollToSection?.("products")}>
                Explore More
              </Button>
              <img
                src={Image_4}
                alt="Feature Image"
                width={600}
                height={432}
                loading="lazy"
                decoding="async"
                className="w-full h-72 object-cover"
              />
            </Card>
          </div>
        </section>
      </SectionWrapper>
    );
  }
);
FeatureSection.displayName = "FeatureSection";
export default FeatureSection;
