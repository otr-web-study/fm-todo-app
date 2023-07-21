import { FC } from 'react';
import { styled } from 'styled-components';

const Label = styled.label`
  width: 21px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.fcVeryLight};
  cursor: pointer;

  @media (min-width: 640px) {
    width: 26px;
  }
`;

const Input = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

interface StyledCheckboxProps {
  checked: boolean;
  onChange: () => void;
}

export const StyledCheckbox: FC<StyledCheckboxProps> = ({ checked, onChange }) => {
  return (
    <Label>
      <Input checked={checked} onChange={onChange} />
    </Label>
  );
};
