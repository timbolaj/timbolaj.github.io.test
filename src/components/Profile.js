import React, { useState } from 'react';
import picture from '../images/profile_pic.jpg';
import '../Styles/Profile.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Summary from './Profile-components/Summary';
import Skills from './Profile-components/Skills';
import Button from '@material-ui/core/Button';
import ProProjects from './Profile-components/ProProjects';

const SUMMARY = 'Summary';
const SKILLS = 'Skills';
const RESUME = 'Resume';
const PROFESSIONALPROJECTS = 'ProfessionalProjects';

export default function Profile() {

  const [mode, setMode] = useState(SUMMARY);

  return (
    <div id="profile" className="profile d-flex vertical-center">
      <div className="content-container">
        <div className="profile-picture">
          <img src={picture} alt="profile-pic"></img>
        </div>

        <br className="photo-separator"></br>

        <div className={"info-container " + (mode === RESUME ? 'resume-mode' : '')}>

          <div className="profile-components">
            {mode === SUMMARY && <Summary />}
            {mode === SKILLS && <Skills />}
            {mode === PROFESSIONALPROJECTS && <ProProjects />}
          </div>
    
          <div className="modes">
            <Button
              variant="contained"
              onClick={() => setMode(SUMMARY)}
            >
              Summary
            </Button>

            <div className="nbsp">&nbsp;</div>

            <Button
              variant="contained"
              onClick={() => setMode(SKILLS)}
            >
                Skills
            </Button>
              
            <div className="nbsp">&nbsp;</div>

            <Button
              variant="contained"
              onClick={() => setMode(PROFESSIONALPROJECTS)}
            >
              Professional Projects
            </Button>

            <div className="nbsp">&nbsp;</div>

            <Button
                variant="contained"
              >
                <a href="https://resume.creddle.io/resume/1g0nfcz2ism" target="_blank" rel="noreferrer noopener">Resume</a>
            </Button>
                
          </div>
        </div>        
      </div>
    </div>
  )
}