import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#root");

function Modal({ largeImageURL, alt, onClick }) {
  useEffect(() => {
    window.addEventListener("keydown", cleanEventListener);
    return () => {
      window.removeEventListener("keydown", cleanEventListener);
    };
  });

  const cleanEventListener = (e) => {
    if (e.code === "Escape") {
      onClick();
    }
  };
  const backdrop = (e) => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };
  return createPortal(
    <div className={s.Overlay} onClick={backdrop}>
      <div className={s.Modal}>
        <img src={largeImageURL} alt={alt} />
        <button className={s.button} type="button" onClick={onClick}>
          X
        </button>
      </div>
    </div>,
    modalRoot
  );
}
export default Modal;

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
