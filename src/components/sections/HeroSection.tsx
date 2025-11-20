import { ArrowRight, Instagram, Linkedin, Star, Twitter } from "lucide-react";
import { forwardRef } from "react";
import SectionWrapper from "../reusables/SectionWrapper";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Image_1 from "@/assets/images/Image 1.png";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const HeroSection = forwardRef<
  HTMLElement,
  { className?: string; onScrollToSection?: (key: string) => void }
>((props, ref) => {
  const { className, onScrollToSection } = props || {};
  return (
    <section className="relative w-full min-h-dvh">
      <img
        src="https://images.unsplash.com/photo-1535576434247-e0f50b766399?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero Image"
        className="absolute inset-0 w-full h-full object-cover object-top -z-10"
      />
      <div className="absolute inset-0 bg-linear-to-b from-secondary/80  to-transparent"></div>
      <SectionWrapper
        ref={ref}
        className={`relative flex flex-col gap-10 justify-between min-h-dvh ${
          className || ""
        }`}
      >
        {/* Hero Title */}
        <div className="flex flex-1 flex-col md:items-center md:justify-center pt-10 gap-3">
          <h1 className="text-white text-6xl md:text-9xl font-extrabold text-center mt-8 uppercase font-secondary tracking-wide">
            ENJOY NATURE <br />
            IN TENTS
          </h1>

          <Button
            size="lg"
            className="uppercase text-foreground"
            onClick={() => onScrollToSection?.("products")}
          >
            Explore More
          </Button>
        </div>
        {/* Social Media, Reviews & Discounts */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-end md:mb-8 gap-3">
          <div className="flex flex-col-reverse md:flex-col gap-4 w-full md:w-auto">
            {/* Social Media */}
            <div className="flex flex-row justify-end  md:flex-col gap-5 mb-5">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Twitter className="text-white size-6 cursor-pointer" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Follow us on Twitter</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Instagram className="text-white size-6 cursor-pointer" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Follow us on Instagram</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Linkedin className="text-white size-6 cursor-pointer" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Follow us on LinkedIn</p>
                </TooltipContent>
              </Tooltip>
            </div>
            {/* Reviews & Testimonials */}
            <div className="flex flex-col-reverse md:flex-row items-end justify-start gap-4">
              <div className="w-fit md:size-28 rounded-full md:bg-background/70 flex flex-row md:flex-col items-center justify-center">
                <p className="text-xl md:text-4xl text-background md:text-foreground font-medium md:font-secondary md:tracking-wider flex items-center">
                  4.8
                  <span className="md:hidden">
                    <Star className="inline size-4 text-yellow-400 ml-1" />
                  </span>
                </p>
                {/* Spacer for mobile */}
                <p className="md:hidden text-background px-2">-------</p>
                <p className="text-xl md:text-xs font-medium text-background md:text-foreground">
                  24 reviews
                </p>
              </div>
              <Card className="bg-foreground/20  md:max-w-5/11 px-4 py-3 backdrop-blur-xs border-0 shadow-md">
                <p className="text-sm text-background">
                  Setting up the tunnel tent was unbelievably fast. We had our
                  family of five comfortable and secure in minutes, leaving more
                  time for stargazing. Highly recommend!" —{" "}
                  <span className="font-semibold">
                    Chloe Miller, Family Camper
                  </span>
                </p>
              </Card>
            </div>
          </div>
          {/* Discounts */}
          <div className="w-full md:w-auto">
            <Card className="relative px-4 pt-3 w-full md:w-[270px] h-40">
              <div className="flex items-start justify-between">
                <h2 className="text-md font-medium">
                  Discounted <br /> tents
                </h2>
                <p className="bg-foreground rounded-md text-background py-1 px-3">
                  50%
                </p>
              </div>
              <img
                src={Image_1}
                alt="Discounted tents"
                className="w-full h-32 object-cover -mt-20"
              />
              <div
                className="absolute bottom-2 right-3 rounded-full size-10 bg-sidebar-accent/90 flex items-center justify-center cursor-pointer"
                onClick={() => onScrollToSection?.("products")}
              >
                <ArrowRight className=" text-background size-5" />
              </div>
            </Card>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
});
HeroSection.displayName = "HeroSection";
export default HeroSection;
