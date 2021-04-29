import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import login from './views/login/login'
import main from './views/main/main'
import {CSSTransition} from 'react-transition-group'
import './App.css';

function App() {
  return(
    <Router basename="/echo">
          <div className="entryWrap">
              <CSSTransition
                classNames="fade"
                timeout={1000}
              >
                <Switch>
                  <Route path="/login" component={login} exact/>
                  <Route path="/main" component={main}/>
                </Switch>
              </CSSTransition>
          </div>
      </Router>
  )
}

export default App;
