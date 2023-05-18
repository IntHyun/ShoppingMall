import Logo from "../../components/Logo/Logo";

import { StyledLogoImgLink } from "../../components/NavBar/NavBarStyle";

import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLoginHeader = styled.header`
  margin-top: 100px;
  margin-bottom: 70px;
`;

const StyledLoginForm = styled.form`
  width: 550px;
  height: 352px;
  margin: 0 auto;
  border: 1px solid gray;
  border-radius: 10px;
`;

const Login = () => {
  return (
    <div>
      <StyledLoginHeader>
        <StyledLogoImgLink to="/">
          <Logo />
        </StyledLogoImgLink>
      </StyledLoginHeader>

      <StyledLoginForm>
        <button>구매회원 로그인</button>
        <button>판매회원 로그인</button>

        <label htmlFor="id">아이디</label>
        <input id="id" type="text" />

        <label htmlFor="pw">비밀번호</label>
        <input id="pw" type="text" />
      </StyledLoginForm>
    </div>
  );
};

export default Login;
