import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f2f2f2;
  // height 추후에 수정필요할지도
  height: 400px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  height: inherit;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

export const LeftBtn = styled.button`
  height: 100%;
  margin-left: 10px;
`;

export const RightBtn = styled.button`
  height: 100%;
  margin-right: 10px;
`;
