import React from 'react'

import PropTypes from 'prop-types'

import './timeline71.css'

const Timeline71 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="timeline71-max-width thq-section-max-width">
        <div className="timeline71-container1">
          <h2 className="timeline71-text thq-heading-2">{props.title1}</h2>
        </div>
        <div className="timeline71-timeline-container">
          <div className="timeline71-step1">
            <div className="timeline71-container2">
              <div className="timeline71-container3"></div>
              <div className="timeline71-progress0"></div>
            </div>
            <div className="timeline71-container4">
              <h3 className="timeline71-text1 thq-heading-3">{props.date1}</h3>
              <div className="timeline71-container5">
                <h3 className="timeline71-text2 thq-heading-3">
                  {props.card1Heading}
                </h3>
                <span className="timeline71-text3 thq-body-small">
                  {props.text2}
                </span>
                <svg viewBox="0 0 1024 1024" className="timeline71-icon">
                  <path
                    d="M713.771 182.229c-16.597-16.683-43.563-16.768-60.331-0.171-4.437 4.437-7.509 9.685-9.6 15.147-35.499 74.069-74.581 115.84-123.904 140.501-55.339 27.307-118.869 46.293-221.269 46.293-5.547 0-11.093 1.067-16.299 3.243-10.453 4.352-18.731 12.672-23.083 23.083-4.309 10.411-4.309 22.187 0 32.597 2.176 5.248 5.291 9.984 9.259 13.909l138.368 138.368-193.579 258.133 258.133-193.579 138.325 138.325c3.925 4.011 8.661 7.083 13.909 9.259 5.205 2.176 10.752 3.328 16.299 3.328s11.093-1.152 16.299-3.328c10.453-4.352 18.773-12.587 23.083-23.083 2.176-5.163 3.285-10.752 3.285-16.256 0-102.4 18.944-165.931 46.208-220.416 24.619-49.323 66.389-88.405 140.501-123.904 5.504-2.091 10.709-5.163 15.104-9.6 16.597-16.768 16.512-43.733-0.171-60.331l-170.539-171.52z"
                    className=""
                  ></path>
                </svg>
                <span className="timeline71-text4 thq-body-small"></span>
              </div>
              <span className="timeline71-text5 thq-body-small">
                {props.text8}
              </span>
              <span className="timeline71-text6 thq-body-small">
                {props.text5}
              </span>
              <a
                href="https://doi.org/10.3390/ijms25115658"
                target="_blank"
                rel="noreferrer noopener"
                className="timeline71-link"
              >
                <h3 className="timeline71-heading2 thq-heading-3">
                  {props.heading2}
                </h3>
              </a>
              <p className="timeline71-content2 thq-body-small">
                {props.content2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Timeline71.defaultProps = {
  heading1: 'Forensic Technician,',
  card1Heading: 'Post-Doctoral Researcher,',
  content8: 'Ecological Evolution (2020)',
  text7:
    'Conducted drug detection immunoassays of blood evidence from criminal investigations using the ELISA technique.',
  content4: 'Molecular Therapeutics Nucleic Acids (2022)',
  text8: 'AG Brieger Biomedical Research Laboratory',
  rootClassName: '',
  content2: 'International Journal of Molecular Science (2024)',
  text2: 'Universitätsklinikum Frankfurt',
  title1: 'Current Position',
  date2: 'March - August 2022',
  heading92:
    'Testing PCR amplification from elephant dung using silica-dried swabs.',
  heading6:
    'Therapeutic Potential of AntagomiR-23b for Treating Myotonic Dystrophy.',
  heading8:
    'Investigating a simplified method for noninvasive genetic sampling in East African mammals using silica dried scat swabs.',
  content5: 'Molecular Therapeutics Nucleic Acids (2018)',
  content3: 'Pharmaceutics (2023)',
  text9: 'AG Krause Lab, Institute for Biochemistry II',
  content6: 'Molecular Therapeutics Nucleic Acids (2020)',
  text5:
    'Using bioinformatic tools to identify the molecular mechanisms responsible for the development of colon cancer tumors in Lynch syndrome patients who are deficient in the DNA mismatch repair (MMR) system.',
  heading11: 'Publications',
  heading9: 'MicroRNA-based therapeutic perspectives in Myotonic dystrophy.',
  heading2:
    'Erk Inhibition as a Promising Therapeutic Strategy for High IL-8-Secreting and Low SPTAN1-Expressing Colorectal Cancer.',
  date3: 'September 2015 - August 2016',
  text4: 'Nashville, TN, USA',
  content91: 'International Journal of Molecular Sciences (2019)',
  content92: 'Pachyderm (2018)',
  text3: 'Tennessee Bureau of Investigation',
  heading91: 'RNA-mediated therapies in myotonic dystrophy.',
  heading3:
    'BlockmiR AONs as Site-Specific Therapeutic MBNL Modulation in Myotonic Dystrophy 2D and 3D Muscle Cells and HSALR Mice.',
  content9: 'Drug Discovery Today (2018)',
  date1: 'September 2022 - Present',
  text10: 'Toxicology Laboratory',
  text6:
    'Explored drug development by targeting disease-implicated proteins in leukemia and other cancers.',
  heading4:
    'Proof of concept of peptide-linked blockmiR induced MBNL functional rescue in Myotonic Dystrophy Type 1 mouse model.',
  heading5:
    'Preclinical characterization of antagomiR-218 as a potential treatment for Myotonic Dystrophy.',
}

Timeline71.propTypes = {
  heading1: PropTypes.string,
  card1Heading: PropTypes.string,
  content8: PropTypes.string,
  text7: PropTypes.string,
  content4: PropTypes.string,
  text8: PropTypes.string,
  rootClassName: PropTypes.string,
  content2: PropTypes.string,
  text2: PropTypes.string,
  title1: PropTypes.string,
  date2: PropTypes.string,
  heading92: PropTypes.string,
  heading6: PropTypes.string,
  heading8: PropTypes.string,
  content5: PropTypes.string,
  content3: PropTypes.string,
  text9: PropTypes.string,
  content6: PropTypes.string,
  text5: PropTypes.string,
  heading11: PropTypes.string,
  heading9: PropTypes.string,
  heading2: PropTypes.string,
  date3: PropTypes.string,
  text4: PropTypes.string,
  content91: PropTypes.string,
  content92: PropTypes.string,
  text3: PropTypes.string,
  heading91: PropTypes.string,
  heading3: PropTypes.string,
  content9: PropTypes.string,
  date1: PropTypes.string,
  text10: PropTypes.string,
  text6: PropTypes.string,
  heading4: PropTypes.string,
  heading5: PropTypes.string,
}

export default Timeline71
