import React from "react";

import ReactDOM from "react-dom";

import { useModalStore } from "@/store/store_modal";

const ContainerModal = () => {
  const { Component, closeModal } = useModalStore();
  const modalContentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  const handleClickOutside = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(e.target as Node)
    ) {
      closeModal();
    }
  };

  const element =
    typeof document !== "undefined" ? document.getElementById("portal") : null;
  if (!Component || !element) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center"
      onClick={handleClickOutside}
    >
      <div
        ref={modalContentRef}
        className="w-[30rem] flex justify-center items-center bg-white rounded-2xl shadow-lg p-11"
        onClick={(e) => e.stopPropagation()}
      >
        {Component}
      </div>
    </div>,
    element,
  );
};

export default ContainerModal;
