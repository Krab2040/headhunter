import { Pagination, Stack, Text } from '@mantine/core'
import { useDispatch, useSelector } from 'react-redux'
import VacancyCard from '../VacancyCard/VacancyCard'
import {
  setPage,
} from '../../store/jobsSlice'
import type { AppDispatch, RootState } from '../../store/store'
import './VacancyList.css'

function VacancyList() {
  const dispatch = useDispatch<AppDispatch>()

  const {
    jobs,
    status,
    error,
    pagination,
    page,
  } = useSelector((state: RootState) => state.jobs)

  if (status === 'idle' || status === 'loading') {
    return <Text>Загрузка вакансий...</Text>
  }

  if (status === 'failed') {
    return <Text c="red">{error}</Text>
  }

  if (jobs.length === 0) {
    return <Text>Вакансии не найдены</Text>
  }

  return (
    <div className="vacancy-list-wrapper">
      <Stack className="vacancy-list" gap={12}>
        {jobs.map((vacancy) => (
          <VacancyCard
            key={vacancy.id}
            vacancy={vacancy}
          />
        ))}
      </Stack>

      {pagination && (
        <Pagination
          value={page}
          onChange={(nextPage) => dispatch(setPage(nextPage))}
          total={pagination.totalPages}
          withEdges
          radius="xs"
          size="md"
          className="vacancy-list__pagination"
        />
      )}
    </div>
  )
}

export default VacancyList