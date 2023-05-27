import { useState } from "react";
import { StyledLoginWrapper, StyledLoginHeader } from "../Login/LoginStyle";
import { StyledHiddenLegend, StyledLogoImgLink } from "../../components/NavBar/NavBarStyle";
import Logo from "../../components/Logo/Logo";
import { Footer } from "../../components/Footer/Footer";
import LoginOrSignupBtn from "../../components/LoginOrSignupBtn/LoginOrSignupBtn";

import * as S from "./SignupStyle";

import checkImgOn from "../../assets/icon-check-on.svg";
import checkImgOff from "../../assets/icon-check-off.svg";
import iconUpArrow from "../../assets/icon-up-arrow.svg";
import iconDownArrow from "../../assets/icon-down-arrow.svg";

const Signup = () => {
  console.log(S);
  const [role, setRole] = useState("BUYER");

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    console.log(role);
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
          singupOrLoginSeller="판매회원가입"
          singupOrLoginBuyer="구매회원가입"
        />

        <S.SignupForm action="">
          <S.SignupFiledset>
            <StyledHiddenLegend>회원가입 페이지</StyledHiddenLegend>

            <S.SignupIdLabel>아이디</S.SignupIdLabel>
            <S.SigunupIdWrapperDiv>
              <S.SignupIdInput type="text" />
              <S.SignupIdCheckBtn type="button">중복확인</S.SignupIdCheckBtn>
            </S.SigunupIdWrapperDiv>

            <S.CheckIdText>멋진 아이디네요 !</S.CheckIdText>

            <S.PwWrapperDiv>
              <S.SignupCommonLabel>비밀번호</S.SignupCommonLabel>
              <S.CheckImg src={checkImgOff} />
              <S.SignupPwInput type="text" />
            </S.PwWrapperDiv>

            <S.PwWrapperDiv>
              <S.SignupCommonLabel>비밀번호 재확인</S.SignupCommonLabel>
              <S.CheckImgOff src={checkImgOn} />
              <S.SignupPwCheckInput type="text" />
              <S.CheckPwText>비밀번호가 일치하지 않습니다.</S.CheckPwText>
            </S.PwWrapperDiv>

            <S.SignupCommonLabel>이름</S.SignupCommonLabel>
            <S.SignupNameCheckInput type="text" />

            <S.SignupCommonLabel htmlFor="">휴대폰번호</S.SignupCommonLabel>

            <S.PHWrapperDiv>
              <S.ArrowBtnForDiv>
                <S.SignupPHInput type="text" />
                <S.ArrowBtn type="button">
                  <img src={iconDownArrow} alt="" />
                </S.ArrowBtn>
                <S.PHListUl>
                  <S.PHListLi>
                    <S.PHSelectBtn type="button">010</S.PHSelectBtn>
                  </S.PHListLi>
                  <S.PHListLi>
                    <S.PHSelectBtn type="button">011</S.PHSelectBtn>
                  </S.PHListLi>
                  <S.PHListLi>
                    <S.PHSelectBtn type="button">016</S.PHSelectBtn>
                  </S.PHListLi>
                  <S.PHListLi>
                    <S.PHSelectBtn type="button">017</S.PHSelectBtn>
                  </S.PHListLi>
                  <S.PHListLi>
                    <S.PHSelectBtn type="button">018</S.PHSelectBtn>
                  </S.PHListLi>
                </S.PHListUl>
              </S.ArrowBtnForDiv>

              <S.SignupPHInput type="text" />
              <S.SignupPHInput type="text" />
            </S.PHWrapperDiv>

            <S.SignupCommonLabel htmlFor="">이메일</S.SignupCommonLabel>

            <S.EmailWrapperDiv>
              <S.SignupPHInput type="text" />
              <S.EtcSpan>@</S.EtcSpan>
              <S.SignupPHInput type="text" />
            </S.EmailWrapperDiv>
          </S.SignupFiledset>

          <Footer />
        </S.SignupForm>
      </StyledLoginWrapper>
    </div>
  );
};

export default Signup;
