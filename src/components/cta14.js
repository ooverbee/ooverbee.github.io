import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './cta14.css'

const CTA14 = (props) => {
  return (
    <div id="Digital Portfolio" className="cta14-container thq-section-padding">
      <div className="cta14-max-width thq-section-max-width">
        <div className="cta14-column">
          <div className="cta14-content">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <div className="cta14-container1">
              <p className="cta14-text1 thq-body-large">{props.content1}</p>
              <div className="cta14-container2">
                <div className="cta14-container3">
                  <Script
                    html={`<p align="center"><iframe height="400" width="100%" src="https://ooverbee.shinyapps.io/GEO_Omnibus/"> </iframe></p>`}
                  ></Script>
                </div>
              </div>
              <p className="cta14-text2 thq-body-large">{props.text}</p>
              <div className="cta14-container4">
                <div className="cta14-container5">
                  <Script
                    html={`<p align="center"><iframe height="400" width="100%" src="https://ooverbee.shinyapps.io/AnonymizedMicroarrayAnalysis/"> </iframe></p>`}
                  ></Script>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA14.defaultProps = {
  content1: 'GEO Omnibus Browser',
  text: 'Nanostring miRNA Microarray Browser',
  heading1: 'Digital Portfolio',
}

CTA14.propTypes = {
  content1: PropTypes.string,
  text: PropTypes.string,
  heading1: PropTypes.string,
}

export default CTA14
