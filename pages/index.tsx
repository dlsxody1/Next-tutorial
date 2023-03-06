import styled from "styled-components";
import { useState } from "react";
import { UserProps } from "../shared/LoginTypes";
import Link from "next/link";
import { useRouter } from "next/router";
import SignUp from "./auth/SignUp";
import { loginRegex, passwordRegex } from "../regex/signRegex";

const Login = () => {
<<<<<<< HEAD
  //const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
=======
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const router = useRouter();
>>>>>>> 85efd6d4d711b7b185bfc689bf285a87b9202d81

  const [userData, setUserData] = useState({
    id: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const validateId = loginRegex.test(userData.id);

  const saveUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const goToDashBoard = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push("/dashboard");
  };
  const changeDisabled =
    validateId && userData.password.length >= 1
      ? buttonDisabled
      : !buttonDisabled;
  return (
    <Wrap>
      <SignTitle>Carlos Todo App</SignTitle>
      <SignWrap>
        <SignInContainer>
          <SignInTitle>어서오세요 !</SignInTitle>
          <SignInTitle>로그인하시고 할 일을 정리해보세요!</SignInTitle>

          <LoginInput
            onChange={saveUserData}
            type="text"
            placeholder="ididid@kiki.com"
            name="id"
          />
          <>
            {validateId ? (
              <SignCondition>올바른 이메일 형식입니다!</SignCondition>
            ) : (
              <NotSignCondition>이메일 형식이 다릅니다.</NotSignCondition>
            )}
          </>

          <PasswordInput
            onChange={saveUserData}
            type="password"
            placeholder="비밀번호"
            name="password"
          />
          <LoginButton
            style={{
              backgroundColor: buttonDisabled ? "red" : "white",
              cursor: buttonDisabled ? "not-allowed" : "pointer",
            }}
            disabled={changeDisabled}
            onClick={goToDashBoard}
          >
            Login
          </LoginButton>

          <SignUpLink href="/signup">회원가입</SignUpLink>
        </SignInContainer>
        <SignUpContainer></SignUpContainer>
      </SignWrap>
    </Wrap>
  );
};

export default Login;

const Wrap = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.lightmode};
  ${({ theme }) => theme.flexMixin("center", "center")}
  flex-direction: column;
`;

const SignTitle = styled.div`
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: bold;
`;
const SignWrap = styled.div`
  display: flex;
  border-radius: 10px;
  width: 780px;
  height: 500px;
`;

const SignInContainer = styled.div`
  ${({ theme }) => theme.flexMixin("center", "center")}
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px grey;
  width: 50%;
  height: 100%;
`;

const SignUpContainer = styled(SignInContainer)`
  background-color: ${({ theme }) => theme.mainColor};
  color: white;
`;

const SignInTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const LoginInput = styled.input`
  width: 300px;
  height: 40px;
  padding: 0 20px;
  margin-top: 20px;
  border-radius: 5px;
  border: 1px solid #808080;
  font-size: 15px;
`;
const PasswordInput = styled(LoginInput)``;

const LoginButton = styled.button`
  margin-top: 40px;
  ${({ theme }) => theme.flexMixin("center", "center")}
  width: 300px;
  height: 40px;
  padding: 0 20px;
  border-radius: 5px;
  border: 1px solid #808080;
  font-size: 18px;
`;

const NotSignCondition = styled.p`
  margin-top: 10px;
  color: red;
  font-size: 15px;
`;

const SignCondition = styled(NotSignCondition)`
  color: green;
`;

const SignUpLink = styled(Link)`
  margin-top: 20px;
  color: blueviolet;
`;
