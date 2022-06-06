import styled from "@emotion/styled";
import axios from "axios";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp, FiX } from "react-icons/fi";

interface Props {
  cnt: number;
  show: boolean;
  close: () => void;
  update: (input: number) => void;
}

const ModalOveray = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  width: min(480px, 80vw);
  height: min(640px, 60vh);
  background: #000000;
  border: 1px solid white;
`;

const ModalBody = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const ModalHeader = styled.div`
  border-bottom: 1px solid white;
  padding: 0;
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 4px;
  padding-right: 16px;
`;

const Icon = styled.div`
  height: 10%;
`;

const NumContainer = styled.div`
  height: 30%;
  font-size: min(160px, 15vh);
  line-height: 120px;
`;

const SubmitButton = styled.button`
  background: #aeaeae;
  width: 48px;
  height: 32px;
  line-height: 0px;
  border-top: 2px solid white;
  border-left: 2px solid white;
  border-bottom: 2px solid black;
  border-right: 2px solid black;

  &:active {
    background: #7b7b7b;
    border-top: 2px solid black;
    border-left: 2px solid black;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
  }
`;

const post = (input: number) => {
  axios
    .post("/history", {
      cnt: input,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const Modal: React.FC<Props> = (props) => {
  const [input, setInput] = useState(props.cnt);

  return (
    <>
      {props.show ? (
        <ModalOveray>
          <ModalContent>
            <CloseIcon onClick={props.close}>
              <FiX size={24} />
            </CloseIcon>
            <ModalHeader>동사몇?</ModalHeader>
            <ModalBody>
              <Icon onClick={() => setInput(input + 1)}>
                <FiChevronUp size={48} />
              </Icon>
              <NumContainer>
                <span>{input}</span>
              </NumContainer>
              <Icon onClick={() => setInput(Math.max(0, input - 1))}>
                <FiChevronDown size={48} />
              </Icon>
              <div style={{ width: "10%" }} />
              <SubmitButton
                onClick={() => {
                  post(input);
                  props.update(input);
                  props.close();
                }}
              >
                <span style={{ top: 0 }}>확인</span>
              </SubmitButton>
            </ModalBody>
          </ModalContent>
        </ModalOveray>
      ) : null}
    </>
  );
};

export default Modal;
