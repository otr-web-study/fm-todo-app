import { FC } from 'react';
import { styled } from 'styled-components';
import { type Filter } from '@/features/filter/filter-slice';

interface StyledRadiobuttonProps {
  items: Filter[];
  checked: Filter;
  onChange: (value: Filter) => void;
}

const Label = styled.label`
  text-transform: capitalize;
  user-select: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  transition: color 0.3s ease-in-out;

  &:has(input:checked) {
    color: ${({ theme }) => theme.fcActive};
  }

  &:has(:not(:checked)):hover {
    color: ${({ theme }) => theme.fcHover};
  }
`;

const Input = styled.input.attrs({
  type: 'radio',
})`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

export const StyledRadiobutton: FC<StyledRadiobuttonProps> = ({ items, checked, onChange }) => {
  return items.map((item) => (
    <Label key={item}>
      <Input
        name="filter"
        value={item}
        checked={item === checked}
        onChange={() => onChange(item)}
      />
      {item}
    </Label>
  ));
};
