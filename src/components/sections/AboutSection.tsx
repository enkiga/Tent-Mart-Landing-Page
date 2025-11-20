import { AirVent, CloudSunRain, Pocket, TableOfContents } from "lucide-react";
import { forwardRef } from "react";
import SectionWrapper from "../reusables/SectionWrapper";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const AboutSection = forwardRef<HTMLElement, { className?: string; onScrollToSection?: (key: string) => void }>((props, ref) => {
  const { className, onScrollToSection } = props || {};

    const AboutData = [
        {
            icon: CloudSunRain ,
            description: "Built with high-denier, ripstop fabric and reinforced seams to withstand heavy rain, strong winds, and harsh UV rays."
        },
        {
            icon: TableOfContents ,
            description: "Our revolutionary pole systems and color-coded designs allow for single-person setup in under 5 minutes, maximizing your adventure time."
        },
        {
            icon: AirVent,
            description: "Multi-directional mesh windows and ground vents create optimal airflow, reducing condensation and keeping the interior fresh and cool."
        },
        {
            icon: Pocket,
            description: "Thoughtfully placed interior pockets and gear lofts help you stay organized, ensuring your essentials are always within reach."
        }

    ]
  return (
    <SectionWrapper ref={ref} className={`py-20 flex flex-col ${className || ""}`}>
      <section className="flex flex-col md:flex-row items-start gap-3">
        <div className="w-full md:w-1/2">
          <h2 className="font-secondary text-4xl md:text-6xl font-semibold text-sidebar-accent/90 tracking-wide">
            Explore our extensive <br className="hidden md:block" />
            <span className="text-foreground">collection of tents</span>
          </h2>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start gap-3">
          <p className="text-sm md:text-base">
            Our tents are crafted using cutting-edge materials and thoughtful
            design, ensuring maximum comfort, protection, and ease of use, no
            matter where your journey takes you. From lightweight backpacking
            tents to spacious family models, we have options to suit every type
            of adventurer.
          </p>
          <Button className="text-foreground uppercase w-full md:w-auto" size="lg" onClick={() => onScrollToSection?.("products") }>
            Open Store
          </Button>
        </div>
      </section>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto mt-18">
        {AboutData.map((item, index) => (
            <Card key={index} className="flex flex-col items-start justify-center p-6  gap-5 border-0 shadow-md hover:shadow-xl hover:bg-secondary hover:text-background transition-shadow duration-300 bg-secondary/10 cursor-pointer">
                <div className="size-12 rounded-full bg-background p-2 flex items-center justify-center">
                    <item.icon className="size-9 text-foreground" />
                </div>
                <p className="text-justify">{item.description}</p>
            </Card>
        ))}
      </section>
    </SectionWrapper>
  );
});
AboutSection.displayName = "AboutSection";
export default AboutSection;
