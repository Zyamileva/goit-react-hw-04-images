import styled from '@emotion/styled';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  padding: 10px 25px;

  font-weight: 500;
  font-size: 18px;
  border: 1px solid var(--accent);
  border-radius: 5px;
  cursor: pointer;
  box-shadow: var(--main-shadow);
  transition: all 300ms ease-in-out;
  :hover {
    color: red;
    background-color: blue;
  }

  :focus {
    color: red;
    background-color: blue;
    outline: 3px solid var(--bg);
    box-shadow: 0px 0px 0px 6px var(--accent);
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  /* ::placeholder {
  font: inherit;
  font-size: 18px;
} */
`;
