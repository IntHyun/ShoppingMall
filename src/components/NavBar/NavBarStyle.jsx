import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  // 배경색은 후에 바꾸어야함
  background-color: beige;
  justify-content: space-around;
  height: 90px;
`;

export const SearchWrapper = styled.fieldset`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Hidden = styled.legend`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  height: 46px;
  width: 400px;
  border-radius: 50px;
  border: 2px solid #21bf48;
  padding-left: 22px;
`;

export const SearchBtn = styled.button`
  position: absolute;
  right: 15px;
`;

export const LogoImg = styled.img`
  width: 124px;
`;

export const LogoWrapper = styled.header`
  display: flex;
  gap: 30px;
`;

export const InfoWrapper = styled.div`
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

export const ShoppingImg = styled.img`
  margin-right: 5px;
  width: 30px;
`;

export const LoginImg = styled.img`
  width: 30px;
`;

export const InfoText = styled.p`
  width: 48px;
  text-align: center;
  font-weight: 400;
  font-size: 11px;
  margin-top: 5px;
`;
