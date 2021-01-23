import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Navbar = styled.header.attrs({
  className: 'navbar bg-base',
})`
  position: sticky;
  top: 0;
  padding: 15px 10px;
`

export const NavbarSection = styled.section.attrs({
  className: 'navbar-section',
})``

export const NavbarBrand = styled(NavLink).attrs(({ className }) => ({
  className: `navbar-brand text-primary ${className}`,
}))`
  :focus {
    box-shadow: none;
  }
`
