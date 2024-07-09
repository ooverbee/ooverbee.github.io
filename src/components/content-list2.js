import React from 'react'

import PropTypes from 'prop-types'

import './content-list2.css'

const ContentList2 = (props) => {
  return (
    <div
      id="Publications"
      className="content-list2-container thq-section-padding"
    >
      <div className="content-list2-max-width thq-flex-column thq-section-max-width">
        <div className="content-list2-content thq-flex-column">
          <ul>
            <li className="content-list2-li thq-flex-column list-item">
              <h2 className="content-list2-heading1 thq-heading-2">
                {props.heading1}
              </h2>
              <ul className="content-list2-ul1 thq-flex-column">
                <li className="content-list2-li01 list-item">
                  <a
                    href="https://doi.org/10.3390/ijms25115658"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <h3 className="content-list2-heading2 thq-heading-3">
                      {props.heading2}
                    </h3>
                  </a>
                  <p className="content-list2-content2 thq-body-small">
                    {props.content2}
                  </p>
                </li>
                <li className="content-list2-li02 list-item">
                  <a
                    href="https://doi.org/10.3390/pharmaceutics15041118"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <h3 className="content-list2-heading3 thq-heading-3">
                      {props.heading3}
                    </h3>
                  </a>
                  <p className="content-list2-content3 thq-body-small">
                    {props.content3}
                  </p>
                </li>
                <li className="content-list2-li03 list-item">
                  <a
                    href="https://doi.org/10.1016%2Fj.omtn.2022.02.003"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <h3 className="content-list2-heading4 thq-heading-3">
                      {props.heading4}
                    </h3>
                  </a>
                  <p className="content-list2-content4 thq-body-small">
                    {props.content4}
                  </p>
                </li>
                <li className="content-list2-li04 list-item">
                  <a
                    href="https://doi.org/10.1016/j.omtn.2021.07.017"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <h3 className="content-list2-heading5 thq-heading-3">
                      {props.heading5}
                    </h3>
                  </a>
                  <p className="content-list2-content5 thq-body-small">
                    {props.content5}
                  </p>
                </li>
                <li className="content-list2-li05 list-item">
                  <a
                    href="https://doi.org/10.1016/j.omtn.2020.07.021"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <h3 className="content-list2-heading6 thq-heading-3">
                      {props.heading6}
                    </h3>
                  </a>
                  <p className="content-list2-content6 thq-body-small">
                    {props.content6}
                  </p>
                </li>
                <li className="content-list2-li06 list-item">
                  <a
                    href="https://doi.org/10.1002/ece3.6115"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <h3 className="content-list2-heading8 thq-heading-3">
                      {props.heading8}
                    </h3>
                  </a>
                  <p className="content-list2-content8 thq-body-small">
                    {props.content8}
                  </p>
                </li>
                <li className="content-list2-li07 list-item">
                  <a
                    href="https://doi.org/10.3390%2Fijms20225600"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <h3 className="content-list2-heading9 thq-heading-3">
                      {props.heading9}
                    </h3>
                  </a>
                  <p className="content-list2-content9 thq-body-small">
                    {props.content91}
                  </p>
                </li>
                <li className="content-list2-li08 list-item">
                  <a
                    href="https://doi.org/10.1016/j.drudis.2018.08.004"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <h3 className="content-list2-heading91 thq-heading-3">
                      {props.heading91}
                    </h3>
                  </a>
                  <p className="content-list2-content91 thq-body-small">
                    {props.content9}
                  </p>
                </li>
                <li className="content-list2-li09 list-item">
                  <a
                    href="https://pachydermjournal.org/index.php/pachyderm/article/view/81"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <h3 className="content-list2-heading92 thq-heading-3">
                      {props.heading92}
                    </h3>
                  </a>
                  <p className="content-list2-content92 thq-body-small">
                    {props.content92}
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList2.defaultProps = {
  heading1: 'Publications',
  content7:
    'Sarah has collaborated with researchers, scientists, and professionals from diverse backgrounds to further scientific knowledge and innovation.',
  content5: 'Molecular Therapeutics Nucleic Acids (2018)',
  heading4:
    'Proof of concept of peptide-linked blockmiR induced MBNL functional rescue in Myotonic Dystrophy Type 1 mouse model.',
  content8: 'Ecological Evolution (2020)',
  heading9: 'MicroRNA-based therapeutic perspectives in Myotonic dystrophy.',
  heading3:
    'BlockmiR AONs as Site-Specific Therapeutic MBNL Modulation in Myotonic Dystrophy 2D and 3D Muscle Cells and HSALR Mice.',
  content6: 'Molecular Therapeutics Nucleic Acids (2020)',
  content9: 'Drug Discovery Today (2018)',
  heading8:
    'Investigating a simplified method for noninvasive genetic sampling in East African mammals using silica dried scat swabs.',
  content3: 'Pharmaceutics (2023)',
  content2: 'International Journal of Molecular Science (2024)',
  heading2:
    'Erk Inhibition as a Promising Therapeutic Strategy for High IL-8-Secreting and Low SPTAN1-Expressing Colorectal Cancer.',
  heading6:
    'Therapeutic Potential of AntagomiR-23b for Treating Myotonic Dystrophy.',
  content91: 'International Journal of Molecular Sciences (2019)',
  heading7: 'Collaborations',
  heading91: 'RNA-mediated therapies in myotonic dystrophy.',
  content1:
    "Welcome to Sarah J. Overby's website, where you can explore her professional journey and expertise in the field of bioinformatics, colon cancer research, drug development, and genetics.",
  heading5:
    'Preclinical characterization of antagomiR-218 as a potential treatment for Myotonic Dystrophy.',
  content92: 'Pachyderm (2018)',
  heading92:
    'Testing PCR amplification from elephant dung using silica-dried swabs.',
  content4: 'Molecular Therapeutics Nucleic Acids (2022)',
}

ContentList2.propTypes = {
  heading1: PropTypes.string,
  content7: PropTypes.string,
  content5: PropTypes.string,
  heading4: PropTypes.string,
  content8: PropTypes.string,
  heading9: PropTypes.string,
  heading3: PropTypes.string,
  content6: PropTypes.string,
  content9: PropTypes.string,
  heading8: PropTypes.string,
  content3: PropTypes.string,
  content2: PropTypes.string,
  heading2: PropTypes.string,
  heading6: PropTypes.string,
  content91: PropTypes.string,
  heading7: PropTypes.string,
  heading91: PropTypes.string,
  content1: PropTypes.string,
  heading5: PropTypes.string,
  content92: PropTypes.string,
  heading92: PropTypes.string,
  content4: PropTypes.string,
}

export default ContentList2
