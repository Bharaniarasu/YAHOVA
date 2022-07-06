import styled from "styled-components";

const Progress = styled.div`
  position: fixed;
  background: linear-gradient(
    to right,
    gold,
    orange,
    red ${(props) => props.scroll}%,
    transparent 0
  );
  width: 101%;
  height: 5px;
  z-index: 2;
  opacity: 0.9;
  top: 0px;
`;

export default Progress;
