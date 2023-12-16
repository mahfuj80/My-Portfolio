import Banner from '../../Components/Banner/Banner';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
import Nav from '../../Components/Nav/Nav';
import Projects from '../../Components/Projects/Projects';
import Skills from '../../Components/Skills/Skills';

const Home = () => {
  return (
    <div className="container mx-auto mt-[72px]">
      <Nav></Nav>
      <Banner></Banner>
      <Projects></Projects>
      <Contact></Contact>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
};

export default Home;
