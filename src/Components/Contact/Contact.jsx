import { useLottie } from 'lottie-react';
import contactAnimation from '../../assets/contactAnimation.json';
import SectionTitle from '../SectionTitle/SectionTitle';
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const socialDescription =
    "I'm on the hunt for new opportunities—check the links below! Reach out for job offers and professional connections. Let's build success together.";
  // For Lottie Animation
  const options = {
    animationData: contactAnimation,
    loop: true,
  };

  const { View } = useLottie(options);
  return (
    <section id="contact" className="px-4 mb-12">
      <SectionTitle
        title={'Contact Me'}
        border={'------------------------'}
      ></SectionTitle>
      <div className="flex flex-col-reverse rounded-t-lg gap-4 md:flex-row p-4 bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black ">
        <div className="flex-1 md:ml-8 mt-8">
          <label
            htmlFor="website-admin"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Name
          </label>
          <div className="flex mb-6">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <label
            htmlFor="input-group-1"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Email
          </label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white px-2 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="yourName@gmail.com"
            />
          </div>

          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
          <div className="text-center mt-4">
            <button
              type="button"
              className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white py-2 border-none"
            >
              Send Message
            </button>
          </div>
        </div>
        <div className="flex-1">{View}</div>
      </div>
      {/* Social Links Sections */}
      <div className="w-full text-center  py-8 bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black rounded-b-lg">
        <h5 className="mb-2 text-3xl font-bold text-white ">
          Connect with me on socials!
        </h5>
        <p className="mb-5 text-base text-gray-300 sm:text-lg dark:text-gray-100 md:w-[80%] md:mx-auto ">
          {socialDescription}
        </p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
          <a
            href="https://www.facebook.com/mahfujurrahman06627/"
            className="w-full sm:w-auto bg-gray-300 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300  rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 text-4xl text-blue-600"
          >
            <FaFacebook></FaFacebook>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/mahfuj80"
            className="w-full sm:w-auto bg-gray-300 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300  rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 text-4xl text-black hover:text-white"
          >
            <FaGithub></FaGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/mahfujur-rahman-632590202/"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-gray-300 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300  rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 text-4xl text-blue-600"
          >
            <FaLinkedinIn></FaLinkedinIn>
          </a>
          <a
            href="https://twitter.com/Mahfuj_A_A_"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-gray-300 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300  rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 text-4xl text-blue-600"
          >
            <FaTwitter></FaTwitter>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
