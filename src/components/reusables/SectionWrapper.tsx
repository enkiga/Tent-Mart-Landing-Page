import React, { forwardRef } from "react";

export interface SectionWrapperInterface {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperInterface>(
  ({ children, className = "", id }, ref) => {
    return (
      <section
        id={id}
        ref={ref as React.RefObject<HTMLElement>}
        className={`container mx-auto px-4 md:px-2 lg:px-16 scroll-mt-20 ${className}`}
      >
        {children}
      </section>
    );
  }
);

SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;
