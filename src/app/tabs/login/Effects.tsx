import React from 'react'

const LoginEffects = () => {
  return (
    <div>
      <pre className="code mb-3">
        <code lang="javascript">
          {`form.onSubmit() {
  login.call(username, password)
}`}
        </code>
      </pre>
      <pre className="code mb-3">
        <code lang="javascript">
          {`login.onSuccess() {
  navigate(RoutePaths.HOME)
}`}
        </code>
      </pre>
      <div className="alert-warning" role="alert">
        <strong className="font-bold">login.onError()</strong>
        <span> - Effects not defined</span>
      </div>
    </div>
  )
}

export default LoginEffects
