import React from "react"

type SectionTitleProps = {
  title: string
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="mi-sectiontitle">
      <h2>{title}</h2>
      <span>{title}</span>
    </div>
  )
}

export default SectionTitle
