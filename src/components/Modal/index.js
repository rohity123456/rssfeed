import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '20px',
  zIndex: 1,
  width:'80vw',
  minWidth: '320px'
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1
}

export default function Modal({ open, title, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
      <div className="header">
       <h3>{title}</h3>
       <i style={{fontSize:"22px"}} className="far fa-times-circle" onClick={onClose}></i>
      </div>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}