import styled from 'styled-components'

export const Container = styled.div.attrs({
  className: 'bg-base container',
})`
  min-height: calc(100vh - 57px);
`

export const ContainerHeader = styled.div`
  text-align: center;
`

export const FormHeader = styled.h3.attrs({
  className: 'text-primary',
})``

export const FooterContainer = styled.div.attrs({
  className: 'my-2 d-flex',
})`
  justify-content: flex-end;
`

export const SubmitButton = styled.button.attrs(({ className }) => ({
  className: `btn btn-success ${className}`,
}))``
