import { useNavigate } from "react-router-dom";

import Logo from "../../components/Logo/Logo";
import { StyledLogoImgLink } from "../../components/NavBar/NavBarStyle";
import { StyledHiddenLegend } from "../../components/NavBar/NavBarStyle";
import {
  StyledLoginWrapper,
  StyledLoginForm,
  StyledLoginArea,
  StyledUserInput,
  StyledLoginBtn,
  StyledIsWrongText,
  StyledGoSignUpWrapper,
  StyledGoSignUp,
  StyledLoginHeader,
} from "./LoginStyle";

import { useRef, useState } from "react";
import { instance } from "../../api/axios";
import LoginOrSignupBtn from "../../components/LoginOrSignupBtn/LoginOrSignupBtn";

const Login = () => {
  const navigate = useNavigate();

  const userId = useRef(null);
  const userPw = useRef(null);

  const [role, setRole] = useState("BUYER");
  const [isWrong, setIsWrong] = useState(true);
  const [loginType, setLoginType] = useState(true);

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    console.log(newRole);
  };

  const handleUserLogin = async (e) => {
    e.preventDefault();

    const data = {
      id: userId.current.value,
      pw: userPw.current.value,
      type: role,
    };

    try {
      const res = await instance.post("/accounts/login/", {
        username: data.id,
        password: data.pw,
        login_type: data.type,
      });

      if (res.status !== 200) throw new Error("서버로부터의 통신에 실패하였습니다.");

      if (res.status === 200) {
        console.log("로그인 성공!!");
        setIsWrong(true);
        setLoginType(true);

        navigate("/");
      }
    } catch (err) {
      console.log(err.response.data.FAIL_Message);
      if (err.response.data.FAIL_Message === "로그인 정보가 없습니다.") {
        setIsWrong(false);
        setLoginType(true);
      } else if (err.response.data.FAIL_Message === "로그인 정보가 없습니다. 로그인 유형을 학인해주세요.") {
        setIsWrong(true);
        setLoginType(false);
      }
    }
  };

  return (
    <div>
      <StyledLoginHeader>
        <StyledLogoImgLink to="/">
          <Logo />
        </StyledLogoImgLink>
      </StyledLoginHeader>

      <StyledLoginWrapper>
        <LoginOrSignupBtn
          onRoleChange={handleRoleChange}
          singupOrLoginBuyer="구매회원 로그인"
          singupOrLoginSeller="판매회원 로그인"
        />

        <StyledLoginForm onSubmit={handleUserLogin}>
          <StyledLoginArea>
            <StyledHiddenLegend>로그인 페이지</StyledHiddenLegend>
            <StyledUserInput id="id" type="text" placeholder="아이디" required ref={userId} />

            <StyledUserInput id="pw" type="text" placeholder="비밀번호" required ref={userPw} />

            {isWrong ? null : <StyledIsWrongText>* 아이디 또는 비밀번호가 일치하지 않습니다.</StyledIsWrongText>}
            {loginType ? null : <StyledIsWrongText>* 로그인 유형을 확인해주세요.</StyledIsWrongText>}

            <StyledLoginBtn type="submit">로그인</StyledLoginBtn>
          </StyledLoginArea>
        </StyledLoginForm>
      </StyledLoginWrapper>
      <StyledGoSignUpWrapper>
        <StyledGoSignUp to="/signup">회원가입</StyledGoSignUp>
      </StyledGoSignUpWrapper>
    </div>
  );
};

export default Login;
