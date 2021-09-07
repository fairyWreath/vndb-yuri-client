import styled from "styled-components";

const DetailsSidebarWithScrollContainer = styled.div`
  overflow-y: hidden;
  border-radius: 6px;
  max-height: 400px;

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
    background: #f5d9d8;
  }
`;

export default DetailsSidebarWithScrollContainer;
