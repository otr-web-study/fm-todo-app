import { styled } from 'styled-components';

export const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.bg};
  font-size: var(--fs);
  position: relative;
  color: ${(props) => props.theme.fc};
  font-family: var(--family);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    height: 200px;
    width: 100%;
    background-image: url(${(props) => props.theme.bgMobile});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
  }

  @media (min-width: 640px) {
    &::before {
      background-image: ${(props) => `URL(${props.theme.bgDesktop})`};
      height: 300px;
    }
  }
`;
