import React from 'react'

import { Helmet } from 'react-helmet'

import Timeline3 from '../components/timeline3'
import Timeline7 from '../components/timeline7'
import Features7 from '../components/features7'
import ContentList2 from '../components/content-list2'
import CTA14 from '../components/cta14'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Portfolio Page</title>
        <meta property="og:title" content="Portfolio Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <div className="home-links-container">
            <a href="#Overview" className="home-link">
              Overview
            </a>
            <a href="#Employment" className="home-link1">
              Employment
            </a>
            <a href="#Education" className="home-link2">
              Education
            </a>
            <a href="#Publications" className="home-link3">
              Publications
            </a>
            <a href="#Digital Portfolio" className="home-link4">
              Digital Portfolio
            </a>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-container1">
              <span className="Card-Heading home-heading">Logo</span>
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container1">
              <span className="home-link5 Navbar-Link">About</span>
              <span className="home-link6 Navbar-Link">Experience</span>
              <span className="home-link7 Navbar-Link">Portofolio</span>
              <span className="Navbar-Link">Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div className="home-section-separator01"></div>
      <div className="home-container2">
        <div className="home-hero">
          <div className="home-hero-text-container">
            <h1 className="home-heading1">Curriculum Vitae</h1>
            <span className="home-text">Sarah J. Overby, Ph.D.</span>
            <span className="home-text01">
              <span>
                Originally from
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text03">Nashville, TN</span>
              <span>, Sarah </span>
              <span>has been studying and working in Europe for the </span>
              <span>
                past seven years specializing in
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text07">bioinformatics</span>
              <span> </span>
              <span>
                and experimental
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text10">molecular genetics</span>
              <span>
                . Sarah is passionate
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                about the impact of large-scale omics data on improvements
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                to
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text14">personalized medicine</span>
              <span className="home-text15">.</span>
            </span>
          </div>
        </div>
      </div>
      <Timeline3></Timeline3>
      <div className="home-section-separator02"></div>
      <div className="home-section-separator03"></div>
      <div className="home-section-separator04"></div>
      <Timeline7></Timeline7>
      <div className="home-section-separator05"></div>
      <div className="home-section-separator06"></div>
      <div className="home-section-separator07"></div>
      <Features7></Features7>
      <div className="home-section-separator08"></div>
      <div className="home-section-separator09"></div>
      <div className="home-section-separator10"></div>
      <ContentList2></ContentList2>
      <div className="home-section-separator11"></div>
      <div className="home-section-separator12"></div>
      <div className="home-section-separator13"></div>
      <CTA14></CTA14>
      <div className="home-section-separator14"></div>
      <div className="home-section-separator15"></div>
      <div className="home-section-separator16"></div>
      <div className="home-section-separator17"></div>
      <div className="home-section-separator18"></div>
      <div className="home-section-separator19"></div>
      <div className="home-footer-container">
        <div className="home-footer">
          <img
            alt="image"
            src="/horizontal-line-png-images-400w.png"
            className="home-image"
          />
          <span className="home-text16">
            Curriculum Vitae - Sarah J. Overby - 2024
          </span>
          <img
            alt="image"
            src="/horizontal-line-png-images-400w.png"
            className="home-image1"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
