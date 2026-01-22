import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
import CurPor from './pages/CurPor';
import PrevPor from './pages/PrevPor';
import BatchPor from './pages/BatchPor';

function PageLayout({ children, layoutKey }) {
  const pageVariants = {
    initial: { 
      opacity: 0, 
      y: 20,
      scale: 0.98
    },
    in: { 
      opacity: 1, 
      y: 0,
      scale: 1
    },
    out: { 
      opacity: 0, 
      y: -20,
      scale: 1.02
    }
  };

  const pageTransition = {
    type: "tween",
    ease: [0.25, 0.46, 0.45, 0.94],
    duration: 0.5
  };

  return (
    <motion.div
      key={layoutKey}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageLayout layoutKey={location.pathname}>
              <Home />
            </PageLayout>
          } 
        />
        <Route 
          path="/home" 
          element={
            <PageLayout layoutKey={location.pathname}>
              <Home />
            </PageLayout>
          } 
        />
        <Route 
          path="/events" 
          element={
            <PageLayout layoutKey={location.pathname}>
              <Navbar />
              <Events />
              <Footer />
            </PageLayout>
          } 
        />
        <Route 
          path="/podcast" 
          element={
            <PageLayout layoutKey={location.pathname}>
              <Navbar />
              <Podcast />
              <Footer />
            </PageLayout>
          } 
        />
        <Route 
          path="/pors" 
          element={
            <PageLayout layoutKey={location.pathname}>
              <Navbar />
              <Pors />
              <Footer />
            </PageLayout>
          } 
        />
        <Route 
          path="/curpor" 
          element={
            <PageLayout layoutKey={location.pathname}>
              <Navbar />
              <CurPor />
              <Footer />
            </PageLayout>
          } 
        />
        <Route 
          path="/prevpor" 
          element={
            <PageLayout layoutKey={location.pathname}>
              <Navbar />
              <PrevPor />
              <Footer />
            </PageLayout>
          } 
        />
        <Route 
          path="/prevpor/:year" 
          element={
            <PageLayout layoutKey={location.pathname}>
              <Navbar />
              <BatchPor />
              <Footer />
            </PageLayout>
          } 
        />
        <Route 
          path="/social" 
          element={
            <PageLayout layoutKey={location.pathname}>
              <Navbar />
              <SocialFeed />
              <Footer />
            </PageLayout>
          } 
        />
        <Route 
          path="/echo" 
          element={
            <PageLayout layoutKey={location.pathname}>
              <Navbar />
              <Echo />
              <Footer />
            </PageLayout>
          } 
        />
        <Route 
          path="/echo/:slug" 
          element={
            <PageLayout layoutKey={location.pathname}>
              <Navbar />
              <BlogPost />
              <Footer />
            </PageLayout>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
