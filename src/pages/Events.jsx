import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Events.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

import alumniMeetImg from '../assets/Reunions.png';
import wilpImg from '../assets/WILPs.png';
import bitsiansImg from '../assets/BitsiansDay.png';
import farewellImg from '../assets/farewell_Img.png';
import batchsnapsImg from '../assets/eventBatchsnap.png';
import yearbookImg from '../assets/yearbook.png';

const events = [
  {
    title: 'ReUnions',
    image: alumniMeetImg,
    description: `BITS Pilani, Hyderabad Campus, Reunion is a grand event organized by SARC BPHC to unite past students, revive friendships, and cherish their experiences. At reunions, we manage all the ground-level logistics so that the alumni have a hassle-free experience. The meet includes guided tours of the campus, interactive panel discussions, performances by the Dance Club and Comedy Club of BPHC and recreational activities such as the Alumni Sports Meet and networking. It’s an opportunity to relive fond memories, see campus progress, and meet students, teachers, and fellow alumni. Let’s make these reunions special and build our ever-expanding BITSian community!`,
    reverse: false,
  },
  {
    title: 'WILP Alumni Day',
    image: wilpImg,
    description: `WILP Alumni Day is a significant moment for Work Integrated Learning Program (WILP) alumni as they step onto the BPHC campus for the first time. Organized by SARC, the day is filled with excitement and nostalgia as alumni explore the institute whose legacy they proudly carry forward. From campus tours to mini-games, interactive sessions, and a grand dinner, the event fosters a deep sense of belonging. WILP Alumni Day is more than just a visit—it is a celebration of their connection to BITS Pilani and the journey each has been a part of ever since joining.`,
    reverse: true,
  },
  {
    title: 'BITSIANS Day',
    image: bitsiansImg,
    description: `BITSians’ Day is a celebration of the shared legacy, memories, and spirit of being a BITSian. Organized on the 1st of August by SARC, the event brings together students, faculty, and alumni to reconnect and relive their cherished experiences. With an exciting lineup of events, including an open mic, talent show, and mini-games, the day is filled with nostalgia, excitement and campus spirit. It’s more than just a celebration—it’s a tribute to the friendships, traditions, and experiences that define life at BITS Pilani, making it an unforgettable part of every BITSian’s journey.`,
    reverse: false,
  },
  {
    title: 'FAREWELL',
    image: farewellImg,
    description: `College life is all about creating small, memorable moments that turn friendships into family. As one chapter closes, and the outgoing batch steps into a new one, they carry with them the lessons, memories, and bonds that BITS Pilani gifted them. To help them relive these unforgettable experiences, SARC organizes a heartfelt farewell. The event features inspiring addresses by the Director, professors, and well-wishers, followed by captivating cultural performances that showcase the spirit of BITS.`,
    reverse: true,
  },
  {
    title: 'BatchSnaps',
    image: batchsnapsImg,
    description: `Batchsnaps--a cherished photography session dedicated to all the pre-final year students. This event brings together the students to capture timeless memories with their fellow batchmates, friends, and beloved faculty members. SARC set up a photo booth to allow students to spontaneously capture moments with their friends. Through this event, SARC helps preserve the journey the outgoing batch had at BITS, freezing these precious memories in time.`,
    reverse: false,
  },
  {
    title: 'YearBook',
    image: yearbookImg,
    description: `Campus life is filled with unforgettable moments, and some become lifelong memories. Through the Yearbook, SARC offers final-year students a chance to relive these cherished moments with personalized messages and snapshots from their friends. It's more than just a collection of pages—it's a celebration of friendships, milestones, and the journey they've shared.`,
    reverse: true,
  },
];

function EventCard({ event, onClick, index }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -10,
      scale: 1.05,
      rotateX: 5,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div 
      className="event-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover="hover"
      whileTap="tap"
      onClick={() => onClick(event)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
      {...hoverVariants}
    >
      <div className="event-card-image-container">
        <motion.img
          loading="lazy"
          src={event.image}
          alt={event.title}
          className="event-card-image"
          variants={imageVariants}
          whileHover="hover"
        />
        <motion.div 
          className="event-card-overlay"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            y: isHovered ? 0 : 20
          }}
          transition={{ 
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
        >
          <motion.div 
            className="event-card-content"
            initial={{ y: 10, opacity: 0 }}
            animate={{ 
              y: isHovered ? 0 : 10, 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ 
              delay: isHovered ? 0.1 : 0, 
              duration: 0.2 
            }}
          >
            <h3 className="event-card-title">{event.title}</h3>
            <p className="event-card-subtitle">Click to learn more</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function EventDialog({ event, isOpen, onClose }) {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const dialogVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      y: 50
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && event && (
        <motion.div 
          className="event-dialog-backdrop open" 
          onClick={onClose}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div 
            className="event-dialog open" 
            onClick={(e) => e.stopPropagation()}
            variants={dialogVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.button 
              className="event-dialog-close" 
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              ×
            </motion.button>
            <div className="event-dialog-content">
              <motion.div 
                className="event-dialog-image-container"
                variants={contentVariants}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-dialog-image"
                />
              </motion.div>
              <motion.div 
                className="event-dialog-text"
                variants={contentVariants}
              >
                <h2 className="event-dialog-title">{event.title}</h2>
                <p className="event-dialog-description">{event.description}</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const prevOverflow = document.body.style.overflowX;
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = prevOverflow;
    };
  }, []);

  useEffect(() => {
    if (isDialogOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDialogOpen]);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
  };

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
        delayChildren: 0.8
      }
    }
  };

  return (
    <div className="events-page">
      <motion.div 
        className="events-hero"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="events-hero-content">
          <motion.h1 
            className="events-title"
            variants={titleVariants}
          >
            Events
          </motion.h1>
          <motion.p 
            className="events-subtitle"
            variants={subtitleVariants}
          >
            Discover the memorable moments that bring our community together
          </motion.p>
        </div>
      </motion.div>

      <div className="events-section">
        <motion.div 
          className="events-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {events.map((event, index) => (
            <EventCard
              key={event.title}
              event={event}
              index={index}
              onClick={handleEventClick}
            />
          ))}
        </motion.div>
      </div>
      
      <EventDialog
        event={selectedEvent}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </div>
  );
}

export default EventsPage;
