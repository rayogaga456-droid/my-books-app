import { useState } from "react"

function Modal() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      {open && (
        <div className="modal">
          <div className="modal-content">
            <h2>Hello 👋</h2>
            <p>This is a modal component.</p>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal