import React from 'react';
import './AboutUs.css';
import libbi from '../../assets/AboutUs/PFP/libbi.jpeg';
import noah from '../../assets/AboutUs/PFP/noah.jpeg';
import brett from '../../assets/AboutUs/PFP/brett.png';
import chase from '../../assets/AboutUs/PFP/chase.jpg';
import github from '../../assets/AboutUs/PFP/github.png';

export default function AboutUs() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-container_desc">
        <p>Meet the creators of Travel App.....!</p>
      </div>
      <div className="bio-container">
        <div className="bio-container_card">
          <h4>
            <a href="https://www.linkedin.com/in/libbi-dunham/" target="_blank">
              Libbi Dunham
            </a>
          </h4>
          <a href="https://github.com/Libbi-Dunham" target="_blank">
            <img className="github" src={github} alt="libbi github" />
          </a>
          <img className="bio-img" src={libbi} alt="libbi headshot" />

          <p>Libbi is a Software developer.</p>
        </div>
        <div className="bio-container_card">
          <h4>
            <a
              href="https://www.linkedin.com/in/brett-seifried/"
              target="_blank"
            >
              Brett seifried
            </a>
          </h4>
          <a href="https://github.com/BrettSeifried" target="_blank">
            <img className="github" src={github} alt="brett github" />
          </a>
          <img className="bio-img" src={brett} alt="brett headshot" />
          <p>Brett is a web developer.</p>
        </div>
        <div className="bio-container_card">
          <h4>
            <a
              href="https://www.linkedin.com/in/noahdeltorosmyth/"
              target="_blank"
            >
              Noah Smyth
            </a>
          </h4>
          <a href="https://github.com/NoahDeltoroSmyth" target="_blank">
            <img className="github" src={github} alt="noah github" />
          </a>
          <img className="bio-img" src={noah} alt="noah headshot" />
          <p>Noah is a web developer.</p>
        </div>
        <div className="bio-container_card">
          <h4>
            <a
              href="https://www.linkedin.com/in/gregory-crowder/"
              target="_blank"
            >
              Chase Crowder
            </a>
          </h4>
          <a href="https://github.com/Gcrowder93" target="_blank">
            <img className="github" src={github} alt="chase github" />
          </a>
          <img className="bio-img" src={chase} alt="chase headshot" />
          <p>Chase is a software developer.</p>
        </div>
      </div>
    </div>
  );
}
