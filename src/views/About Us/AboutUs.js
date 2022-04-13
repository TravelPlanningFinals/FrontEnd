import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';
import linkedin from '../../assets/AboutUs/linkedin.png';
import libbi_linkedin from '../../assets/AboutUs/PFP/libbi_linkedin.jpeg';
import noah_linkedin from '../../assets/AboutUs/PFP/noah_linkedin.jpeg';
import brett from '../../assets/AboutUs/PFP/brett.png';

export default function AboutUs() {
  return (
    <body>
      <div className="aboutus">
        <br></br>
        <h1>About the Creators</h1>
        <br></br>
        <Link
          to={{ pathname: 'https://www.linkedin.com/in/libbi-dunham/' }}
          target="_blank"
        >
          <div className="us">
            <img src={libbi_linkedin} className="pfp"></img>
            <img src={linkedin} className="linkedin"></img>
          </div>
          <h2>Libbi</h2>
        </Link>
        <p>
          insert bio here, drop the linked in links in the chat when we preset
        </p>
        <Link
          to={{ pathname: 'https://www.linkedin.com/in/brett-seifried/' }}
          target="_blank"
        >
          <div className="us">
            <img src={brett} className="pfp"></img>
            <img src={linkedin} className="linkedin"></img>
          </div>
          <h2>Brett</h2>
        </Link>
        <p>
          insert bio here, drop the linked in links in the chat when we preset
        </p>
        <Link
          to={{ pathname: 'https://www.linkedin.com/in/noahdeltorosmyth/' }}
          target="_blank"
        >
          <div className="us">
            <img src={noah_linkedin} className="pfp"></img>
            <img src={linkedin} className="linkedin"></img>
          </div>
          <h2>Noah</h2>
        </Link>
        <p>
          insert bio here, drop the linked in links in the chat when we preset
        </p>
        <Link
          to={{ pathname: 'https://www.linkedin.com/in/gregory-crowder/' }}
          target="_blank"
        >
          <div className="us">
            {/* <img src={} className="pfp"></img> */}
            <img src={linkedin} className="linkedin"></img>
          </div>
          <h2>Chase</h2>
        </Link>
        <p>
          insert bio here, drop the linked in links in the chat when we preset
        </p>
      </div>
    </body>
  );
}
