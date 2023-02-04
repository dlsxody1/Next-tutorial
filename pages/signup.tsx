import React, { useState } from "react";
import styled from "styled-components";
import { loginRegex, passwordRegex } from "../regex/signRegex";
import useInput from "../hooks/useInput";

const signup = () => {
  const [signUpData, setSignUpData] = useState({
    id: "",
    password: "",
  });

  const [{ id, password }, onChangeData, reset] = useInput({
    id: "",
    password: "",
  });

  const validateId = loginRegex.test(id);

  return (
    <Wrapper>
      <Container>
        <SignUpForm>
          <SignupLabel>ID</SignupLabel>
          <IdInput type="text" onChange={onChangeData} />
          <>
            {validateId ? (
              <SignCondition>올바른 이메일 형식입니다!</SignCondition>
            ) : (
              <NotSignCondition>이메일 형식이 다릅니다.</NotSignCondition>
            )}
          </>
          <SignupLabel>PASSWORD</SignupLabel>
          <PasswordInput type="password" />
          <SignupLabel>PASSCHECK</SignupLabel>
          <PasswordCheck type="password" />
          <SignUpButton>회원가입 완료</SignUpButton>
        </SignUpForm>
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

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const SignupLabel = styled.label`
  font-size: 15px;
`;

const SignUpButton = styled.button`
  border: 1px solid black;
  width: 100px;
`;

const IdInput = styled.input.attrs({ placeholder: "Enter" })`
  width: 50%;
  border: 1px solid black;
  margin: 20px;
`;

const PasswordInput = styled(IdInput)``;

const PasswordCheck = styled(IdInput)``;

const NotSignCondition = styled.p`
  width: 50%;
  margin-top: 0 20px;
  color: red;
  font-size: 15px;
`;

const SignCondition = styled(NotSignCondition)`
  color: green;
`;
