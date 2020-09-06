import React from 'react';
import './App.css';
import './css/Navbar.css'
import gmail from './images/gmail.svg'
import behance from './images/behance.svg'
import linkedin from './images/linkedin.svg'
import last from './images/last.svg'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import Landingpage from './components/Landingpage/Landingpage';
import Contact from './components/Contact/Contact';
// import Projects from './components/Projects/Breweries';
import Logo from './images/logo.svg'
import Thechild from './components/Projects/Thechild';
import Payport from './components/Projects/Payport';
import Atunlo from './components/Projects/Atunlo';
import Breweries from './components/Projects/Breweries';
import Workycappy from './components/Projects/Workcappy';
import { useState } from 'react';
import Theproject from './components/Theproject/Theproject';


function App() {

  const [isOpen, setisOpen] = useState(true)

  const closeNav = () => {

    if( isOpen === true ){
      setisOpen(
        Opennav => Opennav = false
      )
    }
    else{
      setisOpen(
        Opennav => Opennav = true
      )
    }
  }

  return (
    <div className="App">
      <div id="the_navbar" className="container-fluid">
        <div className="container mx-auto">
          <nav className="container mx-auto desktop__navbar px-6 lg:px-0">
            <div className="logo">
              <img src={Logo} alt="logo" className="w-1/12 mx-4" />
              <p className="nav__logo text-xl lg:text-3xl">Unique<span>Ideas</span>.</p>
            </div>
            <ul className="desktop__nav__list">
              <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
              <li><NavLink activeClassName="active"  to={{ pathname: "/projects" }}>Projects </NavLink></li>
              <li><NavLink activeClassName="active" to="/contact">Contact Me </NavLink></li>
            </ul>
            <label htmlFor="menu-toggle" className="block lg:hidden">
              <div id="openButton" className="mobile__hamburger" onClick={closeNav}>
                <div></div>
              </div>
            </label>
          </nav>
            {/* <input type="checkbox" id="menu-toggle" className="hidden" /> */}
          <div id="myModal" className={isOpen ? "hidden": "mobile__nav__bg bg-opacity-50 flex"}>

            <div className="mobile__nav">
              <div htmlFor="menu-toggle" id="closeBtn" className="closeBtn">
                <div></div>
              </div>
              <ul>
                <li htmlFor="menu-toggle" onClick={closeNav}><NavLink htmlFor="menu-toggle" activeClassName="active" exact to="/">Home</NavLink></li>
                <li htmlFor="menu-toggle" onClick={closeNav}><NavLink htmlFor="menu-toggle" activeClassName="active" to={{ pathname: "/projects" }}>Projects </NavLink></li>
                <li htmlFor="menu-toggle" onClick={closeNav}><NavLink htmlFor="menu-toggle" activeClassName="active" to="/contact">Contact Me </NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="main-content">
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/projects" component={Theproject} />
          <Route exact path="/projects/thechild" component={Thechild} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects/workycappy" component={Workycappy} />
          <Route exact path="/projects/payport" component={Payport} />
          <Route exact path="/projects/atunlo" component={Atunlo} />
          <Route exact path="/projects/breweries" component={Breweries} />
          <Redirect to="/" />
        </Switch>
      </div>
      <div>
        <footer className="text-center">
          <div className="footer_content px-8">
            <h2 className="yellow text-2xl">Currently Open to Opportunities</h2>
            <p className="py-6"> I’m currently open to Full time (On-site or Remote), Freelance Opportunities</p>
            <section className="flex my-4 justify-center">
              <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=Uniqueideas85@gmail.com"><img src={gmail} alt="gmail logo" /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ukandu-ifeoma-130b14121/"><img src={linkedin} alt="Likendin logo" /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/Iphie2591c53"><img src={behance} alt="behance logo" /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://uniqueideas.disha.page/"><img src={last} alt="disha logo" /></a>
            </section>
          </div>

          <div className="">
            <p>Email me: <a target="_blank" rel="noopener noreferrer" className="font-bold"
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=Uniqueideas85@gmail.com">
              Uniqueideas85@gmail.com</a></p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
