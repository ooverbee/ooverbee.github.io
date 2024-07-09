import React from 'react'

import { Helmet } from 'react-helmet'

import Timeline3 from '../components/timeline3'
import Timeline71 from '../components/timeline71'
import ContentList2 from '../components/content-list2'
import './home2.css'

const Home2 = (props) => {
  return (
    <div className="home2-container">
      <Helmet>
        <title>Home2 - Portfolio Page</title>
        <meta property="og:title" content="Home2 - Portfolio Page" />
      </Helmet>
      <div className="home2-navbar">
        <div className="home2-links-container">
          <span className="home2-link Navbar-Link">Overview</span>
          <span className="home2-link01 Navbar-Link">Employment</span>
          <span className="home2-link02 Navbar-Link">Education</span>
          <span className="home2-link03 Navbar-Link">Publications</span>
          <span className="home2-link04 Navbar-Link">Digital Portfolio</span>
          <span className="home2-link05 Navbar-Link">Skills</span>
        </div>
        <div data-role="BurgerMenu" className="home2-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home2-icon">
            <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="home2-mobile-menu">
          <div className="home2-container1">
            <span className="Card-Heading home2-heading">Logo</span>
            <div data-role="CloseMobileMenu" className="home2-close-menu">
              <svg viewBox="0 0 1024 1024" className="home2-icon2">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="home2-links-container1">
            <span className="home2-link06 Navbar-Link">About</span>
            <span className="home2-link07 Navbar-Link">Experience</span>
            <span className="home2-link08 Navbar-Link">Portofolio</span>
            <span className="Navbar-Link">Contact</span>
          </div>
        </div>
      </div>
      <div className="home2-container2">
        <div className="home2-hero">
          <div className="home2-hero-text-container">
            <h1 className="home2-heading1">Curriculum Vitae</h1>
            <span className="home2-text">Sarah J. Overby, Ph.D.</span>
          </div>
          <img
            alt="image"
            src="/screen%20shot%202020-07-30%20at%2012.26.16%20pm-400h.jpg"
            className="home2-image"
          />
        </div>
      </div>
      <Timeline3></Timeline3>
      <Timeline71 rootClassName="timeline71-root-class-name"></Timeline71>
      <ContentList2></ContentList2>
      <div className="home2-footer">
        <span className="home2-text1">Curriculum Vitae - Sarah J. Overby</span>
      </div>
    </div>
  )
}

export default Home2
