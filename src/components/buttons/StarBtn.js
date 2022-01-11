import React from 'react';
import styled from 'styled-components';
import { BsStar } from "react-icons/bs";

//Dummy Component
const StarBtn = props => {  
  return (
    <Stars>
      <BsStar />
    </Stars>
  )
}
export default StarBtn

// const styles = {
//   stars: {
//     height: '50px',
//     cursor: 'pointer',
//     borderRadius: '50%' 
//   }
// }

const theme = {
  gray: {
    default: "transparent",
    hover: "#CF9FFF",
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457"
  }
};

const Stars = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: rgb(163,173,194);
  padding: 10px 20px;
  border: none;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
    outline: 0;
    color: black;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Stars.defaultProps = {
  theme: "gray"
};