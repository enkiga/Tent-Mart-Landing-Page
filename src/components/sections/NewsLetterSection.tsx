import { forwardRef } from "react";
import SectionWrapper from "../reusables/SectionWrapper";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ArrowRight } from "lucide-react";
const NewsLetterSection = forwardRef<HTMLElement, { className?: string }>((props, ref) => {
  const { className } = props || {};
  return (
    <SectionWrapper ref={ref} className={`py-20 flex flex-col md:flex-row gap-6 items-center justify-between ${className || ""}`}>
      <h3 className=" font-secondary text-5xl font-semibold text-sidebar-accent/90 tracking-wide">
        <span className="text-foreground mr-1">Join our</span> newsletter
      </h3>
      <p className="flex flex-1 text-foreground/80 justify-center md:max-w-[380px]">
        Subscribe to our newsletter to be the first to receive updates,
        exclusive offers and other information related to Tent Mart
      </p>
      <InputGroup className="flex flex-1 justify-end h-12 md:max-w-[400px]">
        <InputGroupInput placeholder="Your email address" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton aria-label="Subscribe to newsletter" variant="default" size="icon-sm">
            <ArrowRight className="size-5 text-background" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </SectionWrapper>
  );
});
NewsLetterSection.displayName = "NewsLetterSection";
export default NewsLetterSection;
