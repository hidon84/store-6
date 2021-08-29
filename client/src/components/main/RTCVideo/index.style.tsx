import styled from 'styled-components';

const Video = styled.video`
  display: block;
  border-radius: 10px;
  width: 200px;
  z-index: 15;
`;

const MirroredVideo = styled.video`
  display: block;
  border-radius: 10px;
  width: 200px;
  z-index: 15;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg); /* Safari and Chrome */
  -moz-transform: rotateY(180deg); /* Firefox */
`;

export { Video, MirroredVideo };
