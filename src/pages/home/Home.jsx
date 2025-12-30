import Polaroid from '/src/components/polaroid/Polaroid.jsx';
import RansomHeading from '/src/components/ransom-heading/RansomHeading.jsx';
import './Home.css';
import StickyNote from '/src/components/sticky-notes/StickyNote.jsx';

function Home() {
  return (
    <div>
      <h1 className="sr-only">hey, i'm Samantha</h1>
      <div className="heading" aria-hidden="true">
        <h1>hey, i'm</h1>
        <RansomHeading globalFontSize="3rem" />
      </div>
      <div className="content-container">
        <Polaroid imageSrc="/src/assets/profile-picture.jpg"  height="27rem" caption="front-end developer & systems design engineering student @ uwaterloo"/>
        <div className="stickies-container">
          <div className="stickies current-intro">
            <StickyNote color="yellow">
              currently i’m...
              <ul>
                <li>interning at AGF</li>
                <li>building this site!</li>
                <li>searching for summer 2026 internships!</li>
              </ul>
            </StickyNote>
          </div>
          <div className="stickies previous-intro">
            <StickyNote color="pink">
              previously i...
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
