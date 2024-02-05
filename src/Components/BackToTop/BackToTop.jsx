import './BackToTop.css';

const BackToTop = () => {
  // Get the button
  window.onload = function () {
    let myButton = document.getElementById('myBtn');

    // When the user scrolls down 400px from the top of the document, show the button
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
  };

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
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path d="M24 12c0 6.623-5.377 12-12 12s-12-5.377-12-12 5.377-12 12-12 12 5.377 12 12zm-1 0c0 6.071-4.929 11-11 11s-11-4.929-11-11 4.929-11 11-11 11 4.929 11 11zm-11.5-4.828l-3.763 4.608-.737-.679 5-6.101 5 6.112-.753.666-3.747-4.604v11.826h-1v-11.828z" />
      </svg>
    </button>
  );
};

export default BackToTop;
