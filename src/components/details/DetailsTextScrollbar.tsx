import styled from "styled-components";

const DetailsTextScrollbar = styled.div`
  background: #f5d9d8;
  color: #748899;
  border-radius: 8px;

  overflow-y: hidden;
  direction: rtl;

  &:hover {
    overflow-y: overlay;
  }

  ::-webkit-scrollbar {
    width: 4.5px;
    position: absolute;
  }

  ::-webkit-scrollbar-track {
    background: #fae1de;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: #f5d2ce;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #f5d9d8;
  }
`;

export default DetailsTextScrollbar;
