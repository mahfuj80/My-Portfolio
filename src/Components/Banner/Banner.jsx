import { Link } from 'react-router-dom';
import Profile from '../../assets/MahfujurRahman.png';
import { FaReact, FaNodeJs } from 'react-icons/fa6';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const Banner = () => {
  return (
    <section className="px-4 rounded-lg">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: 'url(/Banner-bg.gif)',
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div
          className="hero-content flex-col md:flex-row justify-between"
          // style={{
          //   backgroundImage: 'url(/t.png)',
          // }}
        >
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
    </section>
  );
};

export default Banner;
