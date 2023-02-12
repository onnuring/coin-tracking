import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const ChildBox = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
const Circle = styled(ChildBox)`
  border-radius: 50px;
`;
const Btn = styled.button`
  height: 20px;
  color: #999;
  background-color: bisque;
  border: 0;
  border-radius: 15px;
`;
const InputWrap = styled.div`
  border: 1px solid #ccc;
`;
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: #ccc;
`;

const Wrapper = styled.div`
  display: flex;
`;
const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0;
  }
`;

//이모지를 태그명에 의존하고 싶지 않을때
const Emoji = styled.span`
  font-size: 36px;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji}:hover {
    //컴포넌트 자체를 타겟팅 할 수 있음
    font-size: 50px;
  }
`;

function App() {
  return (
    <>
      <Father>
        <ChildBox bgColor="teal" />
        <Circle bgColor="tomato" />
        <Btn>Log in</Btn>
        <Btn as="a" href="/">
          컴포넌트의 태그 바꿈
        </Btn>
        <InputWrap>
          <Input />
          <Input />
          <Input />
          <Input />
        </InputWrap>
      </Father>
      <Wrapper>
        <Box>
          <Emoji as="p">😍</Emoji>
        </Box>
        <Emoji>🤡</Emoji>
      </Wrapper>
    </>
  );
}

export default App;
