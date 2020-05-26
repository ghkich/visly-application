import React from 'react'

const LoginTypes = () => {
  return (
    <div>
      <pre className="code mb-3">
        <code lang="javascript">
          {`interface LoginCallParams {
  username: string
  password: string
}`}
        </code>
      </pre>
      <pre className="code mb-3">
        <code lang="javascript">{`interface LoginError extends ApiError`}</code>
      </pre>

      <div className="alert-error" role="alert">
        <div className="flex items-center justify-between">
          <span>
            <strong className="font-bold">No UI defined</strong>{' '}
            <span>for interface LoginError</span>
          </span>
          <div className="py-1 px-3 ml-1 border border-red-200 text-red-400 rounded text-xs text-white cursor-pointer whitespace-no-wrap">
            Add TODO
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginTypes
