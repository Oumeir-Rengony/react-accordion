import styled from "styled-components";

const Audio = ({ title, track }) => {
  return (
    <AudioWrapper>
      <h4>{title}</h4>
      <p>{track}</p>
    </AudioWrapper>
  );
};

const AudioWrapper = styled.div`
  font-size: 14px;
`;

export default Audio;
