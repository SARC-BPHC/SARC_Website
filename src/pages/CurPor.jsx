import React from "react";
import PersonCard from "../components/PersonCard";
import "./CurPor.css";

import Puraj from "../PORsImgs/Purab.png";
import Sakshi from "../PORsImgs/Sakshi.png";
import Likith from "../PORsImgs/Likith.png";
import Rana from "../PORsImgs/Rana.png";
import Shourya from "../PORsImgs/Shourya.png";
import Divya from "../PORsImgs/Divya.png";
import Akash from "../PORsImgs/Akash.png";
import Vipul from "../PORsImgs/Vipul.png";
import Karandeep from "../PORsImgs/Karandeep.png";
import Vedant from "../PORsImgs/Vedant.png";
import SakshiB from "../PORsImgs/SakshiB.png";
import Romil from "../PORsImgs/Romil.png";
import Prathamesh from "../PORsImgs/Prathemesh.png";

const peopleData = [
  {
    firstname: "Likith",
    lastname: "Salla",
    designation: "Coordinator",
    year: "2024-2025",
    image: Likith,
    linkedin: "https://www.linkedin.com/in/likith-salla-413a2b25a/"
  },
  {
    firstname: "Sakshi",
    lastname: "Hingane",
    designation: "Coordinator",
    year: "2024-2025",
    image: Sakshi,
    linkedin: "https://www.linkedin.com/in/sakshi-hingane-494633267"
  },
  {
    firstname: "Purab",
    lastname: "Kukreja",
    designation: "Coordinator",
    year: "2024-2025",
    image: Puraj,
    linkedin: "https://www.linkedin.com/in/purabkukreja?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGDWfXHbCQfSPoVMr9BVK8w%3D%3D"
  },
  {
    firstname: "Divya",
    lastname: "Daga",
    designation: "Events Head",
    year: "2024-2025",
    image: Divya,
    linkedin: "https://www.linkedin.com/in/divya-daga-180542258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    firstname: "Akash",
    lastname: "Reddy",
    designation: "Events Head",
    year: "2024-2025",
    image: Akash,
    linkedin: "https://www.linkedin.com/in/akash-reddy-sangati-15679a212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    firstname: "Sakshi",
    lastname: "Bharadwaj",
    designation: "Content Head",
    year: "2024-2025",
    image: SakshiB,
    linkedin: "https://www.linkedin.com/in/sakshi-bharadwaj-887749257/"
  },
  {
    firstname: "Romil",
    lastname: "Goswami",
    designation: "Content Head",
    year: "2024-2025",
    image: Romil,
    linkedin: "https://www.linkedin.com/in/romil-goswami-9838aa24b/"
  },
  {
    firstname: "Vipul",
    lastname: "Alampally",
    designation: "Tech Lead",
    year: "2024-2025",
    image: Vipul,
    linkedin: "https://www.linkedin.com/in/vipul-alampally-971566264/"
  },
  {
    firstname: "Karandeep",
    lastname: "Singh",
    designation: "Tech Lead",
    year: "2024-2025",
    image: Karandeep,
    linkedin: "https://www.linkedin.com/in/karandeep-singh-sodhi-381683267/"
  },
  {
    firstname: "Vedant",
    lastname: "Bhatia",
    designation: "Video Editing Head",
    year: "2024-2025",
    image: Vedant,
    linkedin: "https://www.linkedin.com/in/vedant-bhatia-/"
  },
  {
    firstname: "Prathamesh",
    lastname: "",
    designation: "Design Head",
    year: "2024-2025",
    image: Prathamesh,
    linkedin: "https://www.linkedin.com/in/prathamesh-deshmane-667310258/"
  },
  {
    firstname: "Shourya",
    lastname: "Khubber",
    designation: "Events Head",
    year: "2024-2025",
    image: Shourya,
    linkedin: "https://www.linkedin.com/in/shourya-khubber-6b6321265/"
  },
  {
    firstname: "Rana",
    lastname: "Raunitraz",
    designation: "Events Head",
    year: "2024-2025",
    image: Rana,
    linkedin: "https://www.linkedin.com/in/rrrs-024a94250/"
  },
  
];

const CurPor = () => (
  <>
    <h2 style={{ 
  textAlign: 'center', 
  marginBottom: '24px', 
  color: 'white', 
  padding: '80px 0 0 0', 
  background: '#202833', 
  fontFamily: 'Montessa, sans-serif' 
}}>
  CURRENT PORS
</h2>

    <div className="people-grid">
      {peopleData.map((person, idx) => (
        <PersonCard key={idx} person={person} />
      ))}
    </div>
  </>
);

export default CurPor;
