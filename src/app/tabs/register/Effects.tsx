import React from 'react'

const RegisterEffects = () => {
  return (
    <div>
      <pre className="code mb-3">
        <code lang="javascript">
          {`form.onSubmit() {
  register.call(username, email, password)
}`}
        </code>
      </pre>
      <div className="alert-warning mb-3" role="alert">
        <strong className="font-bold">register.onSuccess()</strong>
        <span> - Effects not defined</span>
      </div>
      <div className="alert-warning" role="alert">
        <strong className="font-bold">register.onError()</strong>
        <span> - Effects not defined</span>
      </div>
    </div>
  )
}

export default RegisterEffects
