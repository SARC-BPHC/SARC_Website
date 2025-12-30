import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './BatchPor.css';

const porData = {
  "2024-2025": [
    { name: "Sakshi Hingane", post: "Student Coordinator", linkedin: "https://www.linkedin.com/in/sakshi-hingane-494633267" },
    { name: "Purab Kukreja", post: "Student Coordinator", linkedin: "https://www.linkedin.com/in/purabkukreja" },
    { name: "Likith Salla", post: "Student Coordinator", linkedin: "https://www.linkedin.com/in/likithsalla" },
    { name: "SV Akash Reddy", post: "Events Head", linkedin: "https://www.linkedin.com/in/akash-reddy-sangati-15679a212" },
    { name: "Divya Daga", post: "Events Head", linkedin: "https://www.linkedin.com/in/divya-daga-180542258" },
    { name: "Shourya Khubber", post: "Events Head", linkedin: "https://www.linkedin.com/in/shourya-khubber-6b6321265" },
    { name: "Rana Raunitraz Singh", post: "Events Head", linkedin: "https://www.linkedin.com/in/rrrs-024a94250" },
    { name: "Vipul Alampally", post: "Tech Head", linkedin: "https://www.linkedin.com/in/vipul-alampally-971566264" },
    { name: "Karandeep Singh Sodhi", post: "Tech Head", linkedin: "https://www.linkedin.com/in/karandeepsinghsodhi" },
    { name: "Romil Goswami", post: "Content & Social Media Head", linkedin: "https://www.linkedin.com/in/romil-goswami-9838aa24b" },
    { name: "Sakshi Bharadwaj", post: "Content & Social Media Head", linkedin: "https://www.linkedin.com/in/sakshi-bharadwaj-887749257" },
    { name: "Vedant Bhatia", post: "Video-Editing Head", linkedin: "https://www.linkedin.com/in/vedant-bhatia" },
    { name: "Prathmesh Deshmane", post: "Design Head", linkedin: "https://www.linkedin.com/in/prathamesh-deshmane-667310258" }
   
  ],
  "2023-2024": [
    { name: "Arjun Tyagi", post: "Student Coordinator", linkedin: "https://www.linkedin.com/in/arjun-tyagi-a85058241" },
    { name: "Sidhant Bhat", post: "Student Coordinator", linkedin: "https://www.linkedin.com/in/sidhant-bhat-234711227" },
    { name: "Dhruv Choudhary", post: "Student Coordinator", linkedin: "https://www.linkedin.com/in/dhruv-choudhary-594114233" },
    { name: "Prachee Sharma", post: "Events Head", linkedin: "https://www.linkedin.com/in/prachee-sharma-/" },
    { name: "Ishita Mohile", post: "Events Head", linkedin: "https://www.linkedin.com/in/ishita-mohile-9457741a0" },
    { name: "Aastha Khare", post: "Events Head", linkedin: "https://www.linkedin.com/in/aastha-khare-14a10623a" },
    { name: "Vaka Ashrita Naidu", post: "Events Head", linkedin: "https://www.linkedin.com/in/vaka-ashrita" },
    { name: "Arun Mitra", post: "Content, Design & Social Media Head", linkedin: "https://www.linkedin.com/in/arun7mitra" },
    { name: "Aarush Sinha", post: "Tech Head", linkedin: "https://www.linkedin.com/in/aarush-sinha" },
    { name: "Shivansh Shukla", post: "Tech Head", linkedin: "https://www.linkedin.com/in/shuklashivansh" }
  ],
  "2022-2023": [
    { name: "Aarnav Sanghvi", post: "Student Coordinator", linkedin: "https://www.linkedin.com/in/aarnav-sanghvi" },
    { name: "Ojasvee Shah", post: "Student Coordinator", linkedin: "https://www.linkedin.com/in/ojasvee-shah" },
    { name: "Sahil Luthra", post: "Events Head", linkedin: "https://www.linkedin.com/in/sahil-luthra-631a45214" },
    { name: "Anhadvir Singh", post: "Events Head", linkedin: "https://www.linkedin.com/in/anhadvir-singh-8448b721b" }
  ]
};

function BatchPor() {
  const { year } = useParams();
  const pors = porData[year] || [];
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const [visibleCards, setVisibleCards] = useState(new Set());

  // Group PORs by designation
  const groupedPors = pors.reduce((acc, por) => {
    const designation = por.post;
    if (!acc[designation]) {
      acc[designation] = [];
    }
    acc[designation].push(por);
    return acc;
  }, {});

  useEffect(() => {
    if (isIntersecting) {
      pors.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => new Set([...prev, index]));
        }, index * 100);
      });
    }
  }, [isIntersecting, pors]);

  const getPostColor = (post) => {
    if (post.includes('Coordinator')) return '#66FCF1';
    if (post.includes('Head')) return '#A78BFA';
    return '#60A5FA';
  };


  return (
    <div className="batch-por-page">
      <div className="batch-por-hero">
        <div className="batch-por-hero-content">
          <h1 className="batch-hero-title text-reveal animate">
            {year} SARC Team
          </h1>
          <p className="batch-hero-subtitle fade-in animate">
            Meet the dedicated student leaders who drive SARC's mission forward
          </p>
        </div>
      </div>

      <div className="batch-por-content">
        <div className="batch-por-container">
          {Object.entries(groupedPors).map(([designation, members]) => (
            <div key={designation} className="designation-group">
              <h2 className="designation-title">{designation}s</h2>
              <div className="por-grid" ref={ref}>
                {members.map((por, index) => (
                  <a
                    key={index}
                    href={por.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`por-card modern-card scale-in ${visibleCards.has(index) ? 'animate' : ''}`}
                    style={{ 
                      transitionDelay: `${index * 100}ms`,
                      '--accent-color': getPostColor(por.post)
                    }}
                  >
                    <div className="por-card-header">
                      <div className="linkedin-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="por-card-body">
                      <h3 className="por-name">{por.name}</h3>
                    </div>
                    <div className="por-card-footer">
                      <span className="view-profile">View Profile</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17l9.2-9.2M17 17V7H7"/>
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BatchPor; 