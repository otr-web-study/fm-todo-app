import { styled } from 'styled-components';
import { useNewTodo } from './useNewTodo';

const Form = styled.form`
  min-height: 46px;
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;
  gap: 10px;
  padding-inline: 20px;
  background-color: ${(props) => props.theme.bgSecondary};
  border-radius: var(--radii);

  @media (min-width: 640px) {
    min-height: 63px;
    padding-inline: 25px;
    gap: 23px;
  }
`;

const Button = styled.button.attrs({
  type: 'submit',
})`
  position: relative;
  width: 21px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: ${(props) => props.theme.bgSecondary};
  border: 1px solid ${(props) => props.theme.fcVeryLight};
  cursor: pointer;

  &::after {
    content: '+';
    width: 100%;
    height: 100%;
    background-image: var(--grad);
    color: white;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: var(--fw-bold);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
    border: none;
  }

  @media (min-width: 640px) {
    width: 26px;
  }
`;

const Input = styled.input.attrs({
  placeholder: 'Create a new todo...',
})`
  width: 100%;
  height: 30px;
  border: none;
  font-family: var(--family);
  outline: none;
  font-size: 12px;
  color: ${(props) => props.theme.fc};
  background-color: ${(props) => props.theme.bgSecondary};

  &::placeholder {
    color: ${(props) => props.theme.fcLight};
    font-size: 12px;
  }

  @media (min-width: 640px) {
    font-size: 18px;

    &::placeholder {
      font-size: 18px;
    }
  }
`;

export const NewTodo = () => {
  const { value, handleChange, handleSubmit } = useNewTodo();
  return (
    <Form onSubmit={handleSubmit}>
      <Button aria-label="Add New" />
      <Input value={value} onChange={handleChange} />
    </Form>
  );
};
