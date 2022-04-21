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
        <p>Meet the creators of Travel App!</p>
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

          <p>
            {' '}
            Libbi is a detailed oriented critical thinking Software Developer. I
            have a background in customer service and administration which has
            given me the skills with team collaboration, problem solving,
            communication, and leadership. My next Software Developer role will
            allow me to use these tools. I am a passionate learner, who enjoys
            learning new technical knowledge.
          </p>
        </div>
        <div className="bio-container_card">
          <h4>
            <a
              href="https://www.linkedin.com/in/brett-seifried/"
              target="_blank"
            >
              Brett Seifried
            </a>
          </h4>
          <a href="https://github.com/BrettSeifried" target="_blank">
            <img className="github" src={github} alt="brett github" />
          </a>
          <img className="bio-img" src={brett} alt="brett headshot" />
          <p>
            Brett is a Father, Veteran, Software Developer, and holds a
            Bachelor's Degree. I truly enjoy the challenge of developing teams,
            software, and people to be their best. I have a wide variety of
            experience as a Supply Chain analyst in the Geothermal industry,
            Running an eSports program, and now have a deep interest in Web3.
            Don't be afraid to connect and say hello!
          </p>
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
          <p>
            Noah is a full-stack software developer that is a strong and
            supportive team player with a keen eye for design and accuracy
            driven by the unknown. At heart, I am an artist of functionality
            that is welcoming to challenges that strengthen my ability to write
            DRY code. Feel free to reach out and let's create something new!
          </p>
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
          <p>
            Chase is a passionate, strategic, and hard-working with everything
            in life. Dedicated to developing my career with tech, front and
            back-end. I enjoy collaborative environments that require creative
            and unique ideas and skill sets. I strive in leaving anything I work
            on, better than it was. Improving the community with my work and
            leaving an impact is a goal I hope to achieve. Always driven and
            fully committed until the job at hand is finished, no matter what.
          </p>
        </div>
      </div>
    </div>
  );
}
