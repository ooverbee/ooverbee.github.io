import React from 'react'

import PropTypes from 'prop-types'

import './timeline3.css'

const Timeline3 = (props) => {
  return (
    <div className="timeline3-container thq-section-padding">
      <div id="Overview" className="timeline3-max-width thq-section-max-width">
        <div className="timeline3-container01">
          <h2 className="timeline3-text thq-heading-2">{props.title1}</h2>
        </div>
        <div className="timeline3-timeline-container">
          <div className="timeline3-step1">
            <div className="timeline3-container02">
              <a
                href="https://www.samford.edu/"
                target="_blank"
                rel="noreferrer noopener"
                className="timeline3-link"
              >
                <img
                  alt={props.imageAlt1}
                  src={props.imageSrc1}
                  loading="eager"
                  className="timeline3-image"
                />
              </a>
            </div>
          </div>
          <div className="timeline3-step2">
            <div className="timeline3-container03">
              <span className="timeline3-text01 thq-body-small">
                {props.card2Content}
              </span>
              <h3 className="thq-heading-3">{props.card2Date}</h3>
            </div>
          </div>
          <div className="timeline3-step3">
            <div className="timeline3-container04">
              <a
                href="https://www.ucd.ie/"
                target="_blank"
                rel="noreferrer noopener"
                className="timeline3-link1"
              >
                <img
                  alt={props.imageAlt2}
                  src={props.imageSrc2}
                  className="timeline3-image1"
                />
              </a>
            </div>
          </div>
          <div className="timeline3-step4">
            <div className="timeline3-container05">
              <span className="timeline3-text03 thq-body-small">
                {props.card4Content}
              </span>
              <h3 className="thq-heading-3">{props.card4Date}</h3>
            </div>
          </div>
          <div className="timeline3-step5">
            <div className="timeline3-container06">
              <a
                href="https://www.ox.ac.uk/"
                target="_blank"
                rel="noreferrer noopener"
                className="timeline3-link2"
              >
                <img
                  alt={props.imageAlt}
                  src={props.imageSrc}
                  className="timeline3-image2"
                />
              </a>
            </div>
          </div>
          <div className="timeline3-step6">
            <div className="timeline3-container07">
              <span className="timeline3-text05 thq-body-small">
                {props.card6Content}
              </span>
              <h3 className="thq-heading-3">{props.card6Date}</h3>
            </div>
          </div>
          <div className="timeline3-step7">
            <div className="timeline3-container08">
              <a
                href="https://kgu.de/"
                target="_blank"
                rel="noreferrer noopener"
                className="timeline3-link3"
              >
                <img
                  alt={props.imageAlt5}
                  src={props.imageSrc5}
                  className="timeline3-image3"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="timeline3-timeline-container1">
          <div className="timeline3-step11">
            <div className="timeline3-container09">
              <div className="timeline3-progress0"></div>
              <div className="timeline3-container10"></div>
              <div className="timeline3-progress001"></div>
            </div>
            <div className="timeline3-container11">
              <h3 className="thq-heading-3">{props.card1Date}</h3>
              <span className="timeline3-text08 thq-body-small">
                {props.card1Content}
              </span>
            </div>
          </div>
          <div className="timeline3-step21">
            <div className="timeline3-container12">
              <div className="timeline3-progress002"></div>
              <div className="timeline3-container13"></div>
              <div className="timeline3-progress003"></div>
            </div>
            <div className="timeline3-container14">
              <a
                href="https://www.tn.gov/tbi.html"
                target="_blank"
                rel="noreferrer noopener"
                className="timeline3-link4"
              >
                <img
                  alt={props.imageAlt4}
                  src={props.imageSrc4}
                  className="timeline3-image4"
                />
              </a>
            </div>
          </div>
          <div className="timeline3-step31">
            <div className="timeline3-container15">
              <div className="timeline3-progress004"></div>
              <div className="timeline3-container16"></div>
              <div className="timeline3-progress005"></div>
            </div>
            <div className="timeline3-container17">
              <h3 className="thq-heading-3">{props.card3Date}</h3>
              <span className="timeline3-text10 thq-body-small">
                {props.card3Content}
              </span>
            </div>
          </div>
          <div className="timeline3-step41">
            <div className="timeline3-container18">
              <div className="timeline3-progress006"></div>
              <div className="timeline3-container19"></div>
              <div className="timeline3-progress007"></div>
            </div>
            <div className="timeline3-container20">
              <a
                href="https://www.uv.es/"
                target="_blank"
                rel="noreferrer noopener"
                className="timeline3-link5"
              >
                <img
                  alt={props.imageAlt10}
                  src={props.imageSrc10}
                  className="timeline3-image5"
                />
              </a>
            </div>
          </div>
          <div className="timeline3-step51">
            <div className="timeline3-container21">
              <div className="timeline3-progress008"></div>
              <div className="timeline3-container22"></div>
              <div className="timeline3-progress009"></div>
            </div>
            <div className="timeline3-container23">
              <h3 className="thq-heading-3">{props.card5Date}</h3>
              <span className="timeline3-text12 thq-body-small">
                {props.text2}
              </span>
            </div>
          </div>
          <div className="timeline3-step61">
            <div className="timeline3-container24">
              <div className="timeline3-progress010"></div>
              <div className="timeline3-container25"></div>
              <div className="timeline3-progress011"></div>
            </div>
            <div className="timeline3-container26">
              <a
                href="https://www.uv.es/"
                target="_blank"
                rel="noreferrer noopener"
                className="timeline3-link6"
              >
                <img
                  alt={props.imageAlt11}
                  src={props.imageSrc11}
                  className="timeline3-image6"
                />
              </a>
            </div>
          </div>
          <div className="timeline3-step71">
            <div className="timeline3-container27">
              <div className="timeline3-progress012"></div>
              <div className="timeline3-container28"></div>
              <div className="timeline3-progress013"></div>
            </div>
            <div className="timeline3-container29">
              <h3 className="thq-heading-3">{props.heading2}</h3>
              <span className="timeline3-text14 thq-body-small">
                {props.text3}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Timeline3.defaultProps = {
  card4Date: '2018',
  card2Date: '2016',
  heading2: 'Present',
  card3Date: '2017',
  imageAlt5: 'image',
  card5Content: '',
  card6Date: '2022',
  card3Content: "Awarded Master's Degree",
  card4Content: 'Began Ph.D.',
  card1Date: '2015',
  text3: 'Post-Doctoral Researcher',
  card6Content: 'Awarded Doctoral degree',
  imageSrc5: '/unnamed-200h.jpg',
  imageSrc: '/university-of-oxford-logo-1.svg',
  imageSrc10: '/screenshot%202024-06-24%20at%2013.25.23-200h.png',
  imageSrc11: '/screenshot%202024-06-24%20at%2013.25.23-200h.png',
  heading: '2020',
  imageSrc4: '/tennessee_bureau_of_investigation_seal-200h.png',
  imageAlt4: 'image',
  imageAlt10: 'image',
  card1Content: "Awarded Bachelor's degree",
  imageAlt: 'image',
  imageAlt11: 'image',
  title1: 'Overview',
  imageSrc1: '/samford-university-logo-vertical.svg',
  imageAlt2: 'image',
  imageSrc2: '/ucd_dublin-200w.png',
  card5Date: '2020',
  text2: 'International Mention',
  text1: 'Graduate Samford University',
  card2Content: 'Forensic Technician',
  imageAlt1: 'image',
}

Timeline3.propTypes = {
  card4Date: PropTypes.string,
  card2Date: PropTypes.string,
  heading2: PropTypes.string,
  card3Date: PropTypes.string,
  imageAlt5: PropTypes.string,
  card5Content: PropTypes.string,
  card6Date: PropTypes.string,
  card3Content: PropTypes.string,
  card4Content: PropTypes.string,
  card1Date: PropTypes.string,
  text3: PropTypes.string,
  card6Content: PropTypes.string,
  imageSrc5: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc10: PropTypes.string,
  imageSrc11: PropTypes.string,
  heading: PropTypes.string,
  imageSrc4: PropTypes.string,
  imageAlt4: PropTypes.string,
  imageAlt10: PropTypes.string,
  card1Content: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt11: PropTypes.string,
  title1: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageSrc2: PropTypes.string,
  card5Date: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  card2Content: PropTypes.string,
  imageAlt1: PropTypes.string,
}

export default Timeline3
