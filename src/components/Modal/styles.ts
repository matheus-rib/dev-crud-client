import styled from 'styled-components'

export const ModalComponent = styled.div.attrs(({ className }) => ({
  className: `modal ${className}`,
}))``

export const ModalOverlay = styled.div.attrs({
  className: 'modal-overlay',
})``

export const ModalContainer = styled.div.attrs({
  className: 'modal-container bg-base',
})``

export const ModalHeader = styled.div.attrs({
  className: 'modal-header',
})``

export const ModalCloseButton = styled.div.attrs({
  className: 'btn btn-clear float-right text-primary',
})`
  &:hover {
    background: none !important;
  }
`

export const ModalTitle = styled.div.attrs({
  className: 'modal-title h5 text-primary',
})``

export const ModalBody = styled.div.attrs({
  className: 'modal-body',
})``

export const ModalContent = styled.div.attrs({
  className: 'content',
})``

export const ModalFooter = styled.div.attrs({
  className: 'modal-footer',
})``
