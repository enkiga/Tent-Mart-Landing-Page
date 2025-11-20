import { forwardRef } from "react";
import SectionWrapper from "../reusables/SectionWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import image_1 from "@/assets/images/Image 1.png";
import image_2 from "@/assets/images/Image 2.png";
import image_3 from "@/assets/images/Image 3.png";
import image_4 from "@/assets/images/Image 4.png";
import image_5 from "@/assets/images/Image 5.png";
import image_6 from "@/assets/images/Image 6.png";
import image_7 from "@/assets/images/Image 7.png";
import image_8 from "@/assets/images/Image 8.png";
import image_9 from "@/assets/images/Image 9.png";
import image_10 from "@/assets/images/Image 10.png";
import image_11 from "@/assets/images/Image 11.png";
import image_12 from "@/assets/images/Image 12.png";
import image_13 from "@/assets/images/Image 13.png";
import image_14 from "@/assets/images/Image 14.png";
import image_15 from "@/assets/images/Image 15.png";
import image_16 from "@/assets/images/Image 16.png";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const ProductSection = forwardRef<HTMLElement, { className?: string }>((props, ref) => {
  const { className } = props || {};
  const productData = [
    {
      category: "Backpacking Tents",
      products: [
        { name: "Alpine Trekker", price: "$199.99", image: image_1 },
        { name: "Summit Explorer", price: "$249.99", image: image_2 },
        { name: "Trailblazer Pro", price: "$179.99", image: image_3 },
        { name: "Hiker's Haven", price: "$159.99", image: image_4 },
      ],
      count: 56,
    },
    {
      category: "Family Tents",
      products: [
        { name: "Camp Comfort", price: "$299.99", image: image_5 },
        { name: "Family Retreat", price: "$349.99", image: image_6 },
        { name: "Spacious Shelter", price: "$399.99", image: image_7 },
        { name: "Outdoor Oasis", price: "$279.99", image: image_8 },
      ],
      count: 34,
    },
    {
      category: "4-Season Tents",
      products: [
        { name: "Winter Warrior", price: "$499.99", image: image_9 },
        { name: "Arctic Shield", price: "$549.99", image: image_10 },
        { name: "Frost Fighter", price: "$599.99", image: image_11 },
        { name: "Snowbound Shelter", price: "$459.99", image: image_12 },
      ],
      count: 22,
    },
    {
      category: "Ultralight Tents",
      products: [
        { name: "Featherlight", price: "$219.99", image: image_13 },
        { name: "Skyline Solo", price: "$229.99", image: image_14 },
        { name: "Breeze Basecamp", price: "$199.99", image: image_15 },
        { name: "Cloud Walker", price: "$249.99", image: image_16 },
      ],
      count: 41,
    },
  ];

  return (
    <SectionWrapper ref={ref} className={`py-20 flex flex-col ${className || ""}`}>
      <section className="flex flex-col gap-3 mb-10">
        <h3 className="text-center font-secondary text-6xl font-semibold tracking-wide text-sidebar-accent/80">
          <span className="text-foreground">Our New </span>Collection
        </h3>
        <p className="text-sm text-foreground/80 text-center max-w-[450px] mx-auto">
          Explore our extensive collection of tents, designed for all your
          outdoor adventures. From lightweight backpacking tents to spacious
          family campers, we have options for every need.
        </p>
      </section>

      <Tabs
        defaultValue={productData[0].category}
        className="flex flex-col md:flex-row w-full gap-10"
      >
        {/* LEFT SIDE — TAB TRIGGERS */}
        <TabsList className="flex flex-col w-full md:w-1/5 border-0 h-full bg-background">
          {productData.map((cat, index) => (
            <TabsTrigger
              key={index}
              value={cat.category}
              className="justify-start data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground
              py-3 px-5  w-full"
            >
              {cat.category}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* RIGHT SIDE — CONTENT */}
        <div className="w-full md:w-4/5">
          {productData.map((cat, index) => (
            <TabsContent key={index} value={cat.category}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat.products.map((product, idx) => (
                  <Card
                    key={idx}
                    className="flex flex-col items-start gap-3 w-full bg-secondary/10 px-5"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-60 object-contain rounded-md"
                    />
                    <div className="flex items-center justify-between w-full">
                      <div className="flex flex-col">
                        <h4 className="text-lg font-semibold text-foreground">
                          {product.name}
                        </h4>
                        <p className="text-sm text-foreground/80">
                          {product.price}
                        </p>
                      </div>
                      <div className="rounded-full size-10 bg-sidebar-accent/90 flex items-center justify-center cursor-pointer">
                        <ArrowRight className=" text-background size-5" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="flex flex-col md:flex-row md:items-start justify-between mt-6 gap-4">
                <div className="flex flex-row md:flex-col gap-1 items-center md:items-start justify-between">
                  <p>
                    <span className="font-medium">Category</span>:{" "}
                    {cat.category}
                  </p>
                  <p>
                    <span className="font-medium">{cat.count}</span> products
                  </p>
                </div>
                <Button className="text-foreground uppercase" size="lg">
                  Explore More
                </Button>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </SectionWrapper>
  );
});
ProductSection.displayName = "ProductSection";
export default ProductSection;
