import Link from 'next/link'
import { Center } from "../Center"
import { Container, Logo } from "./style"

export const Header = () => {
  return (
    <Container>
      <Center>
        <Logo>
          <Link href="/">
            <a>What next</a>
          </Link>
        </Logo>
      </Center>
      
    </Container>
  )
}

