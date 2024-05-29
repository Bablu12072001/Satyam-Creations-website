import React from "react";
import PropTypes from "prop-types";

function Modal({ children, closeModal }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg relative max-w-2xl w-full mx-4">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-black text-3xl font-bold"
          style={{
            cursor: "pointer",
            background: "transparent",
            border: "none",
            outline: "none",
          }}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
