import Flexbox from '@/components/Flexbox'
import Form from '@/components/Form'
import { GenderType } from '@/utils/enums'
import genderMask from '@/utils/masks/gender'
import { DeveloperFilterQuery } from '@/utils/types'
import React from 'react'

type ModalBodyProps = {
  filter: DeveloperFilterQuery
  onSetFilter: CallableFunction
}

const ModalBody: React.FC<ModalBodyProps> = ({ filter, onSetFilter }) => {
  return (
    <Flexbox.Columns>
      <Flexbox.Column className="col-3 col-sm-4">
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Input
            type="tel"
            onChange={e => onSetFilter({ ...filter, id: e.target.value })}
            value={filter.id}
          />
        </Form.Group>
      </Flexbox.Column>
      <Flexbox.Column className="col-9 col-sm-8">
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Input
            onChange={e => onSetFilter({ ...filter, name: e.target.value })}
            value={filter.name}
          />
        </Form.Group>
      </Flexbox.Column>
      <Flexbox.Column className="col-3 col-sm-4">
        <Form.Group>
          <Form.Label>Sexo</Form.Label>
          <Form.Select
            onChange={e => onSetFilter({ ...filter, gender: e.target.value })}
            value={filter.gender}
          >
            <option key="0" value=""></option>
            {Object.values(GenderType).map((gender, index) => (
              <option key={index} value={gender}>
                {genderMask(gender)}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Flexbox.Column>
      <Flexbox.Column className="col-9 col-sm-8">
        <Form.Group>
          <Form.Label>Hobby</Form.Label>
          <Form.Input
            onChange={e => onSetFilter({ ...filter, hobby: e.target.value })}
            value={filter.hobby}
          />
        </Form.Group>
      </Flexbox.Column>
      <Flexbox.Column className="col-6 col-sm-12">
        <Form.Group>
          <Form.Label>Nascimento</Form.Label>
          <Form.Input
            type="date"
            onChange={e =>
              onSetFilter({ ...filter, dateOfBirth: e.target.value })
            }
            value={filter.dateOfBirth}
          />
        </Form.Group>
      </Flexbox.Column>
      <Flexbox.Column className="col-6 col-sm-12">
        <Form.Group>
          <Form.Label>Idade</Form.Label>
          <Form.Input
            type="tel"
            onChange={e => onSetFilter({ ...filter, age: e.target.value })}
            value={filter.age}
          />
        </Form.Group>
      </Flexbox.Column>
    </Flexbox.Columns>
  )
}

export default ModalBody
