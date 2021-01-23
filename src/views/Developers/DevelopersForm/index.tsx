import React from 'react'
import { useParams } from 'react-router-dom'

// import { Container } from './styles';

const DevelopersForm: React.FC = () => {
  const { developerId } = useParams<{ developerId?: string }>()
  return (
    <div>
      {developerId ? `Aqui em edição do ID: ${developerId}` : 'Aqui em criação'}
    </div>
  )
}

export default DevelopersForm
