import { Container } from '@mantine/core'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header/Header'
import VacanciesHeader from './components/VacanciesHeader/VacanciesHeader'
import CityTabs from './components/CityTabs/CityTabs'
import SkillsFilter from './components/SkillsFilter/SkillsFilter'
import VacancyList from './components/VacancyList/VacancyList'
import { fetchJobs } from './store/jobsSlice'
import type { AppDispatch, RootState } from './store/store'

function App() {
  const dispatch = useDispatch<AppDispatch>()

  const { filters, page } = useSelector(
    (state: RootState) => state.jobs,
  )

  useEffect(() => {
    void dispatch(
      fetchJobs({
        ...filters,
        page,
      }),
    )
  }, [dispatch, filters, page])

  return (
    <>
      <Header />

      <main id="vacancies">
        <Container size="lg">
          <VacanciesHeader />
          <CityTabs />

          <div className="vacancies-layout">
            <SkillsFilter />
            <VacancyList />
          </div>
        </Container>
      </main>
    </>
  )
}

export default App