import styled from "styled-components";

const DetailsSidebarWithScrollContainer = styled.div`
  max-height: 350px;
  overflow-y: hidden;
  border-radius: 6px;

  &:hover {
    overflow-y: overlay;
  }

  ::-webkit-scrollbar {
    width: 6px;
    position: absolute;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #fdc6bf;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #fab5ac;
  }
`;

export default DetailsSidebarWithScrollContainer;
