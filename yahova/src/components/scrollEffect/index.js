import styled from "styled-components";

const Progress = styled.div`
  position: fixed;
  background: linear-gradient(
    to bottom,
    gold,
    red,
    yellow,
    red ${(props) => props.scroll}%,
    transparent 0
  );
  width: 5px;
  height: 100%;
  z-index: 1;
  opacity: 0.4;

  left: 49%;
`;

export default Progress;
