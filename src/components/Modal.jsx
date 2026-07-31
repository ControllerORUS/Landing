import React, { useEffect, useRef } from 'react'
import './Modal.css'

export default function Modal({ isOpen, onClose, title, children, ariaLabel, closeLabel = 'Cerrar' }) {
  const overlayRef = useRef(null)
  const modalRef = useRef(null)

  /* ── Close on Esc ── */
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  /* ── Lock body scroll ── */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  /* ── Focus trap ── */
  useEffect(() => {
    if (!isOpen || !modalRef.current) return
    const focusable = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    first?.focus()

    const trap = (e) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus() }
      }
    }
    document.addEventListener('keydown', trap)
    return () => document.removeEventListener('keydown', trap)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="modal-overlay"
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel || title}
    >
      <div className="modal-box" ref={modalRef}>
        <button
          className="modal-close"
          onClick={onClose}
          aria-label={closeLabel}
        >
          ✕
        </button>
        {title && <h2 className="modal-title">{title}</h2>}
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  )
}
