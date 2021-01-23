import RightSection from '@/components/HeaderComponent/RightSection'
import useDevelopers from '@/hooks/useDevelopers'
import dateMask from '@/utils/masks/date'
import genderMask from '@/utils/masks/gender'
import React, { useEffect } from 'react'
import {
  Container,
  NavbarLinkButton,
  NavbarButton,
  TooltipLeft,
  Table,
  TableTitle,
  ActionsContainer,
} from './styles'

const DevelopersList: React.FC = () => {
  const { developersList, fetchDevelopersList } = useDevelopers()

  useEffect(() => {
    fetchDevelopersList()
  }, [])

  return (
    <>
      <Container>
        <RightSection>
          <NavbarButton>
            <TooltipLeft data-tooltip="Filtrar devs">
              <i className="fas fa-search" />
            </TooltipLeft>
          </NavbarButton>
          <NavbarLinkButton to="/new">
            <TooltipLeft data-tooltip="Adicionar devs">
              <i className="fas fa-user-plus" />
            </TooltipLeft>
          </NavbarLinkButton>
        </RightSection>
        <TableTitle>Lista de desenvolvedores</TableTitle>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Idade</th>
              <th>Nascimento</th>
              <th>Sexo</th>
              <th>Hobby</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {developersList.rows.map(developer => (
              <tr key={developer.id}>
                <td>{developer.id}</td>
                <td>{developer.name}</td>
                <td>{developer.age}</td>
                <td>{dateMask(developer.dateOfBirth)}</td>
                <td>{genderMask(developer.gender)}</td>
                <td>{developer.hobby}</td>
                <td>
                  <ActionsContainer>
                    <TooltipLeft data-tooltip="Editar dev">
                      <i className="fas fa-edit" />
                    </TooltipLeft>
                    <TooltipLeft data-tooltip="Deletar dev">
                      <i className="fas fa-trash-alt" />
                    </TooltipLeft>
                  </ActionsContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default DevelopersList
