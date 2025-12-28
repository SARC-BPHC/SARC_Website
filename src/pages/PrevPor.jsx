import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './PrevPor.css';

function PrevPor() {
  const navigate = useNavigate();
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });
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

  return (
    <div className="prev-por-page">
      <div className="prev-por-hero">
        <div className="prev-por-hero-content">
          <h1 className="prev-por-title fade-in animate">Previous Leadership</h1>
          <p className="prev-por-subtitle fade-in animate">
            Explore the legacy of leaders who shaped SARC BPHC
          </p>
        </div>
      </div>
      
      <div className="batch-section" ref={ref}>
        <div className="container">
          <div className="batch-grid">
            {batchYears.map((batch, index) => (
              <div 
                key={batch.year} 
                className={`batch-card hover-lift fade-in ${isIntersecting ? 'animate' : ''} ${clickedCard === index ? 'clicked' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => handleBatchClick(batch.year, index)}
              >
                <div className="batch-image-container">
                  <img 
                    src={batch.image} 
                    alt={`Batch ${batch.year}`} 
                    className="batch-image"
                  />
                  <div className="batch-overlay">
                    <div className="batch-year">{batch.year}</div>
                    <div className="batch-cta">View Members</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrevPor;
