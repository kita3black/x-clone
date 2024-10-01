import React from 'react'
import "./SidebarOption.css"

export default function SidebarOption({ text, Icon, active }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}
