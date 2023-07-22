import { FC } from 'react';
import { styled } from 'styled-components';

const Label = styled.label`
  position: relative;
  width: 21px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.fcVeryLight};
  cursor: pointer;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: -1px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border: 1px solid transparent;
    background: linear-gradient(
          ${({ theme }) => theme.bgSecondary},
          ${({ theme }) => theme.bgSecondary}
        )
        padding-box,
      var(--grad) border-box;
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.3s ease-in-out, scale 0.3s ease-in-out;
    background: var(--icon-check), var(--grad);
    background-position: center;
    background-repeat: no-repeat;
  }

  &:has(:not(input:checked)):hover::after {
    opacity: 1;
  }

  &:has(input:checked)::before {
    opacity: 1;
  }

  &:has(input:checked):hover::before {
    scale: 1.1;
  }

  &:has(input:checked) ~ p {
    text-decoration: line-through;
    color: ${(props) => props.theme.fcMoreLight};
  }

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
