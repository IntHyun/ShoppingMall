import { Wrapper, BtnWrapper, LeftBtn, RightBtn } from "./CarouselStyle";

import LeftBtnImg from "../../assets/icon-swiper-1.svg";
import RightBtnImg from "../../assets/icon-swiper-2.svg";

const Carousel = () => {
  return (
    <Wrapper>
      <BtnWrapper>
        <LeftBtn>
          <img src={LeftBtnImg} alt="" />
        </LeftBtn>
        <RightBtn>
          <img src={RightBtnImg} alt="" />
        </RightBtn>
      </BtnWrapper>
    </Wrapper>
  );
};

export default Carousel;
