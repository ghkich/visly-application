import './layout.css'

import PropTypes from 'prop-types'
import React from 'react'

import Footer from './footer'

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
const Layout = ({children}) => {
  return (
    <div className="bg-gray-100 bg-opacity-50">
      <div className="container max-w-3xl mx-auto bg-white shadow-sm">
        <div className="h-2 linear-gradient" />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
