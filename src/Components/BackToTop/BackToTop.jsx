import { FaArrowUp } from 'react-icons/fa';
import './BackToTop.css';

const BackToTop = () => {
  // Get the button
  let myButton = document.getElementById('myBtn');

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      myButton.style.display = 'block';
    } else {
      myButton.style.display = 'none';
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  // TODO: #3B2E40 to black rgb
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <button
      className="animate-bounce"
      onClick={topFunction}
      id="myBtn"
      title="Go to top"
    >
      <FaArrowUp></FaArrowUp>
    </button>
  );
};

export default BackToTop;
