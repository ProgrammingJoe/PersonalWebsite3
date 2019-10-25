import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from '../components/profile'
import Project from '../components/project'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>I enjoy building projects that support and encourage open communication and collaboration.</p>
    <Link to="/page-2/">Go to page 2</Link>
    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Profile/>
    </div>*/}
    <Project
      title="Spart"
      description="An platform where you can freely inspire and collaborate with other artists"
      skills={["Django", "Vue"]}
      website="https://spart.site/"
      app="https://www.spart.xyz/"
      twitter="https://twitter.com/Spart_xyz"
      instagram="https://www.instagram.com/spart_xyz/"
      discord="https://invite.gg/spart"
    />
  </Layout>
)

export default IndexPage
