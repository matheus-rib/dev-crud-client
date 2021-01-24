/* eslint-disable multiline-ternary */
import Flexbox from '@/components/Flexbox'
import Form from '@/components/Form'
import useDevelopers from '@/hooks/useDevelopers'
import yup from '@/lib/yupPt'
import { GenderType } from '@/utils/enums'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  Container,
  SubmitButton,
  FooterContainer,
  ContainerHeader,
  FormHeader,
} from './styles'
import genderMask from '@/utils/masks/gender'
import { useAlert } from 'react-alert'
import { DeepPartial, Developer } from '@/utils/types'

const schema = yup.object().shape({
  name: yup.string().required(),
  hobby: yup.string().required(),
  gender: yup.string().required(),
  dateOfBirth: yup.date().required().max(new Date()),
})

const DevelopersForm: React.FC = () => {
  const { developerId } = useParams<{ developerId?: string }>()
  const alert = useAlert()
  const [firstLoad, setFirstLoad] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isDeveloperCreate, setIsDeveloperCreate] = useState(true)
  const {
    currentDeveloper,
    fetchCurrentDeveloper,
    createDeveloper,
    updateDeveloper,
  } = useDevelopers()

  const fetchDeveloper = useCallback(async () => {
    try {
      setLoading(true)
      await fetchCurrentDeveloper(developerId)
    } catch (e) {
      alert.error(e.message)
    } finally {
      setLoading(false)
      setFirstLoad(true)
    }
  }, [alert, developerId, fetchCurrentDeveloper])

  const onSubmit = useCallback(
    async form => {
      try {
        setLoading(true)
        let message = ''
        if (isDeveloperCreate) {
          await createDeveloper(form)
          message = 'Desenvolvedor criado com sucesso'
        } else {
          await updateDeveloper(form)
          message = 'Desenvolvedor atualizado com sucesso'
        }
        alert.success(message)
      } catch (e) {
        alert.error(e.message)
      } finally {
        setLoading(false)
      }
    },
    [alert, createDeveloper, isDeveloperCreate, updateDeveloper],
  )

  useEffect(() => {
    if (developerId) {
      setIsDeveloperCreate(false)
      if (currentDeveloper.id !== Number(developerId)) {
        fetchDeveloper()
      }
    } else {
      setFirstLoad(true)
    }
  }, [fetchDeveloper, developerId, firstLoad, currentDeveloper.id])

  return (
    <Container>
      {firstLoad ? (
        <fieldset disabled={loading}>
          <ContainerHeader>
            <FormHeader>
              {isDeveloperCreate
                ? 'Criar desenvolvedor'
                : 'Editar Desenvolvedor'}
            </FormHeader>
          </ContainerHeader>
          <Form.Formik
            initialValues={{
              id: currentDeveloper.id,
              name: currentDeveloper.name,
              gender: currentDeveloper.gender,
              dateOfBirth: currentDeveloper.dateOfBirth
                ? new Date(currentDeveloper.dateOfBirth)
                    .toISOString()
                    .split('T')[0]
                : '',
              hobby: currentDeveloper.hobby,
            }}
            validationSchema={schema}
            validateOnMount
            onSubmit={onSubmit}
          >
            {({
              errors,
              isValid,
              touched,
            }: {
              errors: DeepPartial<Developer>
              isValid: boolean
              touched: DeepPartial<Developer>
            }) => (
              <Form.ValidationForm>
                <Flexbox.Columns>
                  <Flexbox.Column className="col-12">
                    <Form.Group
                      className={`${
                        touched?.name && errors?.name ? 'has-error' : ''
                      }`}
                    >
                      <Form.Label htmlFor="name">Nome:</Form.Label>
                      <Form.ValidationField id="name" name="name" />
                      {touched?.name && errors?.name ? (
                        <Form.Hint>{errors.name}</Form.Hint>
                      ) : null}
                    </Form.Group>
                  </Flexbox.Column>
                  <Flexbox.Column className="col-6">
                    <Form.Group
                      className={`${
                        touched?.gender && errors?.gender ? 'has-error' : ''
                      }`}
                    >
                      <Form.Label htmlFor="gender">Sexo:</Form.Label>
                      <Form.ValidationField
                        id="gender"
                        name="gender"
                        component="select"
                      >
                        <option key="0" value=""></option>
                        {Object.values(GenderType).map((gender, index) => (
                          <option key={index} value={gender}>
                            {genderMask(gender)}
                          </option>
                        ))}
                      </Form.ValidationField>
                      {touched?.gender && errors?.gender ? (
                        <Form.Hint>{errors.gender}</Form.Hint>
                      ) : null}
                    </Form.Group>
                  </Flexbox.Column>
                  <Flexbox.Column className="col-6">
                    <Form.Group
                      className={`${
                        touched?.dateOfBirth && errors?.dateOfBirth
                          ? 'has-error'
                          : ''
                      }`}
                    >
                      <Form.Label htmlFor="dateOfBirth">
                        Data de nascimento:
                      </Form.Label>
                      <Form.ValidationField
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                      />

                      {touched?.dateOfBirth && errors?.dateOfBirth ? (
                        <Form.Hint>{errors.dateOfBirth}</Form.Hint>
                      ) : null}
                    </Form.Group>
                  </Flexbox.Column>
                  <Flexbox.Column className="col-12">
                    <Form.Group
                      className={`${
                        touched?.hobby && errors?.hobby ? 'has-error' : ''
                      }`}
                    >
                      <Form.Label htmlFor="hobby">Hobby:</Form.Label>
                      <Form.ValidationField
                        id="hobby"
                        name="hobby"
                        component="textarea"
                      />

                      {touched?.hobby && errors?.hobby ? (
                        <Form.Hint>{errors.hobby}</Form.Hint>
                      ) : null}
                    </Form.Group>
                  </Flexbox.Column>
                </Flexbox.Columns>
                <FooterContainer>
                  <SubmitButton
                    disabled={!isValid}
                    type="submit"
                    className={`${loading ? 'loading' : ''}`}
                  >
                    {isDeveloperCreate ? (
                      <div>
                        <i className="fas fa-plus mx-2" />
                        Criar desenvolvedor
                      </div>
                    ) : (
                      <div>
                        <i className="fas fa-save mx-2" /> Editar Desenvolvedor
                      </div>
                    )}
                  </SubmitButton>
                </FooterContainer>
              </Form.ValidationForm>
            )}
          </Form.Formik>
        </fieldset>
      ) : null}
    </Container>
  )
}

export default DevelopersForm
