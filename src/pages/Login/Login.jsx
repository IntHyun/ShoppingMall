import Logo from "../../components/Logo/Logo";

import { StyledLogoImgLink } from "../../components/NavBar/NavBarStyle";
import { StyledHiddenLegend } from "../../components/NavBar/NavBarStyle";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const StyledLoginWrapper = styled.section`
  width: 550px;
  height: 352px;
  margin: 0 auto;
  border-left: 1px solid #c4c4c4;
  border-right: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
  border-radius: 10px;
`;

const StyledLoginHeader = styled.header`
  margin-top: 100px;
  margin-bottom: 70px;
`;

const StyledLoginBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
`;

const StyledBuyerLoginBtn = styled.button`
  background-color: ${(props) => (props.clicked ? props.color : "#F2F2F2")};
  border-top: 1px solid #c4c4c4;
  border-right: 1px solid #c4c4c4;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
  font-weight: 500;
`;

const StyledSellerLoginBtn = styled.button`
  background-color: ${(props) => (props.clicked ? props.color : "#F2F2F2")};
  border-left: 1px solid #c4c4c4;
  border-top: 1px solid #c4c4c4;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
  font-weight: 500;
`;

const StyledLoginForm = styled.form`
  border-radius: 10px;
  border-top: 1px solid #c4c4c4;
  padding: 35px;
`;

const StyledLoginArea = styled.fieldset`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledUserInput = styled.input`
  height: 38px;
  margin-bottom: 6px;
  border-bottom: 1px solid #c4c4c4;
`;

const StyledLoginBtn = styled.button`
  width: 100%;
  height: 60px;
  margin-top: 66px;
  border-radius: 5px;
  background-color: #21bf48;
  font-weight: 700;
  color: #fefefe;
`;

const StyledIsWrongText = styled.p`
  position: absolute;
  bottom: 90px;
  color: #eb5757;
  font-size: 12px;
`;

const StyledGoSignUpWrapper = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const StyledGoSignUp = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  color: #333333;
`;

const Login = () => {
  const [buyerClicked, setBuyerClicked] = useState(true);
  const [sellerClicked, setSellerClicked] = useState(false);

  const handleBuyerClick = () => {
    console.log(buyerClicked, sellerClicked);
    setBuyerClicked(true);
    setSellerClicked(false);
  };

  const handleSellerClick = () => {
    console.log(buyerClicked, sellerClicked);
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
