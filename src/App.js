import React from 'react';
import NavComp from './component/NavComp';
import About from './component/AboutDir/About'
import Experience from './component/ExperienceDir/Experience'
import Skills from './component/SkillsDir/Skills'
import Education from './component/Education';
import Interest from './component/Interest'
import Award from './component/Award'
import ScrollToTop from 'react-scroll-up'
import ScrollButton from 'react-scroll-button'

function App() {
  return (    
        <div className="App">
            {/* <!-- Navigation--> */}
            <NavComp></NavComp>
            <div class="container-fluid p-0">
                <About></About>
                <hr class="m-0" />
                <Experience></Experience>
                <hr class="m-0" />
                <Education></Education>
                <hr class="m-0" />
                <Skills></Skills> 
                <hr class="m-0" />
                <Interest></Interest>                                       
                <hr class="m-0" />
                <Award></Award>
                <hr class="m-0" />
            </div>
            <ScrollToTop showUnder={160} smooth={true}>
              <ScrollButton 
                  behavior={'smooth'} 
                  buttonBackgroundColor={'red'}
                  iconType={'arrow-up'}
                  style= {{fontSize: '24px'}}
              />    
            </ScrollToTop>
        </div>    
  );
}

export default App;
