import { 
  Flex,
  Heading
} from '@chakra-ui/react'

interface IHeader {
  nomeDaEmpresa: string;
}

export const Header  = ({nomeDaEmpresa}: IHeader) => {
  return(
    <Flex 
      as="header" 
      bg="white" 
      color="black" 
      p={5} 
      align="center" 
      justify="center"
      boxShadow="sm"
    >
      <Heading as="h1" size="lg">
        {nomeDaEmpresa}
      </Heading>
    </Flex>
  )
}
