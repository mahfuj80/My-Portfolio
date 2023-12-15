import { Link } from 'react-router-dom';
import Profile from '../../assets/MahfujurRahman.png';
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
        <div className="hero-content flex-col lg:flex-row justify-between">
          <div className="w-1/2 mx-auto text-center  md:pl-8">
            <h1 className="text-5xl font-bold text-[#0CC0DF]">
              Mahfujur Rahman
            </h1>
            <p className="py-6 italic text-[#0CC0DF] text-xl font-bold">
              Front-end developer. Four years of experience in programming.
              Studied at Kushtia Polytechnic Institue Diploma in CSE.
            </p>
            <Link to={'#contact'}>
              <button className="btn bg-[#0CC0DF] border-none text-xl text-white">
                Hire me
              </button>
            </Link>
          </div>
          <div className="w-1/2 mx-auto ">
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
