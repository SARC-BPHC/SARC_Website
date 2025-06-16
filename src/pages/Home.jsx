import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import FadeInWrapper from '../components/FadeInWrapper';

function Home() {
  return (
    <>
      <Navbar />
      <FadeInWrapper>
              <Carousel />
      </FadeInWrapper>
      <Footer />
    </>
  );
}

export default Home;
