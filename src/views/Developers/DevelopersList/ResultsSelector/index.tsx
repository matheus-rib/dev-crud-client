import Form from '@/components/Form'
import React from 'react'

import { Container } from './styles'

type ResultsSelectorProps = {
  take: number
  onChangeSelector: CallableFunction
}

const ResultsSelector: React.FC<ResultsSelectorProps> = ({
  take,
  onChangeSelector,
}) => {
  const pagesToDisplay = [1, 10, 20, 30]
  return (
    <Container>
      <Form.Select
        value={take}
        onChange={e => onChangeSelector(e.target.value)}
      >
        {pagesToDisplay.map(page => {
          return <option key={page}>{page}</option>
        })}
      </Form.Select>
    </Container>
  )
}

export default ResultsSelector
