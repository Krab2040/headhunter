import { Tabs } from '../../ui/mantine'
import './CityTabs.css'

type CityTabsProps = {
  city: string
  onCityChange: (city: string) => void
}

export function CityTabs({ city, onCityChange }: CityTabsProps) {

  function handleCityChange(value: string | null) {
    if (value === 'all') {
      onCityChange('')
      return
    }

    if (value) {
      onCityChange(value)
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