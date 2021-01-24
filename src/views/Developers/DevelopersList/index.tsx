import RightSection from '@/components/HeaderComponent/RightSection'
import Modal from '@/components/Modal'
import useDevelopers from '@/hooks/useDevelopers'
import { emptyDevelopersFilter } from '@/utils/emptyState'
import dateMask from '@/utils/masks/date'
import genderMask from '@/utils/masks/gender'
import { DeveloperFilterQuery } from '@/utils/types'
import React, { useCallback, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'
import ResultsSelector from './ResultsSelector'
import {
  ActionsContainer,
  Container,
  NavbarButton,
  NavbarLinkButton,
  Table,
  TableTitle,
  TooltipLeft,
  PaginationContainer,
} from './styles'

type FilterParams = {
  page: number
  take: number
  q: DeveloperFilterQuery
}

const DevelopersList: React.FC = () => {
  const { developersList, fetchDevelopersList } = useDevelopers()
  const [modalActive, setModalActive] = useState(false)
  const [queryQ, setQueryQ] = useState<DeveloperFilterQuery>(
    emptyDevelopersFilter,
  )
  const [query, setQuery] = useState<FilterParams>({
    page: 1,
    take: 30,
    q: emptyDevelopersFilter,
  })

  const fetchList = useCallback(async () => {
    await fetchDevelopersList(query)
  }, [query])

  const setFilter = useCallback(
    query => {
      setQueryQ(query)
    },
    [setQueryQ],
  )

  const setFilterQuery = useCallback(() => {
    setQuery({ ...query, q: queryQ })
  }, [setQuery, queryQ])

  const setFilterPage = useCallback(
    page => {
      setQuery({ ...query, page })
    },
    [setQuery, query],
  )

  const setFilterTake = useCallback(
    take => {
      setQuery({ ...query, take, page: 1 })
    },
    [setQuery, query],
  )

  useEffect(() => {
    fetchList()
  }, [fetchList])

  return (
    <>
      <Container>
        <RightSection>
          <NavbarButton>
            <TooltipLeft
              data-tooltip="Filtrar devs"
              onClick={() => setModalActive(true)}
            >
              <i className="fas fa-search" />
            </TooltipLeft>
          </NavbarButton>
          <NavbarLinkButton to="/new">
            <TooltipLeft data-tooltip="Adicionar devs">
              <i className="fas fa-user-plus" />
            </TooltipLeft>
          </NavbarLinkButton>
        </RightSection>
        <TableTitle>Lista de desenvolvedores</TableTitle>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Idade</th>
              <th>Nascimento</th>
              <th>Sexo</th>
              <th>Hobby</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {developersList.rows.map(developer => (
              <tr key={developer.id}>
                <td>{developer.id}</td>
                <td>{developer.name}</td>
                <td>{developer.age}</td>
                <td>{dateMask(developer.dateOfBirth)}</td>
                <td>{genderMask(developer.gender)}</td>
                <td>{developer.hobby}</td>
                <td>
                  <ActionsContainer>
                    <TooltipLeft data-tooltip="Editar dev">
                      <i className="fas fa-edit" />
                    </TooltipLeft>
                    <TooltipLeft data-tooltip="Deletar dev">
                      <i className="fas fa-trash-alt" />
                    </TooltipLeft>
                  </ActionsContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal
          title="Filtros"
          onCloseModal={() => setModalActive(false)}
          active={modalActive}
          modalBody={<ModalBody onSetFilter={setFilter} filter={queryQ} />}
          modalFooter={
            <ModalFooter
              onFilter={async () => {
                setFilterQuery()
                await fetchList()
                setModalActive(false)
              }}
              onCleanFilter={async () => {
                setQuery({
                  page: 1,
                  take: 30,
                  q: emptyDevelopersFilter,
                })
                setQueryQ(emptyDevelopersFilter)
                await fetchList()
                setModalActive(false)
              }}
            />
          }
        ></Modal>
        <PaginationContainer>
          <ReactPaginate
            pageCount={developersList.pages}
            pageRangeDisplayed={3}
            marginPagesDisplayed={3}
            onPageChange={({ selected }) => setFilterPage(selected + 1)}
            containerClassName="pagination"
            pageClassName="page-item c-hand"
            previousLabel=""
            nextLabel=""
            previousLinkClassName="fas fa-chevron-left mx-2"
            nextLinkClassName="fas fa-chevron-right mx-2"
            activeClassName="active"
            disabledClassName="disabled"
            forcePage={developersList.page - 1}
          />
          <ResultsSelector take={query.take} onChangeSelector={setFilterTake} />
        </PaginationContainer>
      </Container>
    </>
  )
}

export default DevelopersList
