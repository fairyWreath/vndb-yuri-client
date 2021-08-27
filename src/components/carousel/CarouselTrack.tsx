import styled from "styled-components";

interface StyledTrackProps {
  slideWidth: number;
  slideIndex: number;
  children?: React.ReactNode;
}

const StyledTrack = styled.div<StyledTrackProps>`
  transform: translate3d(
    ${(props) => props.slideWidth * -props.slideIndex}vw,
    0,
    0
  );
  transition: transform 300ms cubic-bezier(0.42, 0, 0.58, 1) 0s;
`;

const CarouselTrack = (props: StyledTrackProps) => {
  return <StyledTrack {...props}>{props.children}</StyledTrack>;
};

export default CarouselTrack;
