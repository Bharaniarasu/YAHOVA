import styled from "styled-components";

const Progress = styled.div`
  position: fixed;
  background: linear-gradient(
    to right,
    gold,
    red,
    yellow,
    red ${(props) => props.scroll}%,
    transparent 0
  );
  width: 101%;
  height: 10px;
  z-index: 2;
  opacity: 0.4;
  top: 100px;
`;

export default Progress;
