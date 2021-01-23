import React from 'react'
import { Navbar, NavbarBrand, NavbarSection } from './styles'

const HeaderComponent: React.FC = ({ children }) => {
  return (
    <>
      <Navbar>
        <NavbarSection>
          <NavbarBrand to="/" className="mr-2">
            Developers CRUD
          </NavbarBrand>
        </NavbarSection>
      </Navbar>
      {children}
    </>
  )
}

export default HeaderComponent
