import {
  StyledHeader,
  StyledSearchWrapper,
  StyledHiddenLegend,
  StyledSearchInput,
  StyledSearchBtn,
  StyledLogoWrapper,
  StyledInfoWrapper,
  StyledLink,
  StyledShoppingImg,
  StyledLoginImg,
  StyledInfoText,
  StyledLogoImgLink,
} from "./NavBarStyle";

import Logo from "../Logo/Logo";
import ShoppingCart from "../../assets/icon-shopping-cart.svg";
import IconUser from "../../assets/icon-user.svg";
import SearchImg from "../../assets/search.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <StyledHeader>
      <StyledLogoWrapper>
        <StyledLogoImgLink to="/">
          <Logo />
        </StyledLogoImgLink>

        <StyledSearchWrapper>
          <StyledHiddenLegend>검색</StyledHiddenLegend>
          <label htmlFor="search"></label>
          <StyledSearchInput type="text" placeholder="상품을 검색해보세요!" />
          <StyledSearchBtn type="button">
            <img src={SearchImg} alt="" />
          </StyledSearchBtn>
        </StyledSearchWrapper>
      </StyledLogoWrapper>

      <StyledInfoWrapper>
        <StyledLink to="/cart">
          <StyledShoppingImg src={ShoppingCart} alt="장바구니" />
          <StyledInfoText>장바구니</StyledInfoText>
        </StyledLink>
        <StyledLink to="/login">
          <StyledLoginImg src={IconUser} alt="마이페이지" />
          <StyledInfoText>로그인</StyledInfoText>
        </StyledLink>
      </StyledInfoWrapper>
    </StyledHeader>
  );
};

export default NavBar;
