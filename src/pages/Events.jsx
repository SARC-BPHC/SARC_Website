import React, { useEffect } from 'react';
import './Events.css';

import alumniMeetImg from '../assets/AlumniMeet.png';
import wilpImg from '../assets/WILP.png';
import bitsiansImg from '../assets/BitsiansDay.png';
import farewellImg from '../assets/goat2.png';
import batchsnapsImg from '../assets/BatchImg.png';
import yearbookImg from '../assets/yearbook.png';

const events = [
  {
    title: 'Alumni Meet',
    image: alumniMeetImg,
    description: `BITS Pilani, Hyderabad Campus, Alumni Meet is a grand event organized by SARC BPHC to unite past students, revive friendships, and cherish their experiences. At reunions, we manage all the ground-level logistics so that the alumni have a hassle-free experience. The meet includes guided tours of the campus, interactive panel discussions, performances by the Dance Club and Comedy Club of BPHC and recreational activities such as the Alumni Sports Meet and networking. It’s an opportunity to relive fond memories, see campus progress, and meet students, teachers, and fellow alumni. Let’s make these reunions special and build our ever-expanding BITSian community!`,
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

function EventRow({ title, image, description, reverse, altBg }) {
  return (
    <div className={`event-row${reverse ? ' reverse' : ''}${altBg ? ' alt-bg' : ''}`}>
      <div className="event-image-container">
        <img
          src={image}
          alt={title}
          className="event-image"
        />
      </div>
      <div className="event-text">
        <h2 className="event-title">{title}</h2>
        <p className="event-description">{description}</p>
      </div>
    </div>
  );
}

function EventsPage() {
  useEffect(() => {
    const prevOverflow = document.body.style.overflowX;
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = prevOverflow;
    };
  }, []);

  return (
    <div className="events-page">
      <div className="events-container">
        <h1 className="events-title">EVENTS</h1>
        {events.map((event, i) => (
          <EventRow
            key={event.title}
            {...event}
            altBg={i % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}

export default EventsPage;
