import React from 'react';
import './Resume.css';

function MyResume() {
  return (
    <div className="my-resume">
      <div className="header">
      <h1>Wella Coleman</h1>
        <ul>
        <li>Address: <span className="contact-info">8807A Delridge Way SW, Seattle WA</span></li>
          <li>Email: <span className="contact-info">colemanwella@cityuniversity.edu</span></li>
          <li>Phone: <span className="contact-info">(206) 883 9544</span></li>
        </ul>
      </div>

      <div className="section">
        <h2>Education</h2>
        <div>
          <h3>Master of Science in Computer Science</h3>
          <p>City University of Seattle</p>
          <ul>
          <li>2022 - 2024</li>
          <li>GPA: 3.9/4.0</li>
          </ul>
          <h3>Bachelor of Secondary Education - Major in English and Literature
          </h3>
          <p>Pamantasan ng Lungsod ng Markina- Phillipines </p>
          <ul>
          <li>2005 - 2010</li>
          <li>GPA: 3.9/4.0</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>Skills</h2>
        <ul>
          <li>Programming Langauges:JavaScript, C#, Python, HTML5, CSS</li>
          <li>Framewroks and Libraries: React, Express.js, Node.js,</li>
          <li>Database Systems: MySQL, MongoDB</li>
          <li>Operating Systems:Windows, Linux</li>
          <li>Version Control:Git</li>
        </ul>
      </div>

      <div className="section">
        <h2>Work Experience</h2>
        <div>
          <h3> Cloud Engineer Intern </h3>
          <ul>
          <li> Company: SAW LLC</li>
          <li>2023- Present</li>
          </ul>
          <h3>Duties and Responsibilties</h3>
          <ul>
          <li>Designing, deploying, and maintaining cloud infrastructure and architecture.</li>
         <li>Implementing and managing cloud services, such as virtual machines, containers, storage, networking, and security.</li>
          <li>Automating processes and workflows using scripting languages or infrastructure-as-code tools.</li>
            <li>Developed and maintained web applications using React and Node.js</li>
          </ul>
        </div>
      </div>
      <div className="section">
        <h2>Projects</h2>
        <div>
          <ul>
          <h3>Personal Ecommerce Website</h3>
          <ul>
          <li>Developed an online order system</li>
          </ul>
          <li><a href="https://foodhubowner.com/home/">foodhubowner</a>
            </li>
          <li>2023- Present</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
  
export default MyResume;







