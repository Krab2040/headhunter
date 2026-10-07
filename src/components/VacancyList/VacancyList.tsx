import { Pagination, Stack, Text } from '../../ui/mantine'
import type { ReactNode } from 'react'
import './VacancyList.css'

type PaginationInfo = {
  totalPages: number
}

type JobsStatus = 'idle' | 'loading' | 'succeeded' | 'failed'

type VacancyListProps = {
  children: ReactNode
  jobsCount: number
  status: JobsStatus
  error: string | null
  pagination: PaginationInfo | null
  page: number
  onPageChange: (page: number) => void
}

export function VacancyList({
  children,
  jobsCount,
  status,
  error,
  pagination,
  page,
  onPageChange,
}: VacancyListProps) {
  if (status === 'idle' || status === 'loading') {
    return <Text>Загрузка вакансий...</Text>
  }

  if (status === 'failed') {
    return <Text c="red">{error}</Text>
  }

  if (jobsCount === 0) {
    return <Text>Вакансии не найдены</Text>
  }

  return (
    <div className="vacancy-list-wrapper">
      <Stack className="vacancy-list" gap={12}>
        {children}
      </Stack>

      {pagination && (
        <Pagination
          value={page}
          onChange={onPageChange}
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