import React from 'react';
import '../css/main.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello 👋</h1>
        <h2>I am <span className='name'>Andrew Castillo</span>, I'm a full-stack software engineer passionate on building functional interfaces and useful products through critical thinking and collaboration &#129302;</h2>
        <h3>Get in touch with me &#128073; <a href='https://www.linkedin.com/in/andrew-castillo-9b69a4140/'>LinkedIn</a></h3>
      </header>

      <section className="section_background">
        <div className="section_title">Background</div>
        <div className="section_content">
          <p>I am a self-taught developer, graduating a rigorous six-month long bootcamp, requiring not only determination but also the ability to critically think and problem solve in order to grow as a developer, along with online courses.</p>
          <p>My communication and problem solving skills allow me to be a valuable asset to any team that I am a part of. I provide the essentials when it comes to group thinking and finding the best solutions to the puzzle of making websites functional and appealing.</p>
          <p>If I'm not behind my keyboard typing up a storm, I'm usually thinking of new Magic the Gathering decks to brew, trying to further my learning in Japanese and German, or taking a breather taking in everything with my cat.</p>
        </div>
      </section>

      <section className="section_skills">
        <div className="section_title">Skills</div>
        <div className="section_content">
          <div className="skills">
            <div className='skills_category'>
              <div className="skills_label">Languages</div>
              <ul>
                <li className='skills_category_item'>JavaScript (ES6)</li>
                <li className='skills_category_item'>HTML</li>
                <li className='skills_category_item'>CSS/SCSS</li>
                <li className='skills_category_item'>Python</li>
                <li className='skills_category_item'>SQL</li>
              </ul>
            </div>

            <div className="skills_category">
              <div className="skills_label">Frameworks</div>
              <ul>
                <li className="skills_category_item">React</li>
                <li className="skills_category_item">NodeJS</li>
                <li className="skills_category_item">Express</li>
              </ul>
            </div>

            <div className="skills_category">
              <div className="skills_label">Tools</div>
              <ul>
                <li className="skills_category_item">Git & Github</li>
                <li className="skills_category_item">Postman</li>
                <li className="skills_category_item">Insomnia</li>
                <li className="skills_category_item">Bash</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <section className='featured_project'>
        <div className='section_title'>Featured Projects</div>
        <div className='section_content'>
          <div className='project familypromise'>
            <figure className='project_picture'>
              <a href='https://github.com/Alkaede/family-promise-service-tracker-fe-a' target='_blank' rel='noopener noreferrer'>
                <img src='https://i.imgur.com/0nkznbE.png' alt='laptop and phone housing showing the website' />
              </a>
            </figure>
            <figcaption className='project_caption'>
              <div className="project_name">Family Promise</div>
              <p>Family Promise is a non-profit organization that allows communities to develop comprehensive, holistic solutions for families facing homelessness.
                <br />
                <a href='https://github.com/Alkaede/family-promise-service-tracker-fe-a' target='_blank' rel='noopener noreferrer' className='link'>Github</a>
              </p>
            </figcaption>
          </div>
        </div>

        <div className='section_content'>
          <div className="project waterplants">
            <figure className='project_picture'>
              <a href="https://github.com/Team162-Build-Week-Water-My-Plants/front-end" target='_blank' rel='noopener noreferrer'>
                <img src='https://i.imgur.com/2ejQnvD.png' alt='laptop and phone housing showing the website' />
              </a>
            </figure>
            <figcaption className='project_caption'>
              <div className="project_name">Water Your Plants</div>
              <p>Keep track of your plants and all their specific watering needs. Water Your Plants allows a user to track various plants and freely remove, add, or update entries.
                <br />
                <div className="links">
                  <a href="https://github.com/Team162-Build-Week-Water-My-Plants/front-end" target='_blank' rel='noopener noreferrer' className="link">Github</a>
                  <a href='https://water-your-plants.vercel.app/' target='_blank' rel='noopener noreferrer' className="link">Website</a>
                </div>
              </p>
            </figcaption>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
