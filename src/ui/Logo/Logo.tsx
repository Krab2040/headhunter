import { Image } from '../mantine'
import logoImage from './hh-logo.png'

function Logo() {
  return (
    <Image
      src={logoImage}
      alt="HeadHunter"
      w={32}
      h={32}
    />
  )
}

export default Logo
