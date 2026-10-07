import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CityTabs } from '../../components/CityTabs/CityTabs'
import { SkillsFilter } from '../../components/SkillsFilter/SkillsFilter'
import { VacanciesHeader } from '../../components/VacanciesHeader/VacanciesHeader'
import { VacanciesLayout } from '../../components/VacanciesLayout/VacanciesLayout'
import { VacancyCard } from '../../components/VacancyCard/VacancyCard'
import { VacancyList } from '../../components/VacancyList/VacancyList'
import {fetchJobs, setCity, setPage, setSearch, setSkills,} from './model/jobsSlice'
import type { AppDispatch, RootState } from './model/store'

export function VacanciesModule() {
  const dispatch = useDispatch<AppDispatch>()
  const {filters, jobs, page, pagination, status, error,} = useSelector((state: RootState) => state.jobs)

  useEffect(() => {
    void dispatch(fetchJobs({ ...filters, page }))
  }, [dispatch, filters, page])

  return (
    <VacanciesLayout
      header={(
        <VacanciesHeader
          onSearch={(search) => dispatch(setSearch(search))}
        />
      )}
      cities={(
        <CityTabs
          city={filters.city}
          onCityChange={(city) => dispatch(setCity(city))}
        />
      )}
      skills={(
        <SkillsFilter
          skills={filters.skills}
          onSkillsChange={(skills) => dispatch(setSkills(skills))}
        />
      )}
      vacancies={(
        <VacancyList
          jobsCount={jobs.length}
          status={status}
          error={error}
          pagination={pagination}
          page={page}
          onPageChange={(nextPage) => dispatch(setPage(nextPage))}
        >
          {jobs.map((vacancy) => (
            <VacancyCard
              key={vacancy.id}
              vacancy={vacancy}
            />
          ))}
        </VacancyList>
      )}
    />
  )
}
