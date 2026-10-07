import { Anchor, Box, Group, Image, Text } from '@mantine/core'
import { IconUserCircle } from '@tabler/icons-react'
import logoImage from '../../assets/hh-logo.png'
import './Header.css'

function Header() {
  return (
    <Box component="header" className="header">
      <Group gap={10} className="header__logo">
        <Image
          src={logoImage}
          alt="HeadHunter"
          w={32}
          h={32}
        />

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

export default Header
