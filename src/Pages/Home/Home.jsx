import Banner from '../../Components/Banner/Banner';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
import Nav from '../../Components/Nav/Nav';
import Projects from '../../Components/Projects/Projects';
import Skills from '../../Components/Skills/Skills';
import { FaArrowUp } from 'react-icons/fa';

import './Home.css';

const Home = () => {
  // Get the button
  let mybutton = document.getElementById('myBtn');

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      mybutton.style.display = 'block';
    } else {
      mybutton.style.display = 'none';
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="container mx-auto mt-[72px]">
      <Nav></Nav>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      <button
        className="animate-bounce"
        onClick={topFunction}
        id="myBtn"
        title="Go to top"
      >
        <FaArrowUp></FaArrowUp>
      </button>
    </div>
  );
};

export default Home;
