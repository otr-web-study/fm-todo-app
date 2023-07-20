import { styled } from 'styled-components';

const Form = styled.form`
  min-height: 46px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-inline: 20px;
  background-color: ${(props) => props.theme.bgSecondary};
  border-radius: var(--radii);
`;

const Button = styled.button`
  width: 20px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: ${(props) => props.theme.bgSecondary};
  border: 1px solid ${(props) => props.theme.fcLight};
`;

const Input = styled.input.attrs({
  placeholder: 'Create a new todo...',
})`
  width: 100%;
  border: none;
`;

export const NewTodo = () => {
  return (
    <Form>
      <Button />
      <Input />
    </Form>
  );
};
