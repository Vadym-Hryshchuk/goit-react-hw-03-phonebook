import { Form } from 'formik';
import styled from 'styled-components';

export const AddContactForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(152, 187, 132, 0.7);
  label {
    margin-right: 20px;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
  }
  input {
    margin-left: 10px;
    padding: 5px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
  }
  button {
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background-color: antiquewhite;
      border: 2px solid aquamarine;
    }
  }
`;
