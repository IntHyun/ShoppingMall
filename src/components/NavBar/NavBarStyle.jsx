import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex;
  // 배경색은 후에 바꾸어야함
  background-color: beige;
  justify-content: space-around;
  height: 90px;
`;

export const StyledSearchWrapper = styled.fieldset`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledHidden = styled.legend`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;

export const StyledSearchInput = styled.input`
  height: 46px;
  min-width: 400px;
  border-radius: 50px;
  border: 2px solid #21bf48;
  padding-left: 22px;
`;

export const StyledSearchBtn = styled.button`
  position: absolute;
  right: 15px;
`;

export const StyledLogoImgLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLogoImg = styled.img`
  width: 124px;
`;

export const StyledLogoWrapper = styled.header`
  display: flex;
  gap: 30px;
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 26px;
`;

export const StyledLink = styled(Link)`
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledShoppingImg = styled.img`
  margin-right: 5px;
  width: 30px;
`;

export const StyledLoginImg = styled.img`
  width: 30px;
`;

export const StyledInfoText = styled.p`
  width: 48px;
  text-align: center;
  font-weight: 400;
  font-size: 11px;
  margin-top: 5px;
`;
