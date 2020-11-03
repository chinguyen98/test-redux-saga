import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

function SignInPage() {

  const schema = yup.object().shape({
    email: yup.string().email('Vui lòng nhập đúng định dạng email!').required('Vui lòng nhập email!'),
    password: yup.string().required('Vui lòng nhập password'),
  });

  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignIn = () => {
    console.log('Sign in!');
  }

  return (
    <Container>
      <Form
        onSubmit={handleSubmit(handleSignIn)}
      >
        <FormGroup>
          <Label for="email">
            Email
          </Label>
          <Input type="text" name="email" id="email" placeholder="Enter email!" innerRef={register} />
          <p className="text-danger">{errors.email?.message}</p>
        </FormGroup>
        <FormGroup>
          <Label for="password">
            Password
          </Label>
          <Input type="password" name="password" id="password" placeholder="Enter password!" innerRef={register} />
          <p className="text-danger">{errors.password?.message}</p>
        </FormGroup>
        <Button color="primary">Sign in</Button>
      </Form>
    </Container>
  )
}

export default SignInPage;