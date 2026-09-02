import { 
  Center,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { login } from '../services/login'
interface ICard {
  id: number,
  paragraph: string,
  details: string
}

export const Card = ({ id, paragraph, details }: ICard) => {
  return(
    <div>
      <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <Input placeholder={paragraph} />
        <Input placeholder={details} />
        <Center>
          <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
            Button
          </Button>
        </Center>
      </Box>
    </div>
  )
}
