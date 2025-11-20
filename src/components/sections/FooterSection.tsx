import { forwardRef } from 'react'
import SectionWrapper from '../reusables/SectionWrapper'
import Logo from '@/assets/images/Logo.png'

const FooterSection = forwardRef<HTMLElement, { className?: string; onScrollToSection?: (key: string) => void }>((props, ref) => {
  const { className, onScrollToSection } = props || {}
  const NavList = [
    { label: "Home", key: "hero" },
    { label: "About", key: "about" },
    { label: "Features", key: "features" },
    { label: "Products", key: "products" },
    { label: "Brands", key: "brands" },
  ];
  return (
    <SectionWrapper ref={ref} className={`${className || ""}`}>
        <section className='flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-0'>
          <div className="flex flex-col gap-4">
            <h3 className='text-xl font-medium text-center md:text-left'>Contact</h3>
            <ul className='flex flex-col items-center md:items-start gap-5 mb-4'>
              <li>123 Tent St, Campville, CA 90210</li>
              <li>contact@tentmart.com</li>
              <li>(123) 456-7890</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <img src={Logo} alt="Tent Mart Logo" className='w-full h-24 object-cover'/>
            <ul className='flex items-center gap-6'>
              {NavList.map((item, index) => (
                <li key={index} className='cursor-pointer' onClick={() => onScrollToSection?.(item.key)}>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h3 className='text-xl font-medium'>Social Links</h3>
            <ul className='flex flex-col items-center md:items-end gap-5 my-4'>
              <li className='cursor-pointer'>Facebook</li>
              <li className='cursor-pointer'>Twitter</li>
              <li className='cursor-pointer'>Instagram</li>
              <li className='cursor-pointer'>LinkedIn</li>
            </ul>
          </div>
        </section>
        <footer className='border-t '>
          <p className='text-sm text-foreground/60 py-3 text-center'>
            © {new Date().getFullYear()} Tent Mart. All rights reserved.
          </p>
        </footer>
    </SectionWrapper>
  )
})

FooterSection.displayName = 'FooterSection'
export default FooterSection
