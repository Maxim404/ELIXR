import styled from "styled-components/macro";
import {Link} from 'react-router-dom';

export const Button = styled(Link)`
  background: ${({ primary}) =>(primary ? '#000d1a' : 'CD853F')};
  white-space: nowrap;
  outline: none;
  border: none;
  max-width: 200px;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};
  padding: ${({ big }) => (big ? '16 px 40px' : '14px 24px')};
  font-size: ${({ big }) => ( big ? '20px' : '14px')};
  
  &:hover {
    transform: translateY(-2px);
  }
`;