import { Anchor, Box, Group, IconUserCircle, Text } from '../../ui/mantine'
import Logo from '../../ui/Logo/Logo'
import './Header.css'

export function Header() {
  return (
    <Box component="header" className="header">
      <Group gap={10} className="header__logo">
        <Logo />

        <Text className="header__logo-text">
          .FrontEnd
        </Text>
      </Group>

      <Group gap={24} className="header__navigation">
        <Group gap={6}>
          <Anchor
            href="#vacancies"
            className="header__link"
          >
            Вакансии FE
          </Anchor>

          <Box className="header__active-dot" />
        </Group>

        <Group gap={6}>
          <IconUserCircle
            className="header__about-icon"
            size={16}
          />

          <Text className="header__link header__link--muted">
            Обо мне
          </Text>
        </Group>
      </Group>
    </Box>
  )
}