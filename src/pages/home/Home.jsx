import Polaroid from '/src/components/polaroid/Polaroid.jsx';
import RansomHeading from '/src/components/ransom-heading/RansomHeading.jsx';
import StickyNote from '/src/components/sticky-notes/StickyNote.jsx';
import './Home.css';
import profilePic from '/src/assets/images/profile-picture.jpg';

function Home() {
  return (
    <div>
      <div>
        <h1 className="heading">hey, i'm samantha!</h1>
        <h2 className="subheading"><mark>systems design engineering</mark> student @ <mark>UWaterloo</mark></h2>
      </div>
      <div className="home-container">
        <Polaroid imageSrc={profilePic} height="27rem" caption="welcome to my website :)" paperclip={true} star={true} tilt={true} />
        <div className="stickies-container">
          <div className="stickies current-intro">
            <StickyNote color="yellow">
              currently i’m...
              <ul>
                <li>developing front-end experiences @ AGF Investments</li>
                <li>building this site!</li>
                <li>searching for summer 2026 internships in front-end, full-stack and SWE!</li>
              </ul>
            </StickyNote>
          </div>
          <div className="stickies previous-intro">
            <StickyNote color="pink">
              previously i've...
              <ul>
                <li>built front-end experiences at Apricotton</li>
                <li>created UI for Health Canada</li>
              </ul>
            </StickyNote>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
