import React from "react";
import styled from "styled-components";
import { signUpApi } from "./api/authAPI";
import { authType } from "../types/authType";
import { useState } from "react";

const signup = () => {
  const [signData, setSignData] = useState<authType>({
    id: "",
    password: "",
    nickname: "",
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setSignData({ ...signData, [name]: value });
    console.log(signData);
  };
  const register = () => {
    signUpApi(signData);
  };

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <SignWrapper>
      <SignContainer>
        <SignForm onSubmit={formSubmit}>
          <SignDiv>
            <SignInput
              type="text"
              name="id"
              placeholder="id"
              onChange={onChangeInput}
            />
            {}
          </SignDiv>
          <SignDiv>
            <SignInput
              type="text"
              name="password"
              placeholder="password"
              onChange={onChangeInput}
            />
          </SignDiv>
          <SignDiv>
            <SignInput
              type="text"
              name="nickname"
              placeholder="nickname"
              onChange={onChangeInput}
            />
          </SignDiv>
          <SignButton onClick={register}>회원가입하기</SignButton>
        </SignForm>
      </SignContainer>
    </SignWrapper>
  );
};

export default signup;

const SignWrapper = styled.div`
  height: 100vh;
  ${({ theme }) => theme.flexMixin("center", "center")}
  flex-direction: c;
`;

const SignContainer = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 500px;
`;

const SignInput = styled.input`
  width: 300px;
  height: 30px;
  margin-bottom: 10px;
  border: 1px solid black;
`;

const SignForm = styled.form`
  padding: 20px;
`;

const SignDiv = styled.div`
  display: flex;
  margin: 10px 0 10px 0;
`;

const SignLabel = styled.label`
  margin-right: 10px;
`;
const SignButton = styled.button`
  border: 1px solid black;
  cursor: pointer;
`;
