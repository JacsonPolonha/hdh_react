import styled from "styled-components";
import { Link } from 'react-router-dom'; 

export const StyledLink = styled(Link)`
  background-color: #3498db;
  width: 30%;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`