import Footer from "@/components/common/Footer";
import MainAbout from "@/components/main/MainAbout";
import MainActivity from "@/components/main/MainActivity";
import MainCareer from "@/components/main/MainCareer";
import MainEducation from "@/components/main/MainEducation";
import MainIntro from "@/components/main/MainIntro";
import MainProject from "@/components/main/MainProject";
import { getProjectSummaries } from "@/constants/projects";

// section id 는 components/main/Sidebar.tsx 의 MAIN_SECTIONS 와 맞춰야 함
export default function Home() {
  return (
    <main style={{ overflowX: "hidden" }}>
      <MainIntro />
      <section id="about">
        <MainAbout />
      </section>
      <section id="career">
        <MainCareer />
      </section>
      <section id="activity">
        <MainActivity />
      </section>
      <section id="education">
        <MainEducation />
      </section>
      <section id="project" style={{ backgroundColor: "#f5f5f7" }}>
        <MainProject projects={getProjectSummaries()} />
      </section>
      <Footer />
    </main>
  );
}
