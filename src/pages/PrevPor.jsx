import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PrevPor.css';

function PrevPor() {
  const navigate = useNavigate();

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

  const handleBatchClick = (year) => {
    navigate(`/prevpor/${year}`);
  };

  return (
    <div className="prev-por-container">
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '24px', 
        color: 'white', 
        padding: '80px 0 0 0', 
        background: '#202833', 
        fontFamily: 'Montessa, sans-serif' 
      }}>
        PREVIOUS PORS
      </h2>
      
      <div className="batch-grid">
        {batchYears.map((batch) => (
          <div 
            key={batch.year} 
            className="batch-card"
            onClick={() => handleBatchClick(batch.year)}
          >
            <div className="batch-image-container">
              <img 
                src={batch.image} 
                alt={`Batch ${batch.year}`} 
                className="batch-image"
              />
              <div className="batch-year-overlay">{batch.year}</div>
            </div>
            <div className="batch-description">{batch.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrevPor;
