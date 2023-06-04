import styled from "styled-components";

const FullscreenLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const LoadingMessage = styled.p`
  color: #fff;
  font-size: 24px;
`;

export const FullscreenLoading = () => {
  return (
    <FullscreenLoader>
      <LoadingMessage>Loading...</LoadingMessage>
    </FullscreenLoader>
  );
};
