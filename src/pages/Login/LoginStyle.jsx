import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLoginWrapper = styled.section`
  width: 550px;
  height: 100%;
  margin: 0 auto;
  border-left: 1px solid #c4c4c4;
  border-right: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
  border-radius: 10px;
`;

export const StyledLoginHeader = styled.header`
  margin-top: 70px;
  margin-bottom: 70px;
`;

export const StyledLoginBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
`;

export const StlyedBuyerOrSeller = styled.button`
  background-color: ${(props) => (props.clicked ? props.color : "#f2f2f2")};
  border-bottom: ${(props) => (props.clicked ? props.bottom : "1px solid #c4c4c4")};
  border-top: 1px solid #c4c4c4;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
  font-weight: 500;
`;

export const StyledBuyerLoginBtn = styled(StlyedBuyerOrSeller)`
  border-right: 1px solid #c4c4c4;
`;

export const StyledSellerLoginBtn = styled(StlyedBuyerOrSeller)`
  border-left: 1px solid #c4c4c4;
`;

export const StyledLoginForm = styled.form`
  border-radius: 10px;
  padding: 35px;
`;

export const StyledLoginArea = styled.fieldset`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const StyledUserInput = styled.input`
  padding: 13px 0 13px 2px;
  margin-bottom: 6px;
  border-bottom: 1px solid #c4c4c4;
`;

export const StyledLoginBtn = styled.button`
  width: 100%;
  height: 60px;
  margin-top: 66px;
  border-radius: 5px;
  background-color: #21bf48;
  font-weight: 700;
  color: #fefefe;
`;

export const StyledIsWrongText = styled.p`
  position: absolute;
  bottom: 90px;
  color: #eb5757;
  font-size: 12px;
`;

export const StyledGoSignUpWrapper = styled.div`
  margin-top: 30px;
  text-align: center;
`;

export const StyledGoSignUp = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  color: #333333;
`;
