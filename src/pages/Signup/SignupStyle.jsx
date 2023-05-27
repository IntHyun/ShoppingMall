import styled from "styled-components";

export const SignupForm = styled.form`
  position: relative;
  /* padding: 35px 35px 35px 35px; */
`;

export const SigunupIdWrapperDiv = styled.div`
  display: flex;
  margin: 10px 0px 42px 0px;
  gap: 12px;
`;

export const SignupCommonInput = styled.input`
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  padding: 10px 0px 10px 5px;
  width: 100%;
`;

export const CheckIdText = styled.p`
  position: absolute;
  top: 110px;
  color: #21bf48;
  font-size: 12px;
`;

export const CheckPwText = styled(CheckIdText)`
  top: 75px;
  color: #eb5757;
`;

export const SignupIdInput = styled(SignupCommonInput)`
  width: 100%;
`;

export const SignupPwInput = styled(SignupCommonInput)`
  margin: 10px 0 12px 0;
`;

export const SignupPwCheckInput = styled(SignupPwInput)`
  margin-bottom: 42px;
  border-color: #eb5757;
`;

export const SignupNameCheckInput = styled(SignupCommonInput)`
  margin: 10px 0 15px 0;
`;

export const SignupPHInput = styled(SignupCommonInput)`
  margin: 10px 0 15px 0;
  flex-basis: content;
  flex-grow: 1;
`;

export const SignupEmailInput = styled(SignupCommonInput)`
  margin: 10px 0 0 0;
  /* width: 220px; */
`;

export const SignupCommonLabel = styled.label`
  font-size: 14px;
  font-weight: 400;
  color: #767676;
`;

export const SignupIdCheckBtn = styled.button`
  width: 31%;
  padding: 0px 36px;
  border-radius: 5px;
  background-color: #21bf48;
  color: #fefefe;
`;

export const SignupFiledset = styled.fieldset`
  display: flex;
  flex-direction: column;
  padding: 35px;
  border-left: 1px solid rgb(196, 196, 196);
  border-right: 1px solid rgb(196, 196, 196);
  border-bottom: 1px solid rgb(196, 196, 196);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const SignupIdLabel = styled(SignupCommonLabel)`
  display: block;
`;

export const PwWrapperDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const CheckImg = styled.img`
  position: absolute;
  right: 0;
  top: 57.5%;
  bottom: 50%;
  transform: translate(-50%, -50%);
`;

export const CheckImgOff = styled(CheckImg)`
  top: 41.5%;
`;

export const PHWrapperDiv = styled.div`
  display: flex;
  gap: 16.5px;
`;

export const EmailWrapperDiv = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
`;

export const EtcSpan = styled.span`
  line-height: 51px;
  color: #767676;
`;

export const ArrowBtnForDiv = styled.div`
  position: relative;
  display: flex;
`;

export const ArrowBtn = styled.button`
  position: absolute;
  top: 36%;
  bottom: 50%;
  transform: translate(-50%, -50%);
  left: 130px;
`;

export const PHListUl = styled.ul`
  position: absolute;
  height: 150px;
  overflow-y: scroll;
  top: 57px;
  width: 100%;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background-color: #ffffff;
  z-index: 20;
`;

export const PHListLi = styled.li`
  text-align: center;
  padding: 10px;
`;

export const PHSelectBtn = styled.button`
  width: 100%;
`;
