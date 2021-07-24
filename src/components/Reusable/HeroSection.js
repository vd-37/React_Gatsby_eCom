import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function HeroSection({img,title,subTitle,heroClass}) {
    return (
        <BackgroundImage
            className={heroClass}
            fluid={img}
        >
        <h1 className="text-white text-center display-4 text-uppercase">{title}</h1>
        <div>
            <h4 className="text-warning">{subTitle}</h4>
        </div>
        </BackgroundImage>
    )
}
