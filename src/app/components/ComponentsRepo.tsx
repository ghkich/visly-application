import React from 'react'

const ComponentsRepo: React.FC = () => {
  return (
    <div className="px-8 sm:pl-20 sm:pr-0 py-4 sm:py-10 sm:w-64 bg-gray-100 bg-opacity-25 border-r border-gray-300 border-b sm:border-b-0 border-opacity-75 text-gray-500">
      <h2 className="mb-4 py-2 sm:mb-3 sm:pt-0 border-b border-gray-300 border-opacity-50 text-xs text-center sm:text-left uppercase">
        Components repo
      </h2>
      <ul className="flex sm:block w-full justify-center">
        <li className="sidenav-item">Avatar</li>
        <li className="sidenav-item">Button</li>
        <li className="sidenav-item">Link</li>
        <li className="sidenav-item">Input</li>
      </ul>
    </div>
  )
}

export default ComponentsRepo
