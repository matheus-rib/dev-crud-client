import RightSection from '@/components/HeaderComponent/RightSection'
import useDevelopers from '@/hooks/useDevelopers'
import React, { useEffect } from 'react'
import {
  Container,
  NavbarLinkButton,
  NavbarButton,
  TooltipLeft,
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
        {JSON.stringify(developersList)}
      </Container>
    </>
  )
}

export default DevelopersList
