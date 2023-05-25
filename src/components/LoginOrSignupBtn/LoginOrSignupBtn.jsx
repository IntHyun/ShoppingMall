import { StyledLoginOrSignupBtnWrapper, StyledBuyerBtn, StyledSellerBtn } from "./LoginOrSignupBtnStyle";
import { useState } from "react";

const LoginOrSignupBtn = ({ singupOrLoginBuyer, singupOrLoginSeller, onRoleChange }) => {
  const [buyerClicked, setBuyerClicked] = useState(true);
  const [buyerOrSeller, setBuyerOrSeller] = useState("BUYER");
  const [sellerClicked, setSellerClicked] = useState(false);

  const handleBuyerClick = () => {
    setBuyerClicked(true);
    setSellerClicked(false);
    setBuyerOrSeller("BUYER");
    onRoleChange("BUYER");
  };

  const handleSellerClick = () => {
    setBuyerClicked(false);
    setSellerClicked(true);
    setBuyerOrSeller("SELLER");
    onRoleChange("SELLER");
  };

  return (
    <StyledLoginOrSignupBtnWrapper>
      <StyledBuyerBtn clicked={buyerClicked} onClick={handleBuyerClick}>
        {singupOrLoginBuyer}
      </StyledBuyerBtn>
      <StyledSellerBtn clicked={sellerClicked} onClick={handleSellerClick}>
        {singupOrLoginSeller}
      </StyledSellerBtn>
    </StyledLoginOrSignupBtnWrapper>
  );
};

export default LoginOrSignupBtn;
