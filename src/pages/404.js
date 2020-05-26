import { Link } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="p-20 pb-5 text-gray-700 leading-relaxed">
      <h1 className="text-lg pb-3">NOT FOUND</h1>
      <p className="pb-3 text-gray-600">
        You just hit a route that doesn&#39;t exist... the sadness.{' '}
        <Link to="/" className="pb-20 text-pink-500">
          Go to Homepage
        </Link>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
