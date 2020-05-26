import React from 'react'

const RegisterApi = () => {
  return (
    <div>
      <div className="alert-error mb-3" role="alert">
        <span className="block sm:inline">
          There is no service to handle the register post.{' '}
          <b className="font-bold">Suggested endpoint</b>:
        </span>
      </div>
      <div className="bg-gray-100 border border-gray-600 text-sm rounded">
        <div className="flex items-center p-2">
          <div className="py-1 px-3 mr-3 bg-gray-600 rounded text-white font-bold">
            POST
          </div>
          <div className="mr-3 font-bold">/register</div>
          <div className="text-xs opacity-75">API Endpoint description</div>
        </div>
        <div className="p-3 bg-white border-t border-b border-gray-500 border-opacity-25">
          Parameters
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
  "email": "email@email.com",
  "password": "Strong123paSs*",
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterApi
