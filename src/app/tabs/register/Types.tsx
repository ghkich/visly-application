import React from 'react'

const RegisterTypes = () => {
  return (
    <div>
      <pre className="code mb-3">
        <code lang="javascript">
          {`interface RegisterCallParams {
  username: string
  email: string
  password: string
}`}
        </code>
      </pre>
      <pre className="code">
        <code lang="javascript">{`interface RegisterError extends ApiError`}</code>
      </pre>
    </div>
  )
}

export default RegisterTypes
