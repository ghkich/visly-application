import React from 'react'

import App from '../app/App'
import Avatar from '../components/avatar'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Gustavo Kich - Tailwind Application" />
      <div className="px-8 pt-10 mt-5 pb-6 sm:px-20 sm:pt-20 sm:mt-0 text-gray-700 leading-relaxed overflow-x-hidden">
        <p className="text-2xl text-gray-600 mb-8">
          Eu eiusmod enim officia Lorem duis aute in
        </p>
        <div className="flex items-end relative">
          <div>
            <p className="mb-3">Velit sint non occaecat Lorem enim do.</p>
            <p className="pr-24 mr-2 sm:mr-5 sm:pr-32">
              Fugiat id pariatur cillum occaecat dolor ad eu reprehenderit
              aliquip incididunt ipsum tempor occaecat. Ad pariatur ad ullamco
              anim nostrud mollit consectetur aute proident consectetur aute
              ipsum sit.
            </p>
          </div>
          <div className="responsive-avatar">
            <Avatar />
          </div>
        </div>
        <hr className="my-8" />
        <p className="pb-6">
          Veniam magna fugiat labore ea eu proident et velit. Exercitation
          proident irure minim nulla tempor ut. Exercitation non in exercitation
          incididunt magna id. Lorem ips
          <a
            className="link"
            href="http://www.gustavokich.com/cv/en"
            target="_blank"
            rel="noreferrer"
          >
            adolor sit
          </a>
          , dolore minim nulla officia laborum.
        </p>
        <p className="pb-6">
          Anim mollit laborum aliquip laborum laborum non exercitation velit
          culpa incididunt occaecat. Elit tempor deserunt fugiat cupidatat amet
          enim velit. Magna nulla est qui voluptate ea. Dolor id et ut ex.
        </p>
        <p className="pb-6">
          Occaecat dolore velit qui amet duis aliquip non anim excepteur fugiat
          cillum culpa incididunt eu. Eu anim et labore in nisi eiusmod. In
          occaecat consectetur tempor reprehenderit laboris excepteur culpa.
          Culpa dolor labore anim ullamco esse nisi nulla. Ad sit aute nisi
          occaecat mollit deserunt esse nisi cillum sint in laborum. Incididunt
          commodo sunt reprehenderit do reprehenderit. Id aute amet proident
          nostrud quis.
        </p>
      </div>
      <App />
      <div className="px-8 pt-10 pb-10 sm:px-20 text-gray-700 leading-relaxed">
        <p className="pb-6">
          Non ipsum officia adipisicing ad labore sit cillum commodo excepteur.
          Minim excepteur nostrud velit laborum ea exercitation elit anim
          adipisicing duis nostrud sunt anim reprehenderit.
        </p>

        <p className="pb-6">
          Aliqua ad nisi ullamco do officia nulla do. Velit veniam anim eiusmod
          tempor. Mollit tempor nulla officia adipisicing velit non proident
          laboris reprehenderit sint proident laborum laboris quis.
        </p>

        <p className="pb-6">
          <b>
            Amet incididunt tempor!{' '}
            <span role="image" aria-label="Peace">
              ✌️
            </span>
          </b>
        </p>

        <hr className="my-6" />

        <p className="pb-6 text-sm text-gray-600">
          PS: Ut quis minim officia qui ad occaecat id Lorem excepteur proident.
          Incididunt duis nostrud ea Lorem excepteur laboris incididunt
          adipisicing amet qui commodo officia.
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
