import CertificationHomePageCard from "./components/Cards/CertificationHomePageCard";
import SiteOverView from "./components/Cards/SiteOverView";
import TestimonialCarousel from "./components/Cards/TestimonialCarousel";
import WhyChoseCard from "./components/Cards/WhyChoseCard";
import AboutCard from "./components/IndexPages/AboutCard";
import HotExams from "./components/IndexPages/HotExams";
import LandingPageHeroSection from "./components/IndexPages/LandingPageHeroSection";
import LogoBanner from "./components/IndexPages/LogoBanner";
import { RecentUpdatedExams } from "./components/IndexPages/RecentUpdatedExams";

export default function Home() {
  return (
    <>
      <LandingPageHeroSection />
      <LogoBanner />
      <RecentUpdatedExams />
      <SiteOverView />
      <AboutCard />
      <HotExams />
      <CertificationHomePageCard />
      <TestimonialCarousel />
      <WhyChoseCard />
    </>
  );
}
