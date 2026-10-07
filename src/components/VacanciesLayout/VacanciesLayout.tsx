import type { ReactNode } from 'react'
import { Container } from '../../ui/mantine'
import './VacanciesLayout.css'

type VacanciesLayoutProps = {
  header: ReactNode
  cities: ReactNode
  skills: ReactNode
  vacancies: ReactNode
}

export function VacanciesLayout({
  header,
  cities,
  skills,
  vacancies,
}: VacanciesLayoutProps) {
  return (
    <Container size="lg">
      {header}
      {cities}

      <div className="vacancies-layout">
        {skills}
        {vacancies}
      </div>
    </Container>
  )
}