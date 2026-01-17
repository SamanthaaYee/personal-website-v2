import './Home.css';

import Polaroid from '../../components/polaroid/Polaroid';
import StickyNote from '../../components/sticky-notes/StickyNote';
import HoverableIcon from '../../components/hoverable-icon/HoverableIcon';

import profileImg from '../../assets/images/profile-picture.jpg';
import arrowImg from '../../assets/images/arrow.png';
import exclamationLinesImg from '../../assets/images/exclamation-lines.png';
import headphonesImg from '../../assets/images/headphones.png';

function Home() {
  return (
    <div className="home-page-container">
      <div>
        <h1 className="heading">hey, i'm samantha!</h1>
        <h2 className="subheading"><mark>full-stack developer</mark> based in Toronto & <mark>systems design engineering</mark> student @ UWaterloo</h2>
      </div>
      <div className="home-container">
        <div>
          <img src={arrowImg} alt="arrow" draggable="false" style={{ height: "3rem" }} className="arrow-icon" />
          <Polaroid imgSrc={profileImg} altText="profile picture" height="27rem" caption="welcome to my website :)" paperclip={true} star={true} tilt={true} />
        </div>
        <div className="stickies-container">
          <div className="stickies current-intro">
            <StickyNote color="yellow" tape={true}>
              <h4>currently i’m...</h4>
              <ul>
                <li>in my third year</li>
                <li>building this site lol</li>
                <li>looking for summer 2026 internships and full time roles for 2027 in front-end/full-stack dev & SWE - <a href="mailto:sayee@uwaterloo.ca">reach out!</a></li>
              </ul>
            </StickyNote>
          </div>
          <div className="previous-intro-container">
            <img src={exclamationLinesImg} alt="exclamation lines" className="exclamation-lines-icon" draggable="false"  style={{ height: "4rem" }} />
            <div className="stickies previous-intro">
              <StickyNote color="pink">
                <h4>previously i've...</h4>
                <ul>
                  <li>developed React components @ AGF Investments</li>
                  <li>built Shopify e-commerce features @ Apricotton</li>
                  <li>redesigned Canada.ca's Food Guide dashboard</li>
                </ul>
              </StickyNote>
            </div>
          </div>
        </div>
        {/* <div className="hoverable-icon-position">
          <HoverableIcon imgSrc={headphonesImg} altText="headphones" emoji="🎧" text="i have 1000+ songs saved on Spotify!" />
        </div> */}
      </div>
    </div>
  );
}

export default Home;
