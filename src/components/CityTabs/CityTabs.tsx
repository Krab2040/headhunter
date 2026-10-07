import { Tabs } from '@mantine/core'
import { useDispatch, useSelector } from 'react-redux'
import { setCity } from '../../store/jobsSlice'
import type { AppDispatch, RootState } from '../../store/store'
import './CityTabs.css'

function CityTabs() {
  const dispatch = useDispatch<AppDispatch>()

  const city = useSelector(
    (state: RootState) => state.jobs.filters.city,
  )

  function handleCityChange(value: string | null) {
    if (value === 'all') {
      dispatch(setCity(''))
      return
    }

    if (value) {
      dispatch(setCity(value))
    }
  }

  return (
    <Tabs
      value={city || 'all'}
      onChange={handleCityChange}
      className="city-tabs"
      classNames={{
        list: 'city-tabs__list',
        tab: 'city-tabs__tab',
      }}
    >
      <Tabs.List>
        <Tabs.Tab value="all">
          Все
        </Tabs.Tab>

        <Tabs.Tab value="Москва">
          Москва
        </Tabs.Tab>

        <Tabs.Tab value="Санкт-Петербург">
          Санкт-Петербург
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  )
}

export default CityTabs