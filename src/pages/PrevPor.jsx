import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './PrevPor.css';

function PrevPor() {
  const navigate = useNavigate();
  const [clickedCard, setClickedCard] = useState(null);

  const batchYears = [
    { 
      year: "2024-2025",
      image: "/batch2024.jpg",
    },
    { 
      year: "2023-2024",
      image: "/batch2023.jpg",
    },
    { 
      year: "2022-2023",
      image: "/batch2022.jpg",
    }
  ];

  const handleBatchClick = (year, index) => {
    setClickedCard(index);
    
    setTimeout(() => {
      navigate(`/prevpor/${year}`);
    }, 300);
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
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
        delayChildren: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.8,
      rotateY: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -15,
      scale: 1.05,
      rotateY: 5,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    tap: {
      scale: 0.95,
      rotateY: -2,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <div className="prev-por-page">
      <motion.div 
        className="prev-por-hero"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="prev-por-hero-content">
          <motion.h1 
            className="prev-por-title"
            variants={titleVariants}
          >
            Previous Leadership
          </motion.h1>
          <motion.p 
            className="prev-por-subtitle"
            variants={subtitleVariants}
          >
            Explore the legacy of leaders who shaped SARC BPHC
          </motion.p>
        </div>
      </motion.div>
      
      <div className="batch-section">
        <div className="container">
          <motion.div 
            className="batch-grid"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {batchYears.map((batch, index) => (
              <motion.div 
                key={batch.year} 
                className={`batch-card ${clickedCard === index ? 'clicked' : ''}`}
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => handleBatchClick(batch.year, index)}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
                {...hoverVariants}
              >
                <div className="batch-image-container">
                  <motion.img 
                    src={batch.image} 
                    alt={`Batch ${batch.year}`} 
                    className="batch-image"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  <motion.div 
                    className="batch-overlay"
                    variants={{
                      hidden: { opacity: 0 },
                      hover: { opacity: 1 }
                    }}
                    initial="hidden"
                    whileHover="hover"
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="batch-year"
                      variants={{
                        hidden: { y: 20, opacity: 0 },
                        hover: { y: 0, opacity: 1 }
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {batch.year}
                    </motion.div>
                    <motion.div 
                      className="batch-cta"
                      variants={{
                        hidden: { y: 20, opacity: 0 },
                        hover: { y: 0, opacity: 1 }
                      }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      View Members
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default PrevPor;
