import React from 'react';
import './App.css';
import './css/Navbar.css'
import gmail from './images/gmail.svg'
import behance from './images/behance.svg'
import linkedin from './images/linkedin.svg'
import last from './images/last.svg'
import { Link, NavLink, Route, Switch, Redirect } from 'react-router-dom';
import Landingpage from './components/Landingpage/Landingpage';
import Contact from './components/Contact/Contact';
// import Projects from './components/Projects/Breweries';
import Logo from './images/logo.svg'
import Thechild from './components/Projects/Thechild';
import Payport from './components/Projects/Payport';
import Atunlo from './components/Projects/Atunlo';
import Breweries from './components/Projects/Breweries';
import Workycappy from './components/Projects/Workcappy';


function App() {
  return (
    <div className="App">
      <div id="the_navbar" className="container-fluid">
        <div className="container mx-auto">
          <nav className="container mx-auto desktop__navbar px-6 lg:px-0">
            <div className="logo">
              <img src={Logo} alt="logo" className="w-1/6 mx-4" />
              <p className="nav__logo">Unique<span>Ideas</span>.</p>
            </div>
            <ul className="desktop__nav__list">
              <li activeClassName="active" ><NavLink exact to="/">Home</NavLink></li>
              <li activeClassName="active"><NavLink to={{pathname:"/projects"}}>Projects </NavLink></li>
              <li activeClassName="active"><NavLink to="/contact">Contact Me </NavLink></li>
            </ul>
            <div id="openButton" className="mobile__hamburger">
              <div></div>
            </div>
          </nav>
          <div id="myModal" className="mobile__nav__bg">
            <div className="mobile__nav">
              <div id="closeBtn" className="closeBtn">
                <div></div>
              </div>
              <ul>
                <li><Link to="/" activeClassName="active">Home</Link></li>
                <li><Link to="/projects">Projetcs </Link></li>
                <li><Link to="/contact">Contact Me </Link></li>
              </ul>
            </div>
          </div>
        </div>
        </div>
        
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={Landingpage} />
            {/* <Route exact path="/projects" component={Thechild} /> */}
            <Route exact path="/thechild" component={Thechild} />
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
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob"><img src={gmail} alt="gmail logo" /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob"><img src={linkedin} alt="Likendin logo" /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob"><img src={behance} alt="behance logo" /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob"><img src={last} alt="email logo" /></a>
              </section>
            </div>

            <div className="">
              <p>Email me: <b>Uniqueideas85@gmail.com</b></p>
            </div>
          </footer>
        </div>
      </div>
  );
}

export default App;
