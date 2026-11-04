import Feedback from "@/components/common/Feedback";
import Footer from "@/components/common/Footer";
import MainAbout from "@/components/main/MainAbout";
import MainCareer from "@/components/main/MainCareer";
import MainEducation from "@/components/main/MainEducation";
import MainIntro from "@/components/main/MainIntro";
import MainProject from "@/components/main/MainProject";

// section id 는 components/main/Sidebar.tsx 의 MAIN_SECTIONS 와 맞춰야 함
export default function Home() {
  return (
    <main style={{ overflowX: "hidden" }}>
      <Feedback />
      <MainIntro />
      <section id="about">
        <MainAbout />
      </section>
      <section id="career">
        <MainCareer />
      </section>
      <section id="education">
        <MainEducation />
      </section>
      <section id="project" style={{ backgroundColor: "#f5f5f7" }}>
        <MainProject />
      </section>
      <Footer />
    </main>
  );
}
