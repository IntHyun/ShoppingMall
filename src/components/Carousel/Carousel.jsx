import { StyledWrapper, StyledBtnWrapper, StyledLeftBtn, StyledRightBtn } from "./CarouselStyle";

import LeftBtnImg from "../../assets/icon-swiper-1.svg";
import RightBtnImg from "../../assets/icon-swiper-2.svg";

const Carousel = () => {
  return (
    <StyledWrapper>
      <StyledBtnWrapper>
        <StyledLeftBtn>
          <img src={LeftBtnImg} alt="" />
        </StyledLeftBtn>
        <StyledRightBtn>
          <img src={RightBtnImg} alt="" />
        </StyledRightBtn>
      </StyledBtnWrapper>
    </StyledWrapper>
  );
};

export default Carousel;
