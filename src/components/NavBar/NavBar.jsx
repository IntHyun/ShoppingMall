import {
  Header,
  SearchWrapper,
  Hidden,
  SearchInput,
  SearchBtn,
  LogoImg,
  LogoWrapper,
  InfoWrapper,
  StyledLink,
  ShoppingImg,
  LoginImg,
  InfoText,
  LogoImgLink,
} from "./NavBarStyle";

import Logo from "../../assets/Logo-hodu.svg";
import ShoppingCart from "../../assets/icon-shopping-cart.svg";
import IconUser from "../../assets/icon-user.svg";
import SearchImg from "../../assets/search.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Header>
      <LogoWrapper>
        <LogoImgLink to="/">
          <LogoImg src={Logo} alt="로고 이미지" />
        </LogoImgLink>

        <SearchWrapper>
          <Hidden>검색</Hidden>
          <label htmlFor="search"></label>
          <SearchInput type="text" placeholder="상품을 검색해보세요!" />
          <SearchBtn type="button">
            <img src={SearchImg} alt="" />
          </SearchBtn>
        </SearchWrapper>
      </LogoWrapper>

      <InfoWrapper>
        <StyledLink to="/cart">
          <ShoppingImg src={ShoppingCart} alt="장바구니" />
          <InfoText>장바구니</InfoText>
        </StyledLink>
        <StyledLink to="/login">
          <LoginImg src={IconUser} alt="마이페이지" />
          <InfoText>로그인</InfoText>
        </StyledLink>
      </InfoWrapper>
    </Header>
  );
};

export default NavBar;
