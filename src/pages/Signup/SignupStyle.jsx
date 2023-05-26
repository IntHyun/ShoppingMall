import styled from "styled-components";

export const StyledSignupForm = styled.form`
  position: relative;
  /* padding: 35px 35px 35px 35px; */
`;

export const StyledSigunupIdWrapperDiv = styled.div`
  display: flex;
  margin: 10px 0px 42px 0px;
  gap: 12px;
`;

export const StyledSignupCommonInput = styled.input`
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  padding: 10px 0px 10px 5px;
  width: 100%;
`;

export const StyledCheckIdText = styled.p`
  position: absolute;
  top: 110px;
  color: #21bf48;
  font-size: 12px;
`;

export const StyledCheckPwText = styled(StyledCheckIdText)`
  top: 75px;
  color: #eb5757;
`;

export const StyledSignupIdInput = styled(StyledSignupCommonInput)`
  width: 100%;
`;

export const StyledSignupPwInput = styled(StyledSignupCommonInput)`
  margin: 10px 0 12px 0;
`;

export const StyledSignupPwCheckInput = styled(StyledSignupPwInput)`
  margin-bottom: 42px;
  border-color: #eb5757;
`;

export const StyledSignupNameCheckInput = styled(StyledSignupCommonInput)`
  margin: 10px 0 15px 0;
`;

export const StyledSignupPHInput = styled(StyledSignupCommonInput)`
  margin: 10px 0 15px 0;
  flex-basis: content;
  flex-grow: 1;
`;

export const StyledSignupEmailInput = styled(StyledSignupCommonInput)`
  margin: 10px 0 0 0;
  /* width: 220px; */
`;

export const StyledSignupCommonLabel = styled.label`
  font-size: 14px;
  font-weight: 400;
  color: #767676;
`;

export const StyledSignupIdCheckBtn = styled.button`
  width: 31%;
  padding: 0px 36px;
  border-radius: 5px;
  background-color: #21bf48;
  color: #fefefe;
`;

export const StyledSignupFiledset = styled.fieldset`
  display: flex;
  flex-direction: column;
  padding: 35px;
  border-left: 1px solid rgb(196, 196, 196);
  border-right: 1px solid rgb(196, 196, 196);
  border-bottom: 1px solid rgb(196, 196, 196);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const StyledSignupIdLabel = styled(StyledSignupCommonLabel)`
  display: block;
`;

export const StyledPwWrapperDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StyledCheckImg = styled.img`
  position: absolute;
  right: 0;
  top: 57.5%;
  bottom: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledCheckImgOff = styled(StyledCheckImg)`
  top: 41.5%;
`;

export const StyledPHWrapperDiv = styled.div`
  display: flex;
  gap: 16.5px;
`;

export const StyledEmailWrapperDiv = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
`;

export const StyledEtcSpan = styled.span`
  line-height: 51px;
  color: #767676;
`;

export const StyledArrowBtnForDiv = styled.div`
  position: relative;
  display: flex;
`;

export const StyledArrowBtn = styled.button`
  position: absolute;
  top: 36%;
  bottom: 50%;
  transform: translate(-50%, -50%);
  left: 130px;
`;

export const StyledPHListUl = styled.ul`
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

export const StyledPHListLi = styled.li`
  text-align: center;
  padding: 10px;
`;

export const StyledPHSelectBtn = styled.button`
  width: 100%;
`;
