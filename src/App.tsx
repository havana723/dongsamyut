import styled from "@emotion/styled";
import React from "react";
import Sparkle from "react-sparkle";
import "./App.css";

const imgs = [
  "./img/137_0.png",
  "./img/137_1.png",
  "./img/137_2.png",
  "./img/137_3.png",
  "./img/137_4.png",
  "./img/137_5.png",
  "./img/137_6.png",
];

const Background = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;
  overflow: hidden;
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
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6vh;
`;

const Text = styled.div`
  color: white;
  text-align: center;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6vh;
`;

const ImgDiv = styled.div`
  position: relative;
  height: 60vh;
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
  }
`;

const Img = styled.img`
  height: min(40vh, 100vw);
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
        <div style={{ height: "10vh" }} />
        <Title>동사몇?</Title>
        <ImgDiv>
          {cnt <= mx_cnt ? <Img src={imgs[cnt]} /> : <Img src={imgs[mx_cnt]} />}
        </ImgDiv>
        <Text>{cnt} 명</Text>
        <span>
          <>
            마지막 갱신: {lastUpdate.getMonth() + 1} 월 {lastUpdate.getDay()} 일{" "}
            {lastUpdate.getHours()} 시 {lastUpdate.getMinutes()} 분
          </>
        </span>
      </Background>
    </>
  );
}

export default App;
