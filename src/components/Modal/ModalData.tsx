import { useState } from "react";

interface ModalReturnProps {
    showModal: boolean,
    openModal: () => void,
    closeModal: () => void
}

export const useModal = (): ModalReturnProps => {
    const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return { showModal, openModal, closeModal };
}