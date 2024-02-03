import { HashLink as Link } from 'react-router-hash-link';
import Profile from '../../assets/MahfujurRahman.png';
import { FaReact, FaNodeJs } from 'react-icons/fa6';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';
import './Banner.css';

const Banner = () => {
  return (
    <section className="px-4 rounded-lg mb-12">
      <div
        className="hero min-h-screen lg:min-h-[60vh]"
        style={{
          backgroundImage: 'url(/Banner-bg.gif)',
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content flex-col-reverse md:flex-row justify-between pt-12 pb-16">
          <div className="md:w-1/2 w-[90%] mx-auto text-center  md:pl-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
              Mahfujur Rahman
            </h1>
            <p className="py-6 italic text-[#0CC0DF] text-xl font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text">
              Passionate React Developer with a solid foundation in Computer
              Science and Engineering, honed through dedicated studies at
              Kushtia Polytechnic Institute.
            </p>
            <Link to={'#contact'}>
              <button
                type="button"
                className="btn border-none text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-600  hover:to-green-500 text-base"
              >
                Contact
              </button>
            </Link>
            <div className="flex gap-2 flex-row justify-center items-center mt-8">
              <div className="text-5xl text-cyan-500 font bold">
                <FaReact />
              </div>
              <div className="text-5xl text-cyan-500 font bold">
                <SiTailwindcss></SiTailwindcss>
              </div>
              <div className="text-5xl text-green-500 font bold">
                <SiMongodb></SiMongodb>
              </div>
              <div className="text-5xl text-green-500 font bold">
                <FaNodeJs></FaNodeJs>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-[90%] mx-auto ">
            <img
              src={Profile}
              className="rounded-2xl mask mask-hexagon w-fit mx-auto"
            />
          </div>
        </div>
      </div>
      {/* Stats */}
      <div
        className="flex flex-col md:flex-row gap-4 justify-center bg-gray-700 py-4 md:w-[70
        %] mx-auto px-4 rounded-lg -mt-12 items-center"
      >
        <div className="h-[150px] w-[250px] flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 z-10">
          <p className="text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            8+
          </p>
          <a href="#" className="flex items-center group">
            <h5 className="mb-2 text-2xl font-semibold link-underline link-underline-black text-blue-500">
              Projects
            </h5>
            <svg
              className="w-3 h-3 ms-2.5 rtl:rotate-[270deg] group-hover:animate-bounce"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </a>
        </div>
        <div className="h-[150px] w-[250px] flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 z-10">
          <p className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text py-4">
            Resume
          </p>
          <a href="#" className="flex items-center group">
            <h5 className="mb-2 text-2xl font-semibold link-underline link-underline-black text-blue-500">
              View
            </h5>
            <svg
              className="w-3 h-3 ms-2.5 rtl:rotate-[270deg] group-hover:animate-bounce"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </a>
        </div>
        <div className="h-[150px] w-[250px] flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 z-10">
          <p className="text-3xl font-bold  bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text py-4">
            Current Project
          </p>
          <a href="#" className="flex items-center group">
            <h5 className="mb-2 text-2xl font-semibold link-underline link-underline-black text-blue-500">
              View Project
            </h5>
            <svg
              className="w-3 h-3 ms-2.5 rtl:rotate-[270deg] group-hover:animate-bounce"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
