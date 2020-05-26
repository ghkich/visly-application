import React from 'react'

import GithubLogo from '../images/logo-github.inline.svg'
import GustavoLogo from '../images/logo-gustavo.inline.svg'
import InstagramLogo from '../images/logo-instagram.inline.svg'
import TwitterLogo from '../images/logo-twitter.inline.svg'

const Footer = () => {
  return (
    <div className="container max-w-3xl mx-auto px-8 pb-20 pt-8 sm:px-20 text-gray-500 text-sm sm:text-xs">
      <div className="sm:flex">
        <div className="w-48 mr-10 md:mr-20">
          <h1>LIVE DEMOS</h1>
          <ul className="mt-3">
            <li className="pb-2 mb-2 border-b border-gray-200">
              <a
                className="footer-link"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Aliquip occaecat
              </a>
              <div>
                Labore non exercitation eu esse elit esse eu ex nisi excepteur
                velit.
              </div>
            </li>
            <li>
              <a
                className="footer-link"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Noverde App - Personal Loan
              </a>
              <div>Minim commodo cillum excepteur consequat consequat.</div>
            </li>
          </ul>
        </div>
        <hr className="my-8 sm:hidden" />
        <div className="flex-1">
          <div className="w-48">
            <h1>GITHUB</h1>
            <ul className="mt-3">
              <li className="pb-2 mb-2 border-b border-gray-200">
                <a
                  className="footer-link"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  This application
                </a>
                <div>Gatsby / Sunt fugiat laboris.</div>
              </li>
              <li>
                <a
                  className="footer-link"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cillum minim deserunt commodo.
                </a>
                <div>
                  Incididunt sit eu Lorem dolor occaecat nulla pariatur sint.
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 sm:hidden" />
        <div className="flex text-2xl sm:text-lg h-6">
          <a
            href="https://twitter.com/ghkich"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link mr-4 sm:mr-3"
          >
            <TwitterLogo />
          </a>
          <a
            href="https://www.instagram.com/gustavo.kich/"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link mr-4 sm:mr-3"
          >
            <InstagramLogo />
          </a>
          <a
            href="https://github.com/ghkich"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link mr-4 sm:mr-3"
          >
            <GithubLogo />
          </a>
          <a
            href="http://www.gustavokich.com/en"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
          >
            <GustavoLogo />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
