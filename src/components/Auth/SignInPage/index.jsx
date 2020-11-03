import React from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../../actions/user.action';

function SignInPage() {
  const dispatch = useDispatch();
  const isUserLoading = useSelector(state => state.user.isLoading);
  const userError = useSelector(state => state.user.error);

  const schema = yup.object().shape({
    email: yup.string().email('Vui lòng nhập đúng định dạng email!').required('Vui lòng nhập email!'),
    password: yup.string().required('Vui lòng nhập password'),
  });

  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignIn = (data) => {
    dispatch(signIn(data));
  }

  return (
    <Container>
      <Form
        onSubmit={handleSubmit(handleSignIn)}
      >
        <h1>Sign in form:</h1>
        <hr />
        {
          userError !== null && <Alert color="danger">{userError}</Alert>
        }
        <FormGroup>
          <Label for="email">
            Email
          </Label>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="Enter email!"
            innerRef={register}
            defaultValue="dacchi6761@gmail.com"
          />
          <p className="text-danger">{errors.email?.message}</p>
        </FormGroup>
        <FormGroup>
          <Label for="password">
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password!"
            innerRef={register}
            defaultValue="Aa12345"
          />
          <p className="text-danger">{errors.password?.message}</p>
        </FormGroup>
        <Button
          color={`${isUserLoading ? 'dark' : 'primary'}`}
          disabled={isUserLoading}
        >
          {`${isUserLoading ? 'Waiting......' : 'Sign in!'}`}
        </Button>
      </Form>
    </Container>
  )
}

export default SignInPage;