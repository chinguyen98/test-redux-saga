import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'reactstrap';

function Feeds() {
  const firstName = useSelector(state => state.user.firstName);

  return (
    <Container>
      <h1 className="text-success">Hello {firstName}!</h1>
    </Container>
  )
}

export default Feeds;