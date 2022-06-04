import styled from "@emotion/styled";
import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import Sparkle from "react-sparkle";
import "./App.css";
import FloatingImage from "./components/FloatingImage";
import Modal from "./components/modal";

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

const EditIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 8px;
  padding-right: 16px;
`;

function App() {
  const [cnt, setCnt] = useState(0);
  const lastUpdate = new Date();
  const [show, setShow] = useState(false);

  return (
    <>
      <Background>
        <Modal
          cnt={cnt}
          show={show}
          close={() => setShow(false)}
          update={setCnt}
        />
        <EditIcon onClick={() => setShow(true)}>
          <FiEdit size={24} />
        </EditIcon>
        <Sparkle
          count={50}
          fadeOutSpeed={10}
          flickerSpeed="slowest"
          overflowPx={0}
        />
        <div style={{ height: "10%" }} />
        <Title>동사몇?</Title>
        <FloatingImage cnt={cnt} />
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
