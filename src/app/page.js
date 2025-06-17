import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import FloatingElements from '@/components/FloatingElements';
import NoSSR from '@/components/NoSSR';

export default function Home() {
  return (
    <>
      <NoSSR>
        <FloatingElements />
      </NoSSR>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
}
