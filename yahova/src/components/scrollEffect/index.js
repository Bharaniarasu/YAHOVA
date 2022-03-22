import styled from "styled-components";

const Progress = styled.div`
  position: fixed;
  background: linear-gradient(
    to bottom,
    red ${(props) => props.scroll}%,
    transparent 0
  );
  width: 1px;
  height: 100%;
  z-index: 0;

  left: 49%;
`;

export default Progress;
