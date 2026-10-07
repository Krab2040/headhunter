import { HeaderModule } from '../../modules/HeaderModule/HeaderModule'
import { VacanciesModule } from '../../modules/VacanciesModule/VacanciesModule'

function VacanciesPage() {
  return (
    <>
      <HeaderModule />

      <main id="vacancies">
        <VacanciesModule />
      </main>
    </>
  )
}

export default VacanciesPage
