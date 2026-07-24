import Background from "../components/Background/Background";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import MouseGlow from "../components/Background/MouseGlow";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Cursor from "../components/Cursor/Cursor";
import ScrollProgress from "../components/Common/ScrollProgress";
import GridBackground from "../components/Background/GridBackground";
// import FloatingBlobs from "../components/Background/FloatingBlobs";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Background />
      <MouseGlow />
      <Cursor />
      <ScrollProgress />
      <GridBackground />
      {/* <FloatingBlobs /> */}
      <Navbar />

      <Hero />

      <About />
      <Skills />

      <Experience />

      <Projects />

      <Contact />
      <Footer />
    </>
  );
};

export default Home;