import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface AppContainerProps {
  children: ReactNode;
}

const Container = styled.div`
  font-family: var(--family);
  min-height: 100vh;
  max-width: 345px;
  width: 100%;
  padding-inline: 10px;
  margin-inline: auto;
  position: relative;
  z-index: 1;

  @media (min-width: 640px) {
    max-width: 560px;
  }
`;

export const AppContainer: FC<AppContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
