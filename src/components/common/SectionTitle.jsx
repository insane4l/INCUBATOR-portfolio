import React from 'react'

const SectionTitle = ({title, children}) => {
  return (
    <h2 className="section-title">{title || children}</h2>
  )
}

export default SectionTitle