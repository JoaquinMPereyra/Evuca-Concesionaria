import styled from 'styled-components';
import {colorPrimary, colorSecondary, colorFondo} from '../Normalisador/Normalizador';
import { Link } from 'react-router-dom';


export const FooterDiv = styled.footer`
    background-color: ${colorFondo};
    color: ${colorPrimary};
    width: 100%;
    position: relative;
    display: flex;
    bottom: 0;
    padding: 20px 0 ;
    text-align: center;
    font-size: 12px;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        padding:12px 0;
    }
`;

export const LinkEvukes = styled(Link)`
    color: ${colorPrimary};
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    &:hover{
        color: ${colorSecondary};
    }
`;

// link de navegacion
export const LinkFooter = styled(Link)`
    color: ${colorPrimary};
    text-decoration: none;
    font-size: 14px;
    padding: 5px;
    font-weight: bold;
    &:hover{
        color: ${colorSecondary};
    }
`;
