import React from "react";
import styled from "styled-components";
const signup = () => {
  return (
    <SignWrapper>
      <SignContainer>
        <label>1</label>
        <SignInput type="text" />
      </SignContainer>
    </SignWrapper>
  );
};

export default signup;

const SignWrapper = styled.div`
  height: 100vh;
  ${({ theme }) => theme.flexMixin("center", "center")}
`;

const SignContainer = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 500px;
`;

const SignInput = styled.input`
  width: 300px;
  border: 1px solid black;
`;
