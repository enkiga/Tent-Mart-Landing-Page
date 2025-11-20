import {
  useRef,
  useCallback,
  useMemo,
  useState,
  useEffect,
  Suspense,
  lazy,
  type LazyExoticComponent,
  type ForwardRefExoticComponent,
  type PropsWithoutRef,
  type RefAttributes,
} from "react";
import AboutSection from "./components/sections/AboutSection";
import HeroSection from "./components/sections/HeroSection";
import Navigation from "./components/sections/Navigation";
type SectionProps = {
  className?: string;
  onScrollToSection?: (key: string) => void;
};

type SectionComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SectionProps> & RefAttributes<HTMLElement>
>;

type LazySection = LazyExoticComponent<SectionComponent>;

const FeatureSection: LazySection = lazy(() => import("./components/sections/FeatureSection"));
const ProductSection: LazySection = lazy(() => import("./components/sections/ProductSection"));
const BrandSection: LazySection = lazy(() => import("./components/sections/BrandSection"));
const NewsLetterSection: LazySection = lazy(() => import("./components/sections/NewsLetterSection"));
const FooterSection: LazySection = lazy(() => import("./components/sections/FooterSection"));

function App() {
  // Create refs for each section
  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const featuresRef = useRef<HTMLElement | null>(null);
  const productsRef = useRef<HTMLElement | null>(null);
  const brandsRef = useRef<HTMLElement | null>(null);
  const newsletterRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  const sectionRefs = useMemo(() => ({
    hero: heroRef,
    about: aboutRef,
    features: featuresRef,
    products: productsRef,
    brands: brandsRef,
    newsletter: newsletterRef,
    footer: footerRef,
  }), [heroRef, aboutRef, featuresRef, productsRef, brandsRef, newsletterRef, footerRef]);

  const handleSmoothScroll = useCallback((key: keyof typeof sectionRefs) => {
    const ref = sectionRefs[key];
    if (!ref || !ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [sectionRefs]);

  const [isHeroInView, setIsHeroInView] = useState(true);

  useEffect(() => {
    if (!heroRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsHeroInView(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.5,
      }
    );
    observer.observe(heroRef.current);
    return () => {
      observer.disconnect();
    };
  }, [heroRef]);

  return (
    <section className="max-w-screen overflow-x-hidden min-h-screen">
      <Navigation isHero={isHeroInView} onScrollToSection={(k: string) => handleSmoothScroll(k as keyof typeof sectionRefs)} />
      <HeroSection ref={heroRef} onScrollToSection={() => handleSmoothScroll("products")} />
      <AboutSection ref={aboutRef} onScrollToSection={(k: string) => handleSmoothScroll(k as keyof typeof sectionRefs)} />
        <Suspense fallback={<div />}> 
          <FeatureSection ref={featuresRef} onScrollToSection={(k: string) => handleSmoothScroll(k as keyof typeof sectionRefs)} />
          <ProductSection ref={productsRef} onScrollToSection={(k: string) => handleSmoothScroll(k as keyof typeof sectionRefs)} />
          <BrandSection ref={brandsRef} />
          <NewsLetterSection ref={newsletterRef} />
          <FooterSection ref={footerRef} onScrollToSection={(k: string) => handleSmoothScroll(k as keyof typeof sectionRefs)} />
        </Suspense>
    </section>
  );
}

export default App;
