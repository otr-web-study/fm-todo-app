import { styled } from 'styled-components';

const FooterEl = styled.footer`
  display: flex;
  justify-content: center;
  padding-block: 42px;

  @media (min-width: 640px) {
    padding-block: 52px;
  }
`;

const Text = styled.p`
  font-size: 13px;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.fcLight};
`;

export const Footer = () => {
  return (
    <FooterEl>
      <Text>Drag and drop to reorder list</Text>
    </FooterEl>
  );
};
