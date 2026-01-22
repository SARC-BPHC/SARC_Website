import React from "react";
import { motion } from "framer-motion";
import "./PersonCard.css";

const PersonCard = ({ person, index = 0 }) => {
  const hoverVariants = {
    hover: {
      scale: 1.02,
      y: -4,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const linkedinVariants = {
    hover: {
      scale: 1.1,
      y: -2,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <>
      <motion.div 
        className="person-card desktop-card"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.4,
          delay: 0.8 + (index * 0.1),
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        whileHover="hover"
        whileTap="tap"
        variants={hoverVariants}
      >
        <motion.img 
          loading="lazy" 
          src={person.image} 
          alt={`${person.firstname} ${person.lastname}`} 
          className="person-image"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        <div className="person-info">
          <motion.div 
            className="person-designation"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + (index * 0.1) + 0.2, duration: 0.3 }}
          >
            {person.designation}
          </motion.div>
          <motion.div 
            className="person-name"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + (index * 0.1) + 0.3, duration: 0.3 }}
          >
            <span className="firstname">{person.firstname}</span>
            <span className="lastname">{person.lastname}</span>
          </motion.div>
          <motion.div 
            className="person-year"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + (index * 0.1) + 0.4, duration: 0.3 }}
          >
            {person.year}
          </motion.div>
          <motion.a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-icon-btn"
            aria-label="LinkedIn"
            variants={linkedinVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + (index * 0.1) + 0.5, duration: 0.3, type: "spring", stiffness: 200 }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="linkedin-logo"
            >
              <circle cx="16" cy="16" r="16" fill="white"/>
              <path
                d="M12.3 13.5H9.7V22.5H12.3V13.5ZM11 12.3C11.8 12.3 12.5 11.6 12.5 10.8C12.5 10 11.8 9.3 11 9.3C10.2 9.3 9.5 10 9.5 10.8C9.5 11.6 10.2 12.3 11 12.3ZM22.5 17.1C22.5 15 21.6 13.5 19.4 13.5C18.2 13.5 17.5 14.2 17.2 14.7H17.1V13.5H14.5V22.5H17.1V17.9C17.1 16.7 17.7 16.1 18.6 16.1C19.4 16.1 19.7 16.7 19.7 17.9V22.5H22.3V17.1H22.5Z"
                fill="black"
              />
            </svg>
          </motion.a>
        </div>
      </motion.div>

      <motion.a
        href={person.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="person-card mobile-card"
        aria-label={`View ${person.firstname} ${person.lastname}'s LinkedIn profile`}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.4,
          delay: 0.8 + (index * 0.1),
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        whileHover="hover"
        whileTap="tap"
        variants={hoverVariants}
      >
        <motion.img 
          loading="lazy" 
          src={person.image} 
          alt={`${person.firstname} ${person.lastname}`} 
          className="person-image"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        <div className="person-info">
          <motion.div 
            className="person-designation"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + (index * 0.1) + 0.2, duration: 0.3 }}
          >
            {person.designation}
          </motion.div>
          <motion.div 
            className="person-name"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + (index * 0.1) + 0.3, duration: 0.3 }}
          >
            <span className="firstname">{person.firstname}</span>
            <span className="lastname">{person.lastname}</span>
          </motion.div>
          <motion.div 
            className="person-year"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + (index * 0.1) + 0.4, duration: 0.3 }}
          >
            {person.year}
          </motion.div>
        </div>
      </motion.a>
    </>
  );
};

export default PersonCard;
