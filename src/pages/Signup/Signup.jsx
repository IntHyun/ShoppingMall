import { useState } from "react";
import styled from "styled-components";
import {
  StyledLoginWrapper,
  StyledLoginBtnWrapper,
  StyledBuyerLoginBtn,
  StyledSellerLoginBtn,
  StyledLoginHeader,
} from "../Login/LoginStyle";
import { StyledHiddenLegend, StyledLogoImgLink } from "../../components/NavBar/NavBarStyle";
import Logo from "../../components/Logo/Logo";

import checkImgOn from "../../assets/icon-check-on.svg";
import checkImgOff from "../../assets/icon-check-off.svg";
import iconUpArrow from "../../assets/icon-up-arrow.svg";
import iconDownArrow from "../../assets/icon-down-arrow.svg";

const Signup = () => {
  const [buyerClicked, setBuyerClicked] = useState(true);
  const [buyerOrSeller, setBuyerOrSeller] = useState("BUYER");
  const [sellerClicked, setSellerClicked] = useState(false);

  const handleBuyerClick = () => {
    setBuyerClicked(true);
    setSellerClicked(false);
    setBuyerOrSeller("BUYER");
  };

  const handleSellerClick = () => {
    setBuyerClicked(false);
    setSellerClicked(true);
    setBuyerOrSeller("SELLER");
  };

  const StyledSignupForm = styled.form`
    position: relative;
    padding: 35px;
  `;

  const StyledSigunupIdWrapperDiv = styled.div`
    display: flex;
    margin: 10px 0px 42px 0px;
    gap: 12px;
  `;

  const StyledSignupCommonInput = styled.input`
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    padding: 10px 0 10px 2px;
  `;

  const StyledCheckIdText = styled.p`
    position: absolute;
    top: 110px;
    color: #21bf48;
    font-size: 12px;
  `;

  const StyledCheckPwText = styled(StyledCheckIdText)`
    top: 75px;
    color: #eb5757;
  `;

  const StyledSignupIdInput = styled(StyledSignupCommonInput)`
    width: 100%;
  `;

  const StyledSignupPwInput = styled(StyledSignupCommonInput)`
    margin: 10px 0 12px 0;
  `;

  const StyledSignupPwCheckInput = styled(StyledSignupPwInput)`
    margin-bottom: 42px;
    border-color: #eb5757;
  `;

  const StyledSignupNameCheckInput = styled(StyledSignupCommonInput)`
    margin: 10px 0 15px 0;
  `;

  const StyledSignupPHInput = styled(StyledSignupCommonInput)`
    margin: 10px 0 15px 0;
  `;

  const StyledSignupEmailInput = styled(StyledSignupCommonInput)`
    margin: 10px 0 0 0;
    width: 220px;
  `;

  const StyledSignupCommonLabel = styled.label`
    font-size: 14px;
    font-weight: 400;
    color: #767676;
  `;

  const StyledSignupIdCheckBtn = styled.button`
    width: 31%;
    padding: 0px 36px;
    border-radius: 5px;
    background-color: #21bf48;
    color: #fefefe;
  `;

  const StyledSignupFiledset = styled.fieldset`
    display: flex;
    flex-direction: column;
  `;

  const StyledSignupIdLabel = styled(StyledSignupCommonLabel)`
    display: block;
  `;

  const StyledPwWrapperDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
  `;

  const StyledCheckImg = styled.img`
    position: absolute;
    right: 0;
    top: 57.5%;
    bottom: 50%;
    transform: translate(-50%, -50%);
  `;

  const StyledCheckImgOff = styled(StyledCheckImg)`
    top: 41.5%;
  `;

  const StyledPHWrapperDiv = styled.div`
    display: flex;
    gap: 12px;
  `;

  const StyledEmailWrapperDiv = styled.div`
    position: relative;
    display: flex;
    gap: 11px;
  `;

  const StyledEtcSpan = styled.span`
    line-height: 51px;
    color: #767676;
  `;

  const StyledArrowBtnForDiv = styled.div`
    position: relative;
  `;

  const StyledArrowBtn = styled.button`
    position: absolute;
    top: 36%;
    bottom: 50%;
    transform: translate(-50%, -50%);
    left: 135px;
  `;

  const StyledPHListUl = styled.ul`
    position: absolute;
    height: 150px;
    overflow-y: scroll;
    top: 57px;
    width: 151px;
    border: 1px solid #767676;
    border-radius: 5px;
    background-color: #ffffff;
    z-index: 20;
  `;

  const StyledPHListLi = styled.li`
    text-align: center;
    padding: 10px;
  `;

  const StyledPHSelectBtn = styled.button`
    width: 100%;
  `;

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
            구매회원가입
          </StyledBuyerLoginBtn>
          <StyledSellerLoginBtn clicked={sellerClicked} onClick={handleSellerClick}>
            판매회원가입
          </StyledSellerLoginBtn>
        </StyledLoginBtnWrapper>

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
        </StyledSignupForm>
      </StyledLoginWrapper>
    </div>
  );
};

export default Signup;
