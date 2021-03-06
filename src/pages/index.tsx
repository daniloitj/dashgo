import { Flex, Button, Stack, FormControl, FormLabel } from '@chakra-ui/react'
import { SubmitHandler,useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../components/Form/Input'
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { withSSRGuest } from '../services/utils/withSSRGuest';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail é obrigatório").email("O formato do e-mail é inválido"),
  password: yup.string().required("A senha é obrigatória"),
})

export default function SignIn() {
  const { signIn } = useContext(AuthContext)
  
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignin: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    await signIn(values);
  }

  const { errors } = formState

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
    >
        <Flex
          as="form"
          width="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
          onSubmit={handleSubmit(handleSignin)}
        >
            <Stack spacing="4">
              <Input 
                name="email" 
                type="email" 
                label="E-mail" 
                error={errors.email}
                {...register('email')}
              />
              <Input 
                name="password" 
                type="password" 
                label="Senha" 
                error={errors.password}
                {...register('password')}
              />
            </Stack>

            <Button 
              type="submit" 
              mt="6" 
              colorScheme="pink" 
              isLoading={formState.isSubmitting}  
            >
                Entrar
              </Button>
          </Flex>
    </Flex>
  )
}


export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props:{}
  }
});