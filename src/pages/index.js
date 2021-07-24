import * as React from "react"
import { graphql } from "gatsby"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoblock from "../components/Reusable/DualInfoblock"
import Courses from "../components/Cart/Courses"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      heroClass="hero-background"
      title="LCO"
      subTitle="LearnCodeOnline.in"
     />
     <Courses 
       courses={data.courses}
     />
    <Infoblock heading="About Us" />
    <DualInfoblock
      heading="Our team"
      img="https://img.cinemablend.com/filter:scale/quill/1/a/1/0/0/7/1a10072efd184b11f20a74c2ceb48432aa681b75.jpg?mw=600"
      alt="Card image cap"
    />
  </Layout>
)
export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    courses: allContentfulCourses(filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
          id
          title
          category
          price
          description
          image {
            fixed(width: 200, height: 120) {
              src
            }
          }
        }
      }
    }
  }
`

export default IndexPage
