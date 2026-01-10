import './Home.css';

import Polaroid from '../../components/polaroid/Polaroid';
import StickyNote from '../../components/sticky-notes/StickyNote';
import HoverableIcon from '../../components/hoverable-icon/HoverableIcon';

import profileImg from '../../assets/images/profile-picture.jpg';
import headphonesImg from '../../assets/images/headphones.png';

const hoverableIcons = [
  {
    imgSrc: headphonesImg, altText:"headphones", text:"🎧 i have 1000+ songs saved on Spotify!"
  }
]

function Home() {
  return (
    <div>
      <div>
        <h1 className="heading">hey, i'm samantha!</h1>
        <h2 className="subheading"><mark>full-stack developer</mark> & <mark>systems design engineering</mark> student @ UWaterloo</h2>
      </div>
      <div className="home-container">
        <Polaroid imgSrc={profileImg} altText="profile picture" height="27rem" caption="welcome to my website :)" paperclip={true} star={true} tilt={true} />
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
        <HoverableIcon icons={hoverableIcons} />
      </div>
    </div>
  );
}

export default Home;
