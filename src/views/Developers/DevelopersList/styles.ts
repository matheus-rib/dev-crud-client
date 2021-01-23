import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div.attrs({
  className: 'bg-base container',
})`
  min-height: 100vh;
`

export const NavbarLinkButton = styled(NavLink).attrs({
  className: 'btn btn-link',
})``

export const NavbarButton = styled.div.attrs({
  className: 'btn btn-link',
})``

export const TooltipLeft = styled.div.attrs(() => ({
  className: 'tooltip tooltip-left',
}))``
