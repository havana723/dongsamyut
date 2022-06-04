import styled from "@emotion/styled";
import React from "react";
import img0 from ".././img/137_0.png";
import img1 from ".././img/137_1.png";
import img2 from ".././img/137_2.png";
import img3 from ".././img/137_3.png";
import img4 from ".././img/137_4.png";
import img5 from ".././img/137_5.png";
import img6 from ".././img/137_6.png";

const imgs = [img0, img1, img2, img3, img4, img5, img6];

interface Props {
  cnt: number;
}

const ImgDiv = styled.div`
  position: relative;
  height: 60%;
  width: min(60%, 100vw);
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.2);
    filter: drop-shadow(0px 0px 15px #407890);
  }
`;

const Img = styled.img`
  height: min(100%, 100vw);
  animation: floating 4s ease-in-out infinite;

  @keyframes floating {
    0% {
      transform: translate(0, 0vh);
    }
    50% {
      transform: translate(0, 3vh);
    }
    100% {
      transform: translate(0, -0vh);
    }
  }
`;

const ImgContainer = styled.div`
  height: min(70%, 100vw);
  animation: rotating 11s ease-in-out infinite;

  @keyframes rotating {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(8deg);
    }
    75% {
      transform: rotate(-8deg);
    }
    100% {
      transform: rotate(-0deg);
    }
  }
`;

const FloatingImage: React.FC<Props> = (props) => {
  const mx_cnt = 6;
  const cnt = props.cnt;
  return (
    <>
      <ImgDiv>
        <ImgContainer>
          {cnt <= mx_cnt ? <Img src={imgs[cnt]} /> : <Img src={imgs[mx_cnt]} />}
        </ImgContainer>
      </ImgDiv>
    </>
  );
};

export default FloatingImage;
