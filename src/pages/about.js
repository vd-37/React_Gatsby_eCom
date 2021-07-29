import * as React from "react"
import { graphql } from "gatsby"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoblock from "../components/Reusable/DualInfoblock"
import TeamPhotoSection from "../components/About/TeamPhotoSection"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Heading from "../components/Reusable/Heading"

const AboutPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      heroClass="about-background"
      title="We Write Code"
      subTitle=""
    ></HeroSection>
    <DualInfoblock
      heading="A message from CEO"
      img="https://www.scarymommy.com/wp-content/uploads/2019/11/michael-scott-quotes.jpg"
      alt="Card image cap"
    />
    <Heading title="Meet our team"/>
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
