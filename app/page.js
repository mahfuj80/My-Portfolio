import Nav from "@/components/Nav";
import Banner from "@/components/Banner";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Nav />
      <main className="container mx-auto px-2 sm:px-4 pt-20 flex-grow">
        <Banner />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
