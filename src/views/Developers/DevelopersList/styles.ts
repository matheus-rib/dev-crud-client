import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div.attrs({
  className: 'bg-base container',
})`
  min-height: calc(100vh - 57px);
`

export const NavbarLinkButton = styled(NavLink).attrs({
  className: 'btn btn-link',
})``

export const NavbarButton = styled.div.attrs({
  className: 'btn btn-link',
})``

export const TooltipLeft = styled.div.attrs({
  className: 'tooltip tooltip-left',
})``

export const TooltipLeftLink = styled(NavLink).attrs({
  className: 'tooltip tooltip-left',
})`
  &:visited {
    color: inherit;
  }
`

export const Table = styled.table.attrs({
  className: 'table table-hover',
})``

export const TableTitle = styled.h3.attrs({
  className: 'text-primary',
})`
  text-align: center;
  margin-bottom: 30px;
`

export const ActionsContainer = styled.div.attrs({
  className: 'd-flex',
})`
  align-items: center;
  justify-content: space-evenly;

  div {
    cursor: pointer;
  }
`
export const PaginationContainer = styled.div.attrs({
  className: 'd-flex',
})`
  justify-content: space-between;
  align-items: center;
`
