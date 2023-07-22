import { Header } from "../../components/Header"
import { BannerSection } from "../../components/BannerSection"
import { AboutMeSection } from "../../components/AboutMeSection"
import { TechSection } from "../../components/TechSection"
import { ProjectSection } from "../../components/ProjectsSection"
import { Footer } from "../../components/Footer"


export const HomePage = () => {
    return (
        <>
          <Header />
          <main>
            <BannerSection />
            <AboutMeSection />
            <TechSection />
            <ProjectSection />
          </main>
          <Footer />
        </>
    )
}