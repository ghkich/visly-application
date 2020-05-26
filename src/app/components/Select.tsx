import React from 'react'

interface SelectProps extends React.SelectHTMLAttributes<any> {}

const Select: React.FC<SelectProps> = ({className, children, ...props}) => {
  return (
    <div className={`inline-block relative ${className}`}>
      <select
        className="block appearance-none w-full bg-transparent border border-gray-300 transition-colors duration-150 hover:border-gray-500 text-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:border-gray-500 focus:outline-none"
        {...props}
      >
        {children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  )
}

export default Select
