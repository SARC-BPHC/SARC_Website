import { Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Pors from './pages/Pors';
import Podcast from './pages/Podcast';
import SocialFeed from './pages/SocialFeed';
import Echo from './pages/Echo';
import BlogPost from './pages/BlogPost';
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
            <FadeInWrapper stagger={true}>
              <Events />
            </FadeInWrapper>
            <Footer />
          </>
        } />
        <Route path="/podcast" element={
          <>
            <Navbar />
            <FadeInWrapper stagger={true}>
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
            <FadeInWrapper stagger={true}>
              <PrevPor />
            </FadeInWrapper>
            <Footer />
          </>
        } />
        <Route path="/prevpor/:year" element={
          <>
            <Navbar />
            <FadeInWrapper stagger={true}>
              <BatchPor />
            </FadeInWrapper>
            <Footer />
          </>
        } />
        <Route path="/social" element={
          <>
            <Navbar />
            <FadeInWrapper stagger={true}>
              <SocialFeed />
            </FadeInWrapper>
            <Footer />
          </>
        } />
        <Route path="/echo" element={
          <>
            <Navbar />
            <FadeInWrapper stagger={true}>
              <Echo />
            </FadeInWrapper>
            <Footer />
          </>
        } />
        <Route path="/echo/:slug" element={
          <>
            <Navbar />
            <FadeInWrapper>
              <BlogPost />
            </FadeInWrapper>
            <Footer />
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
