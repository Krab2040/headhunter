import type { FormEvent } from 'react'
import { Button, Text, TextInput, Title } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../store/jobsSlice'
import type { AppDispatch } from '../../store/store'
import './VacanciesHeader.css'

function VacanciesHeader() {
  const dispatch = useDispatch<AppDispatch>()
  const [searchValue, setSearchValue] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    dispatch(setSearch(searchValue.trim()))
  }

  return (
    <section className="vacancies-header">
      <div>
        <Title order={1} className="vacancies-header__title">
          Список вакансий
        </Title>

        <Text className="vacancies-header__subtitle">
          по профессии Frontend-разработчик
        </Text>
      </div>

      <form
        className="vacancies-header__search"
        onSubmit={handleSubmit}
      >
        <TextInput
          value={searchValue}
          onChange={(event) => setSearchValue(event.currentTarget.value)}
          className="vacancies-header__input"
          placeholder="Должность или название компании"
          leftSection={<IconSearch size={16} />}
        />

        <Button
          type="submit"
          className="vacancies-header__button"
        >
          Найти
        </Button>
      </form>
    </section>
  )
}

export default VacanciesHeader