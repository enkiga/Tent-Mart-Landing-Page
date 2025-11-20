import Brand_1 from "@/assets/images/Brand 1.png";
import Brand_2 from "@/assets/images/Brand 2.png";
import Brand_3 from "@/assets/images/Brand 3.png";
import Brand_4 from "@/assets/images/Brand 4.png";
import Brand_5 from "@/assets/images/Brand 5.png";
import { forwardRef } from "react";
import SectionWrapper from "../reusables/SectionWrapper";

const BrandSection = forwardRef<HTMLElement, { className?: string }>(
  (props, ref) => {
    const { className } = props || {};
    const brandsData = [Brand_1, Brand_2, Brand_3, Brand_4, Brand_5];

    // Create exactly two copies for a perfect -50% translation loop
    const loopData = [
      ...brandsData,
      ...brandsData,
      ...brandsData,
      ...brandsData,
      ...brandsData,
      ...brandsData,
    ];

    return (
      <section className="bg-foreground overflow-hidden">
        <SectionWrapper ref={ref} className={`py-16 ${className || ""}`}>
          {/* Added a mask-image to fade the edges for a premium look */}
          <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]">
            {/* ADDED: 'w-max' 
             This ensures the container width equals the total length of all items,
             so translate3d(-50%) calculates the distance correctly.
          */}
            <div className="flex w-max items-center gap-12 animate-scroll whitespace-nowrap will-change-transform">
              {loopData.map((brand, index) => (
                <div
                  // Using index as key is generally bad, but safe here since the list is static
                  key={`brand-${index}`}
                  className="shrink-0"
                  aria-hidden={index >= brandsData.length}
                >
                  <img
                    src={brand}
                    alt="Brand Logo"
                    width={120}
                    height={64}
                    loading="lazy"
                    decoding="async"
                    className="max-h-16 object-contain opacity-90 block"
                  />
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </section>
    );
  }
);
BrandSection.displayName = "BrandSection";
export default BrandSection;
