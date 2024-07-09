import React from 'react'

import PropTypes from 'prop-types'

import './stats3.css'

const Stats3 = (props) => {
  return (
    <div id="Skills" className="stats3-container thq-section-padding">
      <div className="stats3-max-width thq-section-max-width">
        <div className="stats3-container1">
          <h2 className="thq-heading-2 stats3-title">{props.heading1}</h2>
        </div>
        <div className="stats3-container2">
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="stats3-image"
          />
        </div>
      </div>
    </div>
  )
}

Stats3.defaultProps = {
  heading1: 'Skills',
  imageAlt1: 'image',
  stat3Description: 'Customer satisfaction',
  stat2: '44%',
  stat1: '99%',
  stat3: '99%',
  stat2Description: 'Active users',
  imageAlt: 'image',
  stat4: '44%',
  stat1Description: 'Customer satisfaction',
  imageSrc1: '/languages-1200w.jpg',
  stat4Description: 'Active users',
  imageSrc: '7ab48a6e-6e60-476e-8780-9a4a4e918e74',
}

Stats3.propTypes = {
  heading1: PropTypes.string,
  imageAlt1: PropTypes.string,
  stat3Description: PropTypes.string,
  stat2: PropTypes.string,
  stat1: PropTypes.string,
  stat3: PropTypes.string,
  stat2Description: PropTypes.string,
  imageAlt: PropTypes.string,
  stat4: PropTypes.string,
  stat1Description: PropTypes.string,
  imageSrc1: PropTypes.string,
  stat4Description: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Stats3
