import Background from "../components/Background/Background";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Background />
      <Navbar />

      <Hero />

      <section id="about" className="min-h-screen"></section>

      <section id="skills" className="min-h-screen"></section>

      <section id="experience" className="min-h-screen"></section>

      <section id="projects" className="min-h-screen"></section>

      <section id="contact" className="min-h-screen"></section>
    </>
  );
};

export default Home;