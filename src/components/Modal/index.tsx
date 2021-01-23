import React, { useCallback } from 'react'
import {
  ModalBody,
  ModalCloseButton,
  ModalComponent,
  ModalContainer,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from './styles'

type ModalProps = {
  active: boolean
  title?: string
  modalSize?: 'sm' | 'md' | 'lg'
  onCloseModal: CallableFunction
  modalBody?: React.ReactNode
  modalFooter?: React.ReactNode
}

const Modal: React.FunctionComponent<ModalProps> = ({
  active,
  title,
  modalSize,
  onCloseModal,
  modalBody,
  modalFooter,
}) => {
  const closeModal = useCallback(() => {
    onCloseModal()
  }, [onCloseModal])

  return (
    <ModalComponent
      className={`${active ? 'active' : ''} modal-${modalSize || 'md'}`}
    >
      <ModalOverlay onClick={closeModal} />
      <ModalContainer>
        <ModalHeader>
          <ModalCloseButton onClick={closeModal} />
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <ModalContent>{modalBody}</ModalContent>
        </ModalBody>
        <ModalFooter>{modalFooter}</ModalFooter>
      </ModalContainer>
    </ModalComponent>
  )
}
export default Modal
