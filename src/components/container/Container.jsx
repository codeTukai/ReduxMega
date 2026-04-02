import React from 'react'

function Container({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-4 w-full">
      {children}
    </div>
  )
}

export default Container