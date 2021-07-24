import * as React from "react"
import { graphql } from "gatsby"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoblock from "../components/Reusable/DualInfoblock"
import TeamPhotoSection from "../components/About/TeamPhotoSection"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      heroClass="about-background"
      title="We sell paper"
      subTitle=""
    ></HeroSection>
    <DualInfoblock
      heading="A message from CEO"
      img="https://i.pinimg.com/originals/f6/34/c3/f634c3c6a0fb40dd3caadeea000676be.jpg"
      alt="Card image cap"
    />
    <TeamPhotoSection></TeamPhotoSection>
    <Infoblock heading="About Vision" />
  </Layout>
)
export const query = graphql`
  {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
