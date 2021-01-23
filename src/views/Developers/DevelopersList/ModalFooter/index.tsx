import React from 'react'

import { Container, CleanFilterbutton, Filterbutton } from './styles'

type ModalFooterProps = {
  onFilter: CallableFunction
  onCleanFilter: CallableFunction
}

const ModalFooter: React.FC<ModalFooterProps> = ({
  onFilter,
  onCleanFilter,
}) => {
  return (
    <Container>
      <CleanFilterbutton onClick={() => onCleanFilter()}>
        <i className="fas fa-times mr-2" />
        Limpar filtro
      </CleanFilterbutton>
      <Filterbutton onClick={() => onFilter()}>
        <i className="fas fa-check mr-2" />
        Filtrar
      </Filterbutton>
    </Container>
  )
}

export default ModalFooter
