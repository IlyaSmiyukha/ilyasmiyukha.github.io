import React from 'react';
import styled from "styled-components";

const ThemeLabel = styled.label`
  margin-right: 8px
`

const Span = styled.span`
  background-color: ${props => props.theme.colors.background};
  transition: color: .5s;
  cursor: pointer;
  user-select: none;
  display: inline-flex;
  align-items: center;
  text-transform: capitalize;
  position: relative;

  &:before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    border: solid 1px ${props => props.theme.colors.text};
    margin-right: 3px;
  }

  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    display: inline-block;
    width: 10px;
    height: 10px;
  }
`;

const InputRadio = styled.input`
  display: none;

  &:checked + ${Span} {
    &:after {
      background: ${props => props.theme.colors.text};
    }
  }
`;

const  ThemeButton = ({type, isSelected, onChange}) => {
  const id = `theme-${type}`;

  return (
    <ThemeLabel htmlFor={id}>
      <InputRadio
            type='radio'
            name='theme'
            defaultChecked={isSelected}
            id={id}
            onChange={() => onChange(type)}/>
      <Span>{type}</Span>
    </ThemeLabel>
  );
}

export default ThemeButton;
