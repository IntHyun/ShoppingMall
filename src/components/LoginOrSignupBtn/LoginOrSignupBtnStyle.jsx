import styled from "styled-components";

export const StlyedBuyerOrSeller = styled.button`
  background-color: ${(props) => (props.clicked ? props.color : "#f2f2f2")};
  border-bottom: ${(props) => (props.clicked ? props.bottom : "1px solid #c4c4c4")};
  border-top: 1px solid #c4c4c4;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
  font-weight: 500;
`;

export const StyledLoginOrSignupBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
`;

export const StyledBuyerBtn = styled(StlyedBuyerOrSeller)`
  border-right: 1px solid #c4c4c4;
  border-left: 1px solid #c4c4c4;
`;

export const StyledSellerBtn = styled(StlyedBuyerOrSeller)`
  border-left: 1px solid #c4c4c4;
  border-right: 1px solid #c4c4c4;
`;
