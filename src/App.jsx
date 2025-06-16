import { Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Pors from './pages/Pors';
import Podcast from './pages/Podcast';
import Navbar from './components/Navbar';
import FadeInWrapper from './components/FadeInWrapper';
import CurPor from './pages/CurPor';
import PrevPor from './pages/PrevPor';
import BatchPor from './pages/BatchPor';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={
          <>
            <Navbar />
            <FadeInWrapper>
              <Events />
            </FadeInWrapper>
            <Footer />
          </>
        } />
        <Route path="/podcast" element={
          <>
            <Navbar />
            <FadeInWrapper>
              <Podcast />
            </FadeInWrapper>
            <Footer />
          </>
        } />
        <Route path="/pors" element={
          <>
            <Navbar />
            <FadeInWrapper>
              <Pors />
            </FadeInWrapper>
            <Footer />
          </>
        } />
        <Route path="/curpor" element={
          <>
            <Navbar />
            <FadeInWrapper>
              <CurPor />
            </FadeInWrapper>
            <Footer />
          </>
        } />
        <Route path="/prevpor" element={
          <>
            <Navbar />
            <FadeInWrapper>
              <PrevPor />
            </FadeInWrapper>
            <Footer />
          </>
        } />
        <Route path="/prevpor/:year" element={
          <>
            <Navbar />
            <FadeInWrapper>
              <BatchPor />
            </FadeInWrapper>
            <Footer />
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
