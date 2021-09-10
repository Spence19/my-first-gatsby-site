import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial</p>
      <StaticImage
        alt="Dinosaur"
        src="https://static.wikia.nocookie.net/jurassicpark/images/4/4c/Stegosaurus-detail-header.png/revision/latest?cb=20141230042616"
        />
    </Layout>
  )
}

export default IndexPage