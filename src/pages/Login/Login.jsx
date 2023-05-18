import Logo from "../../components/Logo/Logo";

import { StyledLogoImgLink } from "../../components/NavBar/NavBarStyle";
import { StyledHiddenLegend } from "../../components/NavBar/NavBarStyle";

import {
  StyledLoginWrapper,
  StyledLoginBtnWrapper,
  StyledBuyerLoginBtn,
  StyledSellerLoginBtn,
  StyledLoginForm,
  StyledLoginArea,
  StyledUserInput,
  StyledLoginBtn,
  StyledIsWrongText,
  StyledGoSignUpWrapper,
  StyledGoSignUp,
  StyledLoginHeader,
} from "./LoginStyle";

import { useState } from "react";

const Login = () => {
  const [buyerClicked, setBuyerClicked] = useState(true);
  const [sellerClicked, setSellerClicked] = useState(false);

  const handleBuyerClick = () => {
    setBuyerClicked(true);
    setSellerClicked(false);
  };

  const handleSellerClick = () => {
    setBuyerClicked(false);
    setSellerClicked(true);
  };

  return (
    <div>
      <StyledLoginHeader>
        <StyledLogoImgLink to="/">
          <Logo />
        </StyledLogoImgLink>
      </StyledLoginHeader>

      <StyledLoginWrapper>
        <StyledLoginBtnWrapper>
          <StyledBuyerLoginBtn clicked={buyerClicked} onClick={handleBuyerClick}>
            구매회원 로그인
          </StyledBuyerLoginBtn>
          <StyledSellerLoginBtn clicked={sellerClicked} onClick={handleSellerClick}>
            판매회원 로그인
          </StyledSellerLoginBtn>
        </StyledLoginBtnWrapper>

        <StyledLoginForm>
          <StyledLoginArea>
            <StyledHiddenLegend>로그인 페이지</StyledHiddenLegend>
            <StyledUserInput id="id" type="text" placeholder="아이디" required />

            <StyledUserInput id="pw" type="text" placeholder="비밀번호" required />

            <StyledIsWrongText>* 아이디 또는 비밀번호가 일치하지 않습니다.</StyledIsWrongText>

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
