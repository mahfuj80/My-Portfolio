import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import Nav from '../../Components/Nav/Nav';

const Home = () => {
  return (
    <div className="container mx-auto mt-[68px]">
      <Nav></Nav>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
};

export default Home;
