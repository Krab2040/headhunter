export type Vacancy = {
  id: number
  title: string
  salary: string
  experience: string
  employment: string
  employmentType: 'remote' | 'office' | 'hybrid'
  company: string
  city: string
}