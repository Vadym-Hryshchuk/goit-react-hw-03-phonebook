import styled from 'styled-components';

export const Item = styled.li`
  margin: 5px;
  padding: 5px;
  position: relative;
  border-radius: 10px;
  &:hover {
    transform: scale(1.01);
  }
  &::marker {
    font-size: 1.5em;
    color: red;
  }
  background: linear-gradient(
    90deg,
    rgba(152, 187, 132, 0.7) 39%,
    rgba(132, 136, 187, 0.7) 40%,
    rgba(28, 166, 184, 0.7) 85%,
    #6987d9 86%
  );
  span {
    margin-left: 20px;

    font-size: 24px;
    &:not(:first-child) {
      position: absolute;
      left: 38%;
      color: rgb(216, 211, 204);
    }
  }
  button {
    position: absolute;
    right: 4%;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      color: rgb(223, 224, 207);
      transform: scale(1.1);
      background-color: rgba(0, 0, 255, 0.5);
    }
  }
`;
