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
        <h2 className="subheading"><mark>full-stack developer</mark> & <mark>systems design engineering</mark> student @ UWaterloo</h2>
      </div>
      <div className="home-container">
        <Polaroid imageSrc={profilePic} height="27rem" caption="welcome to my website :)" paperclip={true} star={true} tilt={true} />
        <div className="stickies-container">
          <div className="stickies current-intro">
            <StickyNote color="yellow">
              <h4>currently i’m...</h4>
              <ul>
                <li>entering my third year</li>
                <li>building this site lol</li>
                <li>searching for summer 2026 internships in front-end/full-stack dev & SWE - <a href="./contact">reach out!</a></li>
              </ul>
            </StickyNote>
          </div>
          <div className="stickies previous-intro">
            <StickyNote color="pink">
              <h4>previously i've...</h4>
              <ul>
                <li>developed front-end components @ AGF Investments</li>
                <li>built Shopify e-commerce features @ Apricotton</li>
                <li>redesigned Canada.ca's Food Guide dashboard</li>
              </ul>
            </StickyNote>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
