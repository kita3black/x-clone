import React from 'react'
import "./SidebarOption.css"

export default function SidebarOption({ text, Icon }) {
  return (
    <div className="sidebarOption">
      <Icon />
      <h2>{text}</h2>
    </div>
  )
}
