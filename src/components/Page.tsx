import { styled } from 'styled-components';

export const Page = styled.div`
  min-height: 100vh;
  width: 100%;

  &::after {
    content: '';
    position: fixed;
    top: 0;
    height: 200px;
    width: 100%;
    background-image: url(${(props) => props.theme.bgMobile});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media (min-width: 767px) {
    &::after {
      background-image: ${(props) => `URL(${props.theme.bgDesktop})`};
      height: 300px;
    }
  }
`;
