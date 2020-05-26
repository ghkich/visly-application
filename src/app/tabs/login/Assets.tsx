import React from 'react'

const assetLoginSrc = require('../../images/assets-login.png')

const LoginAssets = () => {
  return (
    <div className="sm:flex justify-center">
      <div className="flex justify-center items-center sm:w-64 sm:mr-2 border-4 border-gray-300 border-opacity-50 hover:border-gray-100 cursor-pointer transition-colors duration-150 rounded">
        <img className="w-full" src={assetLoginSrc} alt="Asset login" />
      </div>
      <hr className="my-5 sm:hidden" />
      <div className="sm:ml-2 text-sm">
        <div className="flex flex-col text-xs">
          <button
            type="button"
            className="bg-gray-300 mb-3 sm:mb-2 text-gray-600 px-5 py-3 sm:py-1 rounded hover:bg-gray-100 transition-colors duration-150 focus:outline-none"
          >
            Open in Figma
          </button>
          <button
            type="button"
            className="bg-gray-300 mb-3 sm:mb-2 text-gray-600 px-5 py-3 sm:py-1 rounded hover:bg-gray-100 transition-colors duration-150 focus:outline-none"
          >
            Open in Invision
          </button>
        </div>
        <div className="relative">
          <button
            type="button"
            className="bg-gray-400 bg-opacity-25 text-white text-xs mb-2 sm:mb-5 mr-2 px-2 py-1 rounded hover:bg-opacity-50 transition-colors duration-150 focus:outline-none absolute bottom-0 right-0"
          >
            Copy code
          </button>
          <pre className="code sm:w-64 overflow-x-auto">
            <code>
              {`<button
  type="submit"
  className="block w-full p-2 rounded-sm bg-purple-500 hover:bg-purple-400 text-white transition-colors duration-150"
>
  Sign In
</button>`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default LoginAssets
