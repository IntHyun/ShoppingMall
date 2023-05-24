import { StyledSignupFooter, StyledAgreeWrapperDiv, StyledSignupBtn, StyledArgreeText } from "./FooterStyle";

export const Footer = () => {
  return (
    <StyledSignupFooter>
      <StyledAgreeWrapperDiv>
        <input type="checkbox" />
        <StyledArgreeText>호두샵의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고 동의합니다.</StyledArgreeText>
      </StyledAgreeWrapperDiv>
      <StyledSignupBtn>가입하기</StyledSignupBtn>
    </StyledSignupFooter>
  );
};
