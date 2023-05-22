import { useState } from "react";

import {
  StyledLoginWrapper,
  StyledLoginBtnWrapper,
  StyledBuyerLoginBtn,
  StyledSellerLoginBtn,
} from "../Login/LoginStyle";

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

  return (
    <div>
      <StyledLoginWrapper>
        <StyledLoginBtnWrapper>
          <StyledBuyerLoginBtn clicked={buyerClicked} onClick={handleBuyerClick}>
            구매회원가입
          </StyledBuyerLoginBtn>
          <StyledSellerLoginBtn clicked={sellerClicked} onClick={handleSellerClick}>
            판매회원가입
          </StyledSellerLoginBtn>
        </StyledLoginBtnWrapper>
      </StyledLoginWrapper>
    </div>
  );
};

export default Signup;
