import styled from "styled-components";
import { useState } from "react";
import { StyledLoginWrapper, StyledLoginHeader } from "../Login/LoginStyle";
import { StyledHiddenLegend, StyledLogoImgLink } from "../../components/NavBar/NavBarStyle";
import Logo from "../../components/Logo/Logo";
import { Footer } from "../../components/Footer/Footer";
import LoginOrSignupBtn from "../../components/LoginOrSignupBtn/LoginOrSignupBtn";
import {
  StyledSignupForm,
  StyledSigunupIdWrapperDiv,
  StyledCheckIdText,
  StyledCheckPwText,
  StyledSignupIdInput,
  StyledSignupPwInput,
  StyledSignupPwCheckInput,
  StyledSignupNameCheckInput,
  StyledSignupPHInput,
  StyledSignupEmailInput,
  StyledSignupCommonLabel,
  StyledSignupIdCheckBtn,
  StyledSignupFiledset,
  StyledSignupIdLabel,
  StyledPwWrapperDiv,
  StyledCheckImg,
  StyledCheckImgOff,
  StyledPHWrapperDiv,
  StyledEmailWrapperDiv,
  StyledEtcSpan,
  StyledArrowBtnForDiv,
  StyledArrowBtn,
  StyledPHListUl,
  StyledPHListLi,
  StyledPHSelectBtn,
} from "./SignupStyle";

import checkImgOn from "../../assets/icon-check-on.svg";
import checkImgOff from "../../assets/icon-check-off.svg";
import iconUpArrow from "../../assets/icon-up-arrow.svg";
import iconDownArrow from "../../assets/icon-down-arrow.svg";

const Signup = () => {
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

        <StyledSignupForm action="">
          <StyledSignupFiledset>
            <StyledHiddenLegend>회원가입 페이지</StyledHiddenLegend>

            <StyledSignupIdLabel>아이디</StyledSignupIdLabel>
            <StyledSigunupIdWrapperDiv>
              <StyledSignupIdInput type="text" />
              <StyledSignupIdCheckBtn type="button">중복확인</StyledSignupIdCheckBtn>
            </StyledSigunupIdWrapperDiv>

            <StyledCheckIdText>멋진 아이디네요 !</StyledCheckIdText>

            <StyledPwWrapperDiv>
              <StyledSignupCommonLabel>비밀번호</StyledSignupCommonLabel>
              <StyledCheckImg src={checkImgOff} />
              <StyledSignupPwInput type="text" />
            </StyledPwWrapperDiv>

            <StyledPwWrapperDiv>
              <StyledSignupCommonLabel>비밀번호 재확인</StyledSignupCommonLabel>
              <StyledCheckImgOff src={checkImgOn} />
              <StyledSignupPwCheckInput type="text" />
              <StyledCheckPwText>비밀번호가 일치하지 않습니다.</StyledCheckPwText>
            </StyledPwWrapperDiv>

            <StyledSignupCommonLabel>이름</StyledSignupCommonLabel>
            <StyledSignupNameCheckInput type="text" />

            <StyledSignupCommonLabel htmlFor="">휴대폰번호</StyledSignupCommonLabel>

            <StyledPHWrapperDiv>
              <StyledArrowBtnForDiv>
                <StyledSignupPHInput type="text" />
                <StyledArrowBtn type="button">
                  <img src={iconDownArrow} alt="" />
                </StyledArrowBtn>
                <StyledPHListUl>
                  <StyledPHListLi>
                    <StyledPHSelectBtn type="button">010</StyledPHSelectBtn>
                  </StyledPHListLi>
                  <StyledPHListLi>
                    <StyledPHSelectBtn type="button">011</StyledPHSelectBtn>
                  </StyledPHListLi>
                  <StyledPHListLi>
                    <StyledPHSelectBtn type="button">016</StyledPHSelectBtn>
                  </StyledPHListLi>
                  <StyledPHListLi>
                    <StyledPHSelectBtn type="button">017</StyledPHSelectBtn>
                  </StyledPHListLi>
                  <StyledPHListLi>
                    <StyledPHSelectBtn type="button">018</StyledPHSelectBtn>
                  </StyledPHListLi>
                </StyledPHListUl>
              </StyledArrowBtnForDiv>

              <StyledSignupPHInput type="text" />
              <StyledSignupPHInput type="text" />
            </StyledPHWrapperDiv>

            <StyledSignupCommonLabel htmlFor="">이메일</StyledSignupCommonLabel>

            <StyledEmailWrapperDiv>
              <StyledSignupEmailInput type="text" />
              <StyledEtcSpan>@</StyledEtcSpan>
              <StyledSignupEmailInput type="text" />
            </StyledEmailWrapperDiv>
          </StyledSignupFiledset>

          <Footer />
        </StyledSignupForm>
      </StyledLoginWrapper>
    </div>
  );
};

export default Signup;
