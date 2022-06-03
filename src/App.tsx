import styled from "@emotion/styled";
import React from "react";
import Sparkle from "react-sparkle";
import "./App.css";
import img0 from "./img/137_0.png";
import img1 from "./img/137_1.png";
import img2 from "./img/137_2.png";
import img3 from "./img/137_3.png";
import img4 from "./img/137_4.png";
import img5 from "./img/137_5.png";
import img6 from "./img/137_6.png";

const imgs = [img0, img1, img2, img3, img4, img5, img6];

const Background = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;
  animation: hue 8s infinite linear;

  @keyframes hue {
    0% {
      background-color: black;
    }
    25% {
      background-color: #10132f;
    }
    75% {
      background-color: #1a0828;
    }
    100% {
      background-color: black;
    }
  }
`;

const Title = styled.div`
  color: white;
  text-align: center;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6vh;
`;

const Text = styled.div`
  color: white;
  text-align: center;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6vh;
`;

const ImgDiv = styled.div`
  position: relative;
  height: 60%;
  width: min(60vh, 100vw);
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
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

const ImgContatiner = styled.div`
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

function App() {
  const mx_cnt = 6;
  const cnt = 2;
  const lastUpdate = new Date();
  return (
    <>
      <Background>
        <Sparkle
          count={50}
          fadeOutSpeed={10}
          flickerSpeed="slowest"
          overflowPx={0}
        />
        <div style={{ height: "10%" }} />
        <Title>동사몇?</Title>
        <ImgDiv>
          <ImgContatiner>
            {cnt <= mx_cnt ? (
              <Img src={imgs[cnt]} />
            ) : (
              <Img src={imgs[mx_cnt]} />
            )}
          </ImgContatiner>
        </ImgDiv>
        <Text>{cnt} 명</Text>
        <span>
          <>
            마지막 갱신: {lastUpdate.getMonth() + 1} 월 {lastUpdate.getDay()} 일{" "}
            {lastUpdate.getHours()} 시 {lastUpdate.getMinutes()} 분 {"->"}
          </>
        </span>
      </Background>
    </>
  );
}

export default App;
