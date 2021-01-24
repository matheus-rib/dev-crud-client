import styled from 'styled-components'
import {
  Field as FormikField,
  Formik as FormikBase,
  Form as FormikForm,
} from 'formik'

export const Group = styled.div.attrs(({ className }) => ({
  className: `form-group ${className}`,
}))``

export const HasIconLeft = styled.div.attrs(({ className }) => ({
  className: `has-icon-left ${className}`,
}))``

export const HasIconRight = styled.div.attrs(({ className }) => ({
  className: `has-icon-right ${className}`,
}))``

export const Icon = styled.i.attrs(({ className }) => ({
  className: `form-icon ${className}`,
}))``

export const Label = styled.label.attrs(({ className }) => ({
  className: `form-label ${className} text-primary`,
}))``

export const Input = styled.input.attrs(({ className }) => ({
  className: `form-input ${className} bg-base text-primary`,
}))``

export const Select = styled.select.attrs(({ className }) => ({
  className: `form-select ${className} text-primary`,
}))`
  background: #282932
    url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%204%205'%3E%3Cpath%20fill='%23667189'%20d='M2%200L0%202h4zm0%205L0%203h4z'/%3E%3C/svg%3E")
    no-repeat right 0.35rem center/0.4rem 0.5rem !important;
`

export const Hint = styled.div.attrs(({ className }) => ({
  className: `form-input-hint ${className}`,
}))``
// -- Validation --
export const Formik = styled(FormikBase)``

export const ValidationField = styled(FormikField).attrs(({ className }) => ({
  className: `form-input ${className} bg-base text-primary`,
}))``

export const ValidationForm = styled(FormikForm)``
// -- End validation --
