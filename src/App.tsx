import Contact from "./components/contact";
import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
import CodingProfiles from "./components/profiles";
import SkillsSection from "./components/skills";
import ThemeSwitcher from "./components/theme";
import ThemeProvider from "./provider/ThemeProvider";

export default function App() {
  return (
<>
<ThemeProvider />
        <ThemeSwitcher />
      <main className="main-app flex flex-col justify-center items-center">
        <Navbar/>
        <HeroSection />
        <CodingProfiles/>
        <SkillsSection />
        <Contact />
      </main>
</>
  )
}