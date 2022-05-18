import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'
import { Redirect, Route, Switch, useLocation} from 'react-router-dom'
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Particles from 'react-particles-js';
import {AnimatePresence} from 'framer-motion'


function App() {

  const location = useLocation()

  return (
    
    <div className="App">

      <div className='prticle_div'>

      <Particles 
         params={{
          "particles": {
              "number": {
                  "value": 50
              },
              "size": {
                  "value": 3
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "repulse"
                  }
              }
          }
      }}
      />

</div> 
      <div className="container app__container">
        <div className="row app__row">
          <div className="col-lg-3">
              <Sidebar/> 
          </div>
          <div className="col-lg-9 app_main_container">
              <Navbar />
              <AnimatePresence exitBeforeEnter>
                <Switch Location={location} key={location.key}>
                  <Route exact path="/">
                      <Resume />
                  </Route>
                  <Route path="/about">
                      <About />
                  </Route>
                  <Route path="/projects">
                      <Projects />
                  </Route>
                  <Route>
                    <Redirect render={() => <Redirect to="/" />}/>
                  </Route>
                </Switch>
              </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
