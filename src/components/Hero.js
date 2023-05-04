import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = ({ showPerson }) => {
  return (
    <header className="hero">
      {showPerson && (
        <StaticImage
          src="../assets/person.png"
          placeholder="blurred"
          alt="person typing"
          className="hero-person"
        />
      )}
    </header>
  )
}

export default Hero
