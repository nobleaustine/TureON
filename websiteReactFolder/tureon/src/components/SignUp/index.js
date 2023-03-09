import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormButton, Text, FormInput, FormLabel} from './SignupElements'

const SignIn = () => {
  return (
    <>
     <Container>
        <FormWrap>
         <Icon to="/"> TureON</Icon>
         <FormContent>
          <Form action = "#">
            <FormH1>Create new Account</FormH1>
            <FormLabel htmlFor='for'>Username</FormLabel>
            <FormInput type='name' required />
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput type='email' required />
            <FormLabel htmlFor = 'for'>Password</FormLabel>
            <FormInput type='password' required />
            <FormLabel htmlFor = 'for'>Confirm Password</FormLabel>
            <FormInput type='conpassword' required />
            <FormButton type='submit'>Sign Up</FormButton>
            <Text>Forgot password</Text>
          </Form>
         </FormContent>
        </FormWrap>
     </Container>
    </>
  )
}


export default SignIn