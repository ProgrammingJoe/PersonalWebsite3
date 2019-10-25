import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Project = ({ title, description, skills, twitter, github, discord }) => (
  <div>
    <div style={{ fontSize: '36px' }}>{ title }</div>
    <div style={{ fontSize: '20px' }}>{ description }</div>
    {skills.map((skill, index) =>
      <div style={{ backgroundColor: 'blue', display: 'inline-block', padding: '2px 8px', borderRadius: '8px', marginRight: '8px' }} key={index}>{skill}</div>
    )}
  </div>
)

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.array,
  twitter: PropTypes.string,
  instagram: PropTypes.string,
  website: PropTypes.string,
  app: PropTypes.string,
  github: PropTypes.string,
  discord: PropTypes.string,
}

Project.defaultProps = {
  title: ``,
  description: ``,
  skills: PropTypes.array,
  twitter: ``,
  github: ``,
  discord: ``,
  instagram: ``,
  website: ``,
  app: ``,
}

export default Project
