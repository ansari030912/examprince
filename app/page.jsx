import MainNav from "./Nav-bar/MainNav";
import NavTop from "./Nav-bar/NavTop";
import AboutCard from "./components/IndexPages/AboutCard";
import HotExams from "./components/IndexPages/HotExams";
import LandingPageHeroSection from "./components/IndexPages/LandingPageHeroSection";
import LogoBanner from "./components/IndexPages/LogoBanner";
import { RecentUpdatedExams } from "./components/IndexPages/RecentUpdatedExams";

export default function Home() {
  return (
    <>
      <NavTop />
      <MainNav />
      <LandingPageHeroSection />
      <LogoBanner />
      <RecentUpdatedExams />
      <AboutCard />
      <HotExams />
    </>
  );
}
