import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
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
  // null일 경우 로드되기 전으로 간주
  const [cnt, setCnt] = useState<number | null>(null);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  function setCntLocal(count: number) {
    setCnt(count);
    setLastUpdate(new Date());
  }

  useEffect(() => {
    axios
      .get<{ cnt: number }>("/howmany")
      .then((res) => {
        setCnt(res.data.cnt);
      })
      .catch((err) => {
        setCnt(0);
      });
    axios
      .get<{ update: string }>("/lastupdate")
      .then((res) => {
        setLastUpdate(new Date(res.data.update));
      })
      .catch((err) => {
        setLastUpdate(new Date());
      });
    // 좀 비효율적이긴 하지만 귀찮아서 토큰을 localStorage에 따로 저장하지 않고 페이지 접속시마다 요청
    axios
      .get<{ token: string }>("/auth")
      .then((res) => {
        setToken(res.data.token);
      })
      .catch(() => { /** noop */})
  }, []);

  return (
    <>
      <Background>
        <Modal
          cnt={cnt ?? 0}
          show={show}
          close={() => setShow(false)}
          update={setCntLocal}
          token={token ?? ''}
        />
        {token && (
          <EditIcon onClick={() => setShow(true)}>
            <FiEdit size={24} />
          </EditIcon>
        )}
        <Sparkle
          count={50}
          fadeOutSpeed={10}
          flickerSpeed="slowest"
          overflowPx={0}
        />
        <div style={{ height: "10%" }} />
        <Title>동사몇?</Title>
        <FloatingImage cnt={cnt ?? 0} />
        {cnt !== null && (
          <>
            <Text>{cnt} 명</Text>
            <span>
              <>
                마지막 갱신: {lastUpdate.getMonth() + 1} 월 {lastUpdate.getDate()}{" "}
                일 {lastUpdate.getHours()} 시 {lastUpdate.getMinutes()} 분
              </>
            </span>
          </>
        )}
      </Background>
    </>
  );
}

export default App;
