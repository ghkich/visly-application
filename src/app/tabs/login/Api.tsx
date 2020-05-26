import React from 'react'

const LoginApi = () => {
  return (
    <div>
      <div className="bg-indigo-100 border border-indigo-600 text-sm rounded">
        <div className="flex items-center p-2">
          <div className="py-1 px-3 mr-3 bg-indigo-600 rounded text-white font-bold">
            POST
          </div>
          <div className="mr-3 font-bold">/login</div>
          <div className="text-xs opacity-75">Authenticates the user</div>
        </div>
        <div className="flex items-center p-3 bg-white border-t border-b border-gray-500 border-opacity-25">
          <span className="flex-1">Parameters</span>
          <div className="py-1 px-3 ml-1 border border-gray-400 text-gray-600 rounded text-xs text-white cursor-pointer">
            Try it out
          </div>
        </div>
        <div className="p-3 pb-2 flex text-xs">
          <div className="w-32">Name</div>
          <div className="w-full">Description</div>
        </div>
        <hr />
        <div className="p-3 pt-2 flex">
          <div className="w-32 font-bold">body</div>
          <div className="w-full">
            <pre className="code">
              <code lang="json">
                {`{
  "username": "somestring",
  "keepMeLoggedIn": false,
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
      <div className="alert-warning mt-3" role="alert">
        <strong className="font-bold">body.keepMeLoggedIn</strong>
        <span> is not being used</span>
      </div>
      <div className="alert-error mt-3" role="alert">
        <strong className="font-bold">params.password</strong>
        <span> is used in Effects but is not being handle by /login</span>
      </div>
    </div>
  )
}

export default LoginApi
