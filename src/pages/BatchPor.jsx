import React from 'react';
import { useParams } from 'react-router-dom';
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
    { name: "Prachee Sharma", post: "Events Head", linkedin: "https://www.linkedin.com/in/prachee-sharma" },
    { name: "Ishita Mohile", post: "Events Head", linkedin: "https://www.linkedin.com/in/ishita-mohile-9457741a0" },
    { name: "Aastha Khare", post: "Events Head", linkedin: "https://www.linkedin.com/in/aastha-khare-14a10623a" },
    { name: "Vaka Ashrita Naidu", post: "Events Head", linkedin: "https://www.linkedin.com/in/vaka-ashrita" },
    { name: "Arun Mitra", post: "Content, Design & Social Media Head", linkedin: "https://www.linkedin.com/in/arun7mitra" },
    { name: "Aarush Sinha", post: "Tech Head", linkedin: "https://www.linkedin.com/in/aarush-sinha" }
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

  return (
    <div className="batch-por-container">
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '24px', 
        color: 'white', 
        padding: '80px 0 0 0', 
        background: '#202833', 
        fontFamily: 'Montessa, sans-serif' 
      }}>
        {year} PORS
      </h2>

      <div className="por-grid">
        {pors.map((por, index) => (
          <a
            key={index}
            href={por.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="por-card"
          >
            <div className="por-name">{por.name}</div>
            <div className="por-post">{por.post}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default BatchPor; 