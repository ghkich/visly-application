import React from 'react'

import ComponentsRepo from '../../components/ComponentsRepo'

const RegisterUi = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between">
      <ComponentsRepo />
      <div className="flex-1 flex items-center py-8 px-8 sm:py-10 sm:px-10 sm:pr-20">
        <div className="w-full mx-auto">
          <div className="mb-2 text-gray-600 text-sm">
            Suggested componentization:
          </div>
          <pre className="code">
            <code>
              {`<Form>
  <Input name="username" />
  <Input name="email" />
  <Input name="password" />
  <Input name="confirm-password" />
  <Button type="submit" />
</Form>`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default RegisterUi
