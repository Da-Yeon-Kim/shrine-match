import { useState } from "react";
import styled from "styled-components";
import colors from "../styles/color";
import arrow_down from "../assets/arrow_down.png";

function Dropdown({ language, setLanguage }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectOption = (option) => {
    setLanguage(option);
    setIsOpen(false);
  };

  return (
    <DropdownWrapper>
      <SelectedOption onClick={toggleDropdown}>
        {language}
        <DropdownIcon src={arrow_down} alt="dropdown" />
      </SelectedOption>
      {isOpen && (
        <OptionsList>
          {["한국어", "English", "日本語"].map((option, index) => (
            <Option
              key={index}
              onClick={() => selectOption(option)}
              isSelected={language === option}
              role="button"
            >
              {option}
            </Option>
          ))}
        </OptionsList>
      )}
    </DropdownWrapper>
  );
}

export default Dropdown;

const DropdownWrapper = styled.div`
  position: relative;
  width: 110px;
`;

const SelectedOption = styled.div`
  padding: 10px;
  background-color: white;
  color: ${colors.button};
  font-family: "Pretendard";
  border: 3px solid ${colors.button};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownIcon = styled.img`
  height: 8px;
`;

const OptionsList = styled.ul`
  position: absolute;
  top: 105%;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  background-color: white;
  border: 3px solid ${colors.button};
  font-family: "Pretendard";
  border-radius: 5px;
  list-style: none;
  z-index: 10;
`;

const Option = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  color: ${colors.button};
  cursor: pointer;
  border-bottom: 2px solid ${colors.button};
  background-color: ${({ isSelected }) =>
    isSelected ? colors.button : "transparent"};
  color: ${({ isSelected }) => (isSelected ? "white" : colors.button)};

  &:last-child {
    border-bottom: none;
  }
`;
