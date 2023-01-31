import React from "react";
import styled from "styled-components";

const signup = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <SignupLabel>ID</SignupLabel>
          <IdInput type="text" />
        </div>
        <div>
          <SignupLabel>PASSWORD</SignupLabel>
          <PasswordInput type="password" />
        </div>

        <div>
          <SignupLabel>PASSCHECK</SignupLabel>
          <PasswordCheck type="password" />
        </div>
      </Container>
    </Wrapper>
  );
};

export default signup;

const Wrapper = styled.div`
  height: 600px;
  ${({ theme }) => theme.flexMixin("center", "center")};
`;

const Container = styled.div`
  flex-direction: row;
  border: 2px solid blue;
  width: 500px;
  height: 500px;
`;

const SignupLabel = styled.label`
  font-size: 15px;
`;
const IdInput = styled.input`
  border: 1px solid black;
`;

const PasswordInput = styled(IdInput)``;

const PasswordCheck = styled(IdInput)``;
