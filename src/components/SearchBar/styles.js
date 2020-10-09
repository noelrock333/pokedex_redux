import styled from 'styled-components';

const SearchBarComponent = styled.div`
  input[type='text'] {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 4px;
    border: 1px solid gray;
    outline: 0;
    height: 35px;
    box-sizing: border-box;
  }

  button {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 10px;
    background: #4EA95C;
    color: white;
    border: none;
    outline: 0;
    height: 35px;
    cursor: pointer;
    &:hover {
      background: #319b41;
    }
  }
`;

export default SearchBarComponent;
