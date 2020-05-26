import React from 'react'

import ComponentsRepo from '../../components/ComponentsRepo'

const LoginUi = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between">
      <ComponentsRepo />
      <div className="flex-1 py-8 px-8 sm:py-10 sm:px-10 sm:pr-20">
        <form className="w-64 mx-auto">
          <input
            type="text"
            className="ui-input"
            placeholder="Username"
            autoComplete="off"
          />
          <input
            type="password"
            className="ui-input"
            placeholder="Password"
            autoComplete="off"
          />
          <a
            href="#"
            className="block text-sm text-purple-500 hover:text-purple-400 transition-colors duration-150 mb-3"
          >
            Forgot password?
          </a>
          <button
            type="submit"
            className="block w-full p-2 rounded-sm bg-purple-500 hover:bg-purple-400 text-white transition-colors duration-150"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginUi
