import { FC, ReactNode } from 'react';
import { styled } from 'styled-components';

interface SrOnlySpanProps {
  children: ReactNode;
}

const SrOnlySpanEl = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

export const SrOnlySpan: FC<SrOnlySpanProps> = ({ children }) => {
  return <SrOnlySpanEl className="sronlyspan">{children}</SrOnlySpanEl>;
};
