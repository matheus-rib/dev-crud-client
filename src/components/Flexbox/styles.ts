import styled from 'styled-components'

export const Columns = styled.div.attrs(({ className }) => ({
  className: `columns ${className}`,
}))``

export const Column = styled.div.attrs(({ className }) => ({
  className: `column ${className}`,
}))``
